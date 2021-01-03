"use strict"

const namesGen = ["Kokarthy Satanrtin", "Cheekford", "Hellrancis Firebertson",
    "Pemallow", "Daviesazor", "Viserbell", "Grubbyha", "Marshapointy Do'ker", "Jarleman",
    "Watsonwolf Stepin", "Mutennae The Witt", "Mephistophalexander", "Hayesano", "Sandersend",
    "Warinable", "Torresiel", "Jonestinky", "Jorslight", "Andersonwave", "Stinkramos", "Roya",
    "Galadriel", "Legolas", "Azbson", "Hugolga", "Haradrin", "Doblton", "Spenolas", "Grubbyhami"];

const raceChoice = {

    'Human': { 'str': 0, 'dex': 1, 'con': 1, 'int': 0, 'wis': -2, 'char': 1 },
    'Dwarf': { 'str': 0, 'dex': -2, 'con': 1, 'int': 0, 'wis': 1, 'char': 0 },
    'Elf': { 'str': 0, 'dex': 2, 'con': 0, 'int': 1, 'wis': 1, 'char': 0 },
    'Orc': { 'str': 2, 'dex': 0, 'con': 1, 'int': -2, 'wis': 0, 'char': 0 },
    'Halfling': { 'str': 2, 'dex': 0, 'con': 0, 'int': 0, 'wis': 0, 'char': 1 },
    'Gnome': { 'str': 0, 'dex': 0, 'con': 1, 'int': 1, 'wis': 1, 'char': 0 }

};

const classChoice = {

    'Fighter': { 'str': 2, 'dex': 0, 'con': 1, 'int': -1, 'wis': 0, 'char': -1 },
    'Bard': { 'str': -2, 'dex': 0, 'con': 0, 'int': 1, 'wis': 0, 'char': 3 },
    'Cleric': { 'str': -1, 'dex': 0, 'con': 0, 'int': 1, 'wis': 2, 'char': 1 },
    'Wizzard': { 'str': -1, 'dex': 1, 'con': 0, 'int': 2, 'wis': 3, 'char': 0 },
    'Barbarian': { 'str': 2, 'dex': 1, 'con': 1, 'int': -2, 'wis': -1, 'char': -1 },
    'Paladin': { 'str': 0, 'dex': 2, 'con': -2, 'int': 0, 'wis': 2, 'char': 0 },

};

function genAge(x) {  // ******* fonction qui sera utilisee pour generer l'age du personnage par rapport a la race qu'il a choisi

    return Math.floor(Math.random() * x);


}



let stats = [];



/** Quand la page est chargee ( onload ) ca va mettre dans la table avec les stats ( str, int, dex... etc ) des 0.
 * Dans les parametres on a 2 fonctions ( x = addRace()  ,  y = addClass()  )  qui ajoutent les classes et races dans les options du <select>
 * 
 * @param {function} x 
 * @param {function} y 
 */


function init(x, y) { // ********* Ajoute les 0 dans le stats

    let arr = [0, 0, 0, 0, 0, 0];
    let displayedData = document.getElementById("tbody");

    for (let i in arr) {

        displayedData.innerHTML += "<td>" + arr[i] + "</td>";

    }
    document.getElementById("additionHTML").innerHTML = "";

}


/**
 * Ca fait un sort (alphabetique) sur les races
 * @returns {Array} sortedArray
 */
function sortRace () { // *********** Function qui fait un sort pour les options de race sans etre appelee encore (est appelee dans addRace)

    let sortedArray = [];

    for ( let i in raceChoice ){

        sortedArray.push(i);


    }
    sortedArray.sort();

    return sortedArray;

}

function sortClass (){ // *********** Function qui fait un sort pour les options de class sans etre appelee encore (est appelee dans addClass)

    let classSort = [];

    for ( let i in classChoice ){

        classSort.push(i);

    }
    classSort.sort();
    return classSort;

}

function addRace() { // ********* Ajoute les races dans le <select> </select>

    let remplitSelect = form.race;

    for ( let i of sortRace() ) {  // *************** Ici j'appel la fonction sortRace pour faire le sort des options de Race

        remplitSelect.innerHTML += "<option>" + i + "</option>";

    }


}


function addClass() {  // ********* Ajoute les classes dans le <select> </select>

    let cl = document.getElementById("class");

    for ( let i of sortClass() ) {  // ********************Ici j'appel de la fonction sortClass 

        cl.innerHTML += "<option>" + i + "</option>";

    }

}



function namaeWa() {  // ************* Ajoute un nom random onClick


    let randomName = Math.floor(Math.random() * 29);
    document.getElementById("fname").value = namesGen[randomName];

    return false;

}

