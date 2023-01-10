let firstVariable = "Victor";
console.log(firstVariable);

let var1;
console.log(var1);

var1 = "Igor";
console.log(firstVariable,var1);

let var2 = null;
let var3;
console.log(var2, var3);

//2
let str = "blabla";
let int = 25;
let boo = true;
console.log(str, int , boo);
console.log(typeof str, typeof int, typeof boo);

let pays = "Pologne";
let capitale = "Varsovie";
let maPhrase = capitale + " est la capitale du pays : " + pays;
console.log(maPhrase);

let maPhraseNew = `${capitale} est la capitale du pays : ${pays}`;
console.log(maPhraseNew);

let aaa = "aaa";
let bbb = "bbb";
let ccc = 18;
console.log(`${aaa} dhdfhdf ${bbb} efsfeesf = ${ccc}`);

let variable1 = 7;
let variable2 = "7";
console.log(variable1 = variable2);
console.log(typeof variable2);
console.log(variable1 == variable2);
console.log(variable1 === variable2);

let integer = 5;
let string = "5";
console.log(integer + string);
string = 5;
console.log(integer + string);

//3
var prenom = "Victor";
let  age = 27;
const nom = "Firkowski";
console.log(prenom, age, nom);

var prenom = "...";
// let age = 25;
console.log(prenom, age);

// const nom = "+++";
console.log(nom);

exo3 = "test";
exo31 = 666;
if (true) {
    let exo3 = "test";
    var exo31 = 666;
}
console.log(exo3, exo31);

//methodes------------------------------------------------------------------------------------
let pLettre = prompt("Entrez votre prenom");
console.log(pLettre.charAt(0));

let lettres = prompt("Entrez votre prenom");
console.log(lettres.slice(1, lettres.length));

let prenom5 =  prompt("Entrez votre prenom");
if (prenom5.length < 5) {
    alert("votre prenom est trop court");
} else {
    alert(`La 5eme lettre de votre prenom est ${prenom5[4]}`);
}

let prenom6 = prompt("Entrez votre prenom");
if (prenom6.length < 5) {
    alert(`Votre prenom est trop court, il a ${prenom6.length} caracteres. La derniere lettre de votre prenom est ${prenom6[prenom6.length-1]}`);
} else {
    alert(`La 5eme lettre de votre prenom est ${prenom6[4]}`);
}

let minMaj = prompt('Entrez du text');
console.log(minMaj.toLowerCase());
console.log(minMaj.toUpperCase());
console.log(minMaj.charAt(0).toUpperCase() + minMaj.slice(1).toLowerCase());
console.log(minMaj.charAt(0).toLowerCase() + minMaj.slice(1).toUpperCase());