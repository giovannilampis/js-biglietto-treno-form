"use strict"

// create a variable that expresses the customer's year of birth 

const birthYear = document.getElementById("birth-year");

// create a variable that expresses the number of kilometers that the customer wants to travel for

const kiloM = document.getElementById("kilometres");

// variable linked to the "Request ticket" button

const buttonTicket = document.getElementById("button-ticket");

// variable linked to the "End operation" button

const endOperation = document.getElementById("operation-end");

// variable linked to the "Print ticket" button

const printTicket = document.getElementById("print-ticket");



// ADD EVENT LISTENER
buttonTicket.addEventListener("click", function() {

    // create a variable that expresses the customer's year of first name

    const firstName = document.getElementById("first-name").value;

    // create a variable that expresses the customer's year of last name

    const lastName = document.getElementById("last-name").value;
    
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


    // create "responcePrice", a variable that expresses a link with p in HTML: 

    let responcePrice = document.getElementById("responce");




     // create "firstNameTicket", a variable that expresses a link with the proper cell in the table: 

    let firstNameTicket = document.getElementById("first-name-ticket");

    firstNameTicket.innerHTML = `${firstName}`;
    
    // create "firstNameTicket", a variable that expresses a link with the proper cell in the table: 

    let lastNameTicket = document.getElementById("last-name-ticket");

    lastNameTicket.innerHTML = `${lastName}`;

    // create "firstNameTicket", a variable that expresses a link with the proper cell in the table: 

    let priceTicket = document.getElementById("price-ticket");

     // create "offerTicket", a variable that expresses a link with the proper cell in the table: 

     let offerTicket = document.getElementById("offer-ticket");


    if (age < 18) {
         // price of the ticket for underage people
        priceTicket.innerHTML = `€ ${priceUnderAge}`;

         // offer on the ticket for underage people   
        offerTicket.innerHTML = `Tariffa Young 🏄‍♂️`;

    } else if (age > 64) {
        // price of the ticket for retired people
        priceTicket.innerHTML = `€ ${priceRetired}`;

        // offer on the ticket for retired people   
        offerTicket.innerHTML = `Tariffa Wisdom 🌸`;
    
    } else {
        // price of the ticket for adult, non-retired people
        priceTicket.innerHTML = `€ ${priceRegular}`;
    }

    // event prevent default, required because of the presence of a form in the HTML file
    event.preventDefault();

})

// ADD EVENT AudioListener, aimed at clearing the form

endOperation.addEventListener("click", function() {

    // get the form element

    let myForm = document.getElementById("my-form");

    // reset the form

    myForm.reset();

})

// ADD EVENT AudioListener, aimed at clearing the table

printTicket.addEventListener("click", function() {

        // get the table

        let myTable = document.getElementById("my-table");

        // reset the ticket
    
        let rows = myTable.rows.length;
        for (var i = rows - 1; i > 0; i--) {
          myTable.deleteRow(i);
        }

})

