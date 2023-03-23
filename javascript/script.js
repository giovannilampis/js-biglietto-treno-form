"use strict"

// create a variable that expresses the customer's year of birth 

const birthYear = document.getElementById("birth-year");

// create a variable that expresses the number of kilometers that the customer wants to travel for

const kiloM = document.getElementById("kilometres");

// variable linked to the "Request ticket" button

const buttonTicket = document.getElementById("button-ticket");

// variable linked to the "End operation" button

const endOperation = document.getElementById("operation-end");



// ADD EVENT LISTENER
buttonTicket.addEventListener("click", function() {
    
    // the variable "birth" gets the customer's year of birth and converts it into a number

    const birth = parseInt(birthYear.value);

    // console.log(birth);


    // the variable "today" expresses the current full date 

    let today = new Date();


    // the variable "currentYear" expresses the current year, extrapolating it from the variable "today"

    let currentYear = today.getFullYear();

    // console.log(currentYear);


    // the variable "age" expresses the age of the customer

    let age = currentYear - birth;

    // console.log(age);


    // the variable "tripKm" gets the kilometric lenght of the customer's trip and converts it into a number

    const tripKm = parseInt(kiloM.value);

    // console.log(tripKm);, for


    // the variable "priceRegular" expresses the regurar price of the ticket, for adults and non-retired persons

    let priceRegular = tripKm * 0.21;

    // prices must have a maximum of two decimal places

    priceRegular = priceRegular.toFixed(2);


     // the variable "priceUnderAge" expresses the price for underage people

    let priceUnderAge = priceRegular / 100 * 80;


     // the variable "priceRetired" expresses the price for retired people

    let priceRetired = priceRegular / 100 * 60;


    // createm "responcePrice", a variable that expresses a link with p in HTML: 

    let responcePrice = document.getElementById("responce");

    if (age < 18) {
         // price of the ticket for underage people
        responcePrice.innerHTML += `${priceUnderAge}, hai diritto ad uno sconto del 20% 🤩`;

    } else if (age > 64) {
        // price of the ticket for retired people
        responcePrice.innerHTML += `${priceRetired}, avete diritto ad uno sconto del 40% 😊`;
    
    } else {
        // price of the ticket for adult, non-retired people
        responcePrice.innerHTML += `${priceRegular}, le auguriamo uno splendido viaggio 🚞`;
    }

    // event prevent default, required because of the presence of a form in the HTML file
    event.preventDefault();

})

// ADD EVENT AudioListener, aimed at concluding the transaction

endOperation.addEventListener("click", function() {

    // get the form element

    let myForm = document.getElementById("my-form");

    // reset the form

    myForm.reset();

})

