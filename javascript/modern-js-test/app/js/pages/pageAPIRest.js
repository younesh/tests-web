//  global vars
let dataTestsDispo; // liste des test dispo
let idTestClick;  // le id du test clické en cours
let dataDetailUser // le detail du user connecté
export function initAPIRest() {
    if (!$(".page-api-rest").length) {
        return;
    }
    console.log("initAPIRest !! ");
    $(".btn-connect").on("click", function (e) {
        $(".error").html('');
        $(".result").html('');
        var email = $("#email").val();
        var NumDossier = $("#Num_doss").val();

        if (!isEmail(email)) {
            $(".error").html("fomat incorect du mail ");
            $("#email").focus();
        } else if (!isDossier(NumDossier)) {
            $(".error").html("fomat incorrect du num dossier ");
            $("#Num_doss").focus();
        } else {
            // autntificaion au service identification : http://testrh-rec.sv.webnet.fr/api/login_check
            loadingOn();
            $.post('http://testrh-rec.sv.webnet.fr/api/login_check',
                {
                    _username: NumDossier, // '4EABAA' ||  NumDossier   
                    _password: email    // 'benjamin@test.com' ||  email
                }
            ).done(function (data) {
                var myToken = data.token;
                //  afficher le get du service "Get my session detail"  :  http://testrh-rec.sv.webnet.fr/api/sessions/my
                loadingOn();
                $.getJSON({
                    url: 'http://testrh-rec.sv.webnet.fr/api/sessions/my',
                    headers: {
                        'Authorization': 'Bearer ' + myToken // passer le token courant au service
                    }
                }
                ).done(function (data) {
                    getMySessionDetail(data);
                    loadingOn();
                    $.getJSON({
                        url: 'http://testrh-rec.sv.webnet.fr/api/tests',
                        headers: {
                            'Authorization': 'Bearer ' + myToken // passer le token courant au service
                        }
                    }
                    ).done(function (data) {
                        getTestsList(data);
                        // au clic sur un test afficher ses infos ds un popup
                        $(".result .testItem").on("click", function () {
                            // atteindre le test correspondant dans les testdispo
                            idTestClick = $(this).data("testid");
                            loadingOn();
                            $.getJSON({
                                url: 'http://testrh-rec.sv.webnet.fr/api/tests/' + idTestClick,
                                headers: {
                                    'Authorization': 'Bearer ' + myToken // passer le token courant au service
                                }
                            }
                            ).done(getTestDetails)
                                .always(loadingOff);
                        });

                    }).always(loadingOff)
                        .fail(function (data) {
                            failerCase(data, "(!) : échec de connexion au service 'gets tests' http://testrh-rec.sv.webnet.fr/api/tests");
                        });

                }).always(loadingOff)
                    .fail(function (data) { // fail du service "my session detail"  :  http://testrh-rec.sv.webnet.fr/api/sessions/my

                        failerCase(data, "(!) : échec de connexion au service http://testrh-rec.sv.webnet.fr/api/sessions/my (get my session detail)");

                    });
            }).always(loadingOff)
                .fail(function (data) {
                    failerCase(data, "(!)  : échec de connexion au http://testrh-rec.sv.webnet.fr/api/login_check ");
                });

        }
    }); // $(".btn-connect").on("click" ... 



}



/**
 * Description
 * 
 * @var data Description data
 * @var msg  Description msg
 * @return Description return
 */
function failerCase(data, msg) { // fail du service identification : http://testrh-rec.sv.webnet.fr/api/login_check
    console.log(data);
    $(".error").html(msg);  //"(!) : échec de connexion au http://testrh-rec.sv.webnet.fr/api/login_check  " 
}


function loadingOn() {
    $('#modalLoading').modal("show");
}

function loadingOff(data, textStatus) { // function(data,textStatus
    //console.log(textStatus);
    if (textStatus === "success" || textStatus === "error") {
        $('#modalLoading').modal("hide");
    }
}

function isEmail(myVar) { // tester si le text myVar est au format mail ou pas 
    let regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$', 'i');
    return regEmail.test(myVar);
}

