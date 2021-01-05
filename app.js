// Elements pour lesquels vous créerez des datasets directement dans le code HTML.
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');

// Elements pour lesquels vous créerez des datasets depuis JavaScript.
let p5 = document.getElementById('p5');
let p6 = document.getElementById('p6');
let p7 = document.getElementById('p7');
let p8 = document.getElementById('p8');

let number = parseFloat(p1.dataset.number) + 10;
p1.dataset.number = number.toString();

let chaine = p2.innerHTML.length;
p2.dataset.carac = chaine.toString();

let array = [p3.dataset.array];
p3.innerHTML = array.toString();

if(p4.dataset.booleanTest === "ok") {
    p4.innerHTML = "C'est correct";
}

else {
    p4.innerHTML = "C'est incorrect";
}

p5.dataset.number = "5";
p6.dataset.carac = "12";
p7.dataset.array = "working, play table tennis, dancing, eating";
p8.dataset.booleanTest = "ok";

let number2 = parseFloat(p5.dataset.number) + 10;
p5.dataset.number = number2.toString();

let chaine2 = p6.innerHTML.length;
p6.dataset.carac = chaine2.toString();

let array2 = [p7.dataset.array];
p7.innerHTML = array2.toString();

if(p8.dataset.booleanTest === "ok") {
    p8.innerHTML = "C'est correct";
}

else {
    p8.innerHTML = "C'est incorrect";
}