function ages() { // Genere des ages

    let ageGen = {

        'Human': { 'age': genAge(100) },
        'Dwarf': { 'age': genAge(350) },
        'Elf': { 'age': genAge(700) },
        'Orc': { 'age': genAge(200) },
        'Halfling': { 'age': genAge(250) },
        'Gnome': { 'age': genAge(80) }

    };


    let choix = document.getElementById("race").value;
    let resultAge = document.getElementById("fage");


    for (let i in raceChoice) {

        if (choix == i) {


            resultAge.value = ageGen[i].age;

        }
    }
    return false;
}




function calc() {   // ********* Calcule les stats


    let d61, d62, d63, d64, d65, d66;

    var d6Arr1 = [], d6Arr2 = [], d6Arr3 = [], d6Arr4 = [], d6Arr5 = [], d6Arr6 = [];

    let status = [];


    while (d6Arr1.length < 4) {  // *********** Genere 6 arrays (dans un array) contenant 4 nombres de 1 a 6 (les stats)
        d61 = Math.floor(Math.random() * 6) + 1;
        d6Arr1.push(d61);
    }
    while (d6Arr2.length < 4) {
        d62 = Math.floor(Math.random() * 6) + 1;
        d6Arr2.push(d62);
    }
    while (d6Arr3.length < 4) {
        d63 = Math.floor(Math.random() * 6) + 1;
        d6Arr3.push(d63);
    }
    while (d6Arr4.length < 4) {
        d64 = Math.floor(Math.random() * 6) + 1;
        d6Arr4.push(d64);
    }
    while (d6Arr5.length < 4) {
        d65 = Math.floor(Math.random() * 6) + 1;
        d6Arr5.push(d65);
    }
    while (d6Arr6.length < 4) {
        d66 = Math.floor(Math.random() * 6) + 1;
        d6Arr6.push(d66);
    }

    status.push(d6Arr1, d6Arr2, d6Arr3, d6Arr4, d6Arr5, d6Arr6);  // ajoute dans un array les 6 arrays crees juste avant




    for (let i in status) {  // ****** Donne le total du de chaque [i] dans le tableau de stats

        var total = 0;

        for (let j in status[i]) {  // ******** Parcourt le chaque array dans "status" et fait l'addition des nombres dans chaque array 

            total += status[i][j];

        }

        stats.push(total);  // ********** Mets dans l'array stats la somme des arrays (total) du status (pour avoir un seul array avec 6 nombres)

    }

    return stats;
}






function envoyer() {  // ****************** onClick 

    let charRace;    // ************ Ici j'ai mis les variables utilisees plus tard
    let charClass;
    let raceBonus = [];
    let classBonus = [];
    let finalStats = [];

    let yourscores = document.getElementById("tbody");  // ************ Ici on vide le tbody (remplit de 0) pour pouvoir mettre les vrai stats
    yourscores.innerHTML = "";
    let tableau = document.getElementById("table");
    let yourName = document.getElementById("fname").value;  //************  Ici je viens prendre les choix de nom, race, class etc etc etc
    let yourAge = document.getElementById("fage").value;
    let yourGender = document.getElementById("gender").value;
    let yourRace = document.getElementById("race").value;
    let yourClass = document.getElementById("class").value;
    


    calc();          // *********** Appel la fonction "calc" qui calcule les stats du personnage

    const choixRace = document.getElementById("race").value;
    const choixClass = document.getElementById("class").value;
    let displayedData = document.getElementById("tbody");

    for (let i in raceChoice) {   // *********** Parcourt l'objet raceChoice (declare au debut du code)


        if (i === choixRace) {     // ************* Si le key dans raceChoice est = a la race choisi, alors la variable charRace sera raceChoice[i]

            charRace = raceChoice[i];


        }


    }
    for (let y in classChoice) {  // *********** Parcourt l'objet classChoice (declare au debut du code)

        if (y == choixClass) {  // ************* Si le key dans classChoice est = a la classe choisi, alors la variable charClass sera classChoice[i]

            charClass = classChoice[y];


        }
    }



    for (let j in charRace) {   // *********** Parcourt l'objet charRace 

        raceBonus.push(charRace[j]);  // *********** mets dans l'array vide raceBonus le bonus de cette race


    }

    for (let r in charClass) {
        classBonus.push(charClass[r]);  // *********** mets dans l'array vide classBonus le bonus de cette classe
    }

    for (let i = 0; i < 6; i++) {

        finalStats.push(stats[i] + raceBonus[i] + classBonus[i]);   // *********** mets dans l'array vide finalStats les 2 bonus (class race)

    }

    for (let k in finalStats) {



        yourscores.innerHTML += "<td>" + finalStats[k] + "</td>";  // *********** Ajoute dynamiquement 


    }



    document.getElementById("additionHTML").innerHTML = "<h2> Beware! " + yourName + " the great " + yourClass + " of the " + yourRace + "s is now among us! </h2>";
    

    return false;
}