function isDossier(myVar) { //test si le myvar est au format numero dossier 6 caractère alphanum majuscu
    let regDossier = new RegExp('[_A-Z0-9]{6,6}', 'g');
    return regDossier.test(myVar);
}

// getMySessionDetail : afficher dedail session du user connecté 
function getMySessionDetail(data) {
    dataDetailUser = data;
    $(".result").append(
        $("<h2>").text("Détail utilisateur"),
        $("<ul>").append(
            $("<li>").append(
                $("<strong>").text("nom : "),
                $("<span>").text(dataDetailUser.data.applicant.data.lastname)
            ),
            $("<li>").append(
                $("<strong>").text("Prénom : "),
                $("<span>").text(dataDetailUser.data.applicant.data.firstname)
            ),
            $("<li>").append(
                $("<strong>").text("Email : "),
                $("<span>").text(dataDetailUser.data.applicant.data.email)
            )
        )
    );
}  //  function getMySessionDetail(data)

// getTestsList : afficher la list dfes test disponible 
function getTestsList(data) {
    dataTestsDispo = data;
    $(".result").append("<h2> List des tests disponible </h2>");
    for (let i = 0; i < dataTestsDispo.data.length; i++) {
         let IsUserTest = "";
        // marquer les tests que le 'user' à déja fait avec class='IsUserTest'
        for (let j = 0; j < dataDetailUser.data.tests.data.length; j++) {
            if (dataTestsDispo.data[i].id == dataDetailUser.data.tests.data[j].id) IsUserTest = " class='IsUserTest'";
        }

        $(".result").append(
            $("<ul>").data("testid", dataTestsDispo.data[i].id).addClass('testItem').append(
                $("<li>").append(
                    $("<span class='res_field'>").append("Nom :"),
                    $("<span class='res_val'>").append(dataTestsDispo.data[i].name)
                ),
                $("<li>").append(
                    $("<span class='res_field'>").append("mode :"),
                    $("<span class='res_val'>").append(dataTestsDispo.data[i].mode)
                ),
                $("<li>").append(
                    $("<span class='res_field'>").append("technology :"),
                    $("<span class='res_val'>").append(
                        $("<ul>").append(
                            $("<li>").append(
                                $("<span class='res_field'>").append("Id :"),
                                $("<span class='res_val'>").append(dataTestsDispo.data[i].technology.data.id)
                            ),
                            $("<li>").append(
                                $("<span class='res_field'>").append("nom :"),
                                $("<span class='res_val'>").append(dataTestsDispo.data[i].technology.data.name)
                            ),
                            $("<li>").append(
                                $("<span class='res_field'>").append("image :"),
                                $("<span class='res_val'>").append(  // .is(dataTestsDispo.data[i].technology.data.image != 'NULL')
                                    $("<img>").attr("src", dataTestsDispo.data[i].technology.data.image)
                                    //  dataTestsDispo.data[i].technology.data.image
                                )
                            )

                        )
                    )
                )

            )
        );  //  $(".result").append
    }
} // function getTestsList(data)



// http://testrh-rec.sv.webnet.fr/api/tests/{:ID}
/* getTestDetails :  revoie le détail du test cliqué sur une popup
*/
function getTestDetails(data) {
    let testDescription = "";
    let TestName = "";
    for (let i = 0; i < dataTestsDispo.data.length; i++) {
        if (dataTestsDispo.data[i].id == idTestClick) {
            testDescription = dataTestsDispo.data[i].description;
            TestName = dataTestsDispo.data[i].name;
            nbr_qt = data.data.questions.data.length;
            rnd_qt = Math.floor(Math.random() * nbr_qt);
            libQuestHazard = data.data.questions.data[rnd_qt].label;
        }
    }

    $('#myModal .modal-header .modal-title').html(" Test : " + TestName);
    $('#myModal .modal-body').html("");
    $('#myModal .modal-body').append(
        $("<dl>").append(
            $("<dt>").append("Description :"),
            $("<dd>").append(testDescription),
            $("<dt>").append("Exemple de question  :"),
            $("<dd>").append(libQuestHazard)
        )
    );
    $('#myModal').modal("show");
} //    function getTestDetails (data)


