@echo off
start cmd.exe "brunch watch --server"

---


/* DECLARATION FUNCTION PART*/

 function dispalyDatailUser () {

 }


// autenthif

 Function autentifcation () {
        var dfd = $.Deferred();
        $.post(domainService + '/api/login_check',
                {
                    _username: NumDossier, // '4EABAA' ||  NumDossier
                    _password: email    // 'benjamin@test.com' ||  email
                }
            ).done (function (data) { 
	         var myToken = data.token;
                 dfd.resolve(myToken);

      	     })
            .fail(function (data) {
                dfd.reject();
             });
 }

 Function autentifcation () {

function getDetai


  	     $.when(authentification).done(
		 function() {
                   $.when()
		})




