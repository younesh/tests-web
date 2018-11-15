
export function initTestJsPage() {
    if (!$(".page-test-js").length) {
        return;
    }
    console.log("initTestJsPage !! ");
    let f = new Foo("2");
    f.method1(" param test de la metode js ");
    //

    let p1 = new personne("selecon", "ahmed", "02/05/1980");
    let p2 = new personne("albiz","khalid", "01/01/1981");
    let pa1 = new personneActif("chagir", "hatim", "02/05/1986");

    console.log(" la P1 se presnete > " + p1.sePresenter());
    console.log(" la P2 se presnete > " + p2.sePresenter());

    console.log(" la pa1 se presnete > " + pa1.sePresenter());
    var jk = "qsdqsd";
}




// test Poo en es6 
class Foo {
    constructor(arg1) {
        /* *** ATTRIBUTS *** */
        this.attr1 = "One";
        this.attr2 = arg1;
    }

    /* *** DEFINITION DES METHODES *** */
    method1(param1) {
        console.log(this.attr1 + " " + this.attr2 + " " + param1);
    }
}

class personne {
    constructor(nom = "(vide)", prenom="(vide)", dateNaissance="(vide)"){
        this.name=nom;
        this.lastName=prenom;
        this.birdDay=dateNaissance;
    }

    sePresenter() {
        return "mon nom est : " + this.name + ", prenom est " + this.lastName + ", et je suis né le " + this.birdDay;
    }
}

class personneActif extends personne { 
    constructor(nom = "(vide)", prenom = "(vide)", dateNaissance = "(vide)"){
        super(nom, prenom, dateNaissance);
        this.secteur = "informatique "
    }
    sePresenter() {
        return super.sePresenter() + " et  le secteur = " +  this.secteur;
    }
}