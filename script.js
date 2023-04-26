const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');

const outDay = document.querySelector('.day');
const outMonth = document.querySelector('.month');
const outYear = document.querySelector('.year');

const btn = document.querySelector('btn-submit')


btn.addEventListener("click", function(){

    outYear.innerHTML = year.value - 2023;

})




const mensagens = {
    Day: {
        valueMissing:  "The field is required ",
        patternMismatch: "Must be a valid day",
        tooShort: "Must be a valid date"
    },
    Month: {
        valueMissing: "The field is required ",
        typeMismatch: "Must be a valid month",
        tooShort: ""
    },
    Year: {
        valueMissing: "The field is required ",
        patternMismatch: "Must be in the past",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    }
   
}