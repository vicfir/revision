// let firstVariable = "Victor";
// console.log(firstVariable);

// let var1;
// console.log(var1);

// var1 = "Igor";
// console.log(firstVariable,var1);

// let var2 = null;
// let var3;
// console.log(var2, var3);

// //2
// let str = "blabla";
// let int = 25;
// let boo = true;
// console.log(str, int , boo);
// console.log(typeof str, typeof int, typeof boo);

// let pays = "Pologne";
// let capitale = "Varsovie";
// let maPhrase = capitale + " est la capitale du pays : " + pays;
// console.log(maPhrase);

// let maPhraseNew = `${capitale} est la capitale du pays : ${pays}`;
// console.log(maPhraseNew);

// let aaa = "aaa";
// let bbb = "bbb";
// let ccc = 18;
// console.log(`${aaa} dhdfhdf ${bbb} efsfeesf = ${ccc}`);

// let variable1 = 7;
// let variable2 = "7";
// console.log(variable1 = variable2);
// console.log(typeof variable2);
// console.log(variable1 == variable2);
// console.log(variable1 === variable2);

// let integer = 5;
// let string = "5";
// console.log(integer + string);
// string = 5;
// console.log(integer + string);

// //3
// var prenom = "Victor";
// let  age = 27;
// const nom = "Firkowski";
// console.log(prenom, age, nom);

// var prenom = "...";
// // let age = 25;
// console.log(prenom, age);

// // const nom = "+++";
// console.log(nom);

// exo3 = "test";
// exo31 = 666;
// if (true) {
//     let exo3 = "test";
//     var exo31 = 666;
// }
// console.log(exo3, exo31);

//methodes-----------------------------------------------------------------
// let pLettre = prompt("Entrez votre prenom");
// console.log(pLettre.charAt(0));

// let lettres = prompt("Entrez votre prenom");
// console.log(lettres.slice(1, lettres.length));

// let prenom5 =  prompt("Entrez votre prenom");
// if (prenom5.length < 5) {
//     alert("votre prenom est trop court");
// } else {
//     alert(`La 5eme lettre de votre prenom est ${prenom5[4]}`);
// }

// let prenom6 = prompt("Entrez votre prenom");
// if (prenom6.length < 5) {
//     alert(`Votre prenom est trop court, il a ${prenom6.length} caracteres. La derniere lettre de votre prenom est ${prenom6[prenom6.length-1]}`);
// } else {
//     alert(`La 5eme lettre de votre prenom est ${prenom6[4]}`);
// }

// let minMaj = prompt('Entrez du text');
// console.log(minMaj.toLowerCase());
// console.log(minMaj.toUpperCase());
// console.log(minMaj.charAt(0).toUpperCase() + minMaj.slice(1).toLowerCase());
// console.log(minMaj.charAt(0).toLowerCase() + minMaj.slice(1).toUpperCase());

//Array---------------------------------------------------------
let arr1 = [];
console.log(arr1, typeof arr1);

let arr2 = ["txt", 34, true, []];
console.log(arr2[0],arr2[1], arr2[2], arr2[3]);

let arr3 = ["test", "testb", "test3", "test4", "test5"];
console.log(arr3[2]);
console.log(arr3[0], arr3[4]);
console.log(arr3[1].slice(0,4).toUpperCase() + arr3[1].charAt(4).toLowerCase());
console.log(arr3[3][0]);
console.log(arr3[4].slice(1, 5));
console.log(arr3[0].charAt(0).toLowerCase() + arr3[0].charAt(1).toUpperCase());
console.log(arr3[0] + arr3[2]);

let arr4 = [];
arr4.push("Victor", "Igor", "Tomasz", "Simon", "Dean");
console.log(arr4);

let arr5 = ["Victor", "Igor", "Tomasz", "Simon", "Dean"];
arr4.unshift("Maxence")
arr4.push("Louise");
console.log(arr4);

let arr6 = ["Victor", "Igor", "Tomasz", "Simon", "Dean"];
arr6.shift();
arr6.pop();
console.log(arr6);

let arr7 = ["Victor", "Igor", "Tomasz", "Simon", "Dean"];
arr7 = arr7.slice(2, 3);
console.log(arr7);

let arr8 =  ["Victor", "Igor", "Tomasz", "Simon", "Dean"];
let arr81 = arr8.splice(1,1,"Ayhan");
let arr82 = arr8.splice(3,3, "Elias");
console.log(arr8);

let arr9 = ["Ayoub", "Jamila", "Alex", "Natchez", "Bene"];
let arr91 = arr9.splice(1, 1, "Zulma");
let arr92 = arr9.splice(0, 1, "Adame");
console.log(arr9);
