function () {

function Document (numEnreg, titre) {
    this.numEnreg = numEnreg;
    this.titre = titre;
    this.isnbrPage = function() {
        for nbrPage <-- 0 à 300;
        if nbrPage >=100;
            console.log ("Nombre de page entre 0 et 100");
        else 
            if nbrPage >=101 ET nbrPage <=200;
                console.log ("Nombre de page entre 101 et 200");  
            else
                if nbrPage >=201 ET nbrPage <=300;
                    console.log ("Nombre de page entre 201 et 300"); 
                else 
                    console.log ("Nombre de page supérieur à 301");
            
    }
    
}

function Livre (numEnreg, titre, Auteurs, nbrPages) {
    Document.call(this, numEnreg, titre)
    this.Auteurs = Auteurs;
    this.nbrPages = nbrPages;

}

function Revue (numEnreg, titre, mois, annee) {
    Document.call(this, numEnreg, titre)
    this.mois = mois;
    this.annee = annee;

}

function Dictionnaire (numEnreg, titre, langue) {
    Document.call(this, numEnreg, titre)
    this.langue = langue;
}

Livre.prototype = Object.create(Document.prototype);
Revue.prototype = Object.create(Document.prototype);
Dictionnaire.prototype = Object.create(Document.prototype);

let HarryPotter = new livre (22, 'HarryPotter', "Buckermann" 310);
display(HarryPotte);
let LeRenouveau = new Revue (03, "Le Renouveau", 12, 2020);
display(LeRenouveau);
let Larousse = new Dictionnaire (01, "Larousse", "Français");
display (Larousse);
}) ();