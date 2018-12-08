const beltCountHTML = document.querySelector('.beltCount');
const alkLevelHTML = document.querySelector('.alkLevel');
const alertHTML = document.querySelector('.alert');

const kieliszek = document.querySelector('#kieliszek');
const browar = document.querySelector('#browar');
const tequila = document.querySelector('#tequila');
const telOdMamy = document.querySelector('#telOdMamy');
const telOdZiomka = document.querySelector('#telOdZiomka');
const pizza = document.querySelector('#pizza');
const kebab = document.querySelector('#kebab');

let beltCount = 0;
let alkLevel = 1;

alertHTML.innerHTML = "Aaaaaaaaaaaaaaaaa kurwaaaaaaaaaaaaaaa";

let re = () => {
    if (alkLevel > 60 && alkLevel % 7 === 0) {
        alertHTML.innerHTML = "Błłłłłłłłłłłłłłłlleeeeeeeee Bełt";
        alertHTML.setAttribute('class', 'alert bad');
        alert("bełt")
        alkLevel -= 30;
    }

    if (alkLevel > 100) {
        alertHTML.innerHTML = "Zgon";
        beltCount++;
        alkLevel = 20;

    }

    beltCountHTML.innerHTML = beltCount;
    alkLevelHTML.innerHTML = alkLevel;
}

kieliszek.addEventListener('click', () => {
        alertHTML.innerHTML = "Weszło";
        alertHTML.setAttribute('class', 'ok alert');
        alkLevel += 7;

    re();
});
browar.addEventListener('click', () => {


        alertHTML.innerHTML = "Weszło";
        alertHTML.setAttribute('class', 'ok alert');
        alkLevel += 4;

    re();
});
tequila.addEventListener('click', () => {


        alertHTML.innerHTML = "Weszło";
        alertHTML.setAttribute('class', 'ok alert');
        alkLevel += 4;

    re();
});
telOdMamy.addEventListener('click', () => {


        alertHTML.innerHTML = "AAAAAAAAAAAAAA ODRZUĆ";
        alertHTML.setAttribute('class', 'ok alert');
        alkLevel += 4;

    re();
});
telOdZiomka.addEventListener('click', () => {


        alertHTML.innerHTML = "AAAAAAAAAAAAAA ODRZUĆ";
        alertHTML.setAttribute('class', 'ok alert');
        alkLevel += 4;

    re();
});
pizza.addEventListener('click', () => {


        alertHTML.innerHTML = "AAAAAAAAAAAAAA ODRZUĆ";
        alertHTML.setAttribute('class', 'ok alert');
        alkLevel += 4;

    re();
});
kebab.addEventListener('click', () => {
    if (alkLevel % 5) {
        alertHTML.innerHTML = "Jebany turas, nie idę";
        alertHTML.setAttribute('class', 'alert ok');

        alkLevel += 10;
    } else {
        alertHTML.innerHTML = "Amamamam błeeeeeee bełt";
        alertHTML.setAttribute('class', 'ok alert');
        alkLevel -= 30;
    }
    re();
});

