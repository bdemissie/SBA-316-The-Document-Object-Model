
// Select the contact-form

var contactForm = document.querySelector(".contact-form")

// Select the div to store the contact cards

var parentElement = document.getElementById("contact-card"); 

// Add an event listener for the form submit event
//The event listener is set up correctly to intercept the form submission, 
// prevent the default action (which stops the form from being sent to the server), 
// and handle validation before proceeding

contactForm.addEventListener("submit", function(e) {

    // Prevent default submit action
    e.preventDefault();

    // check if user selected State from the dropdown list
    var isStateValid = validateState();

    // Break out of the submit event if state is not selected

    if(!isStateValid) {

        contactForm.reset

        // Display a warning message for user to select a state
        alert("Please select a State before submitting the form.");

        return
    }

    // Run the function to dynamically create the contact cards
    submitForm(parentElement)
    
    // Clear inputs and reset the form

    contactForm.reset()
}
)

// ***************************************************************

// This function will submit the contact form and generate a contact card

function submitForm(parentElement) {

    // Cache the values from the contact form to variables

    var firstName = document.querySelector(".first-name").value;
    var lastName = document.querySelector(".last-name").value;
    var email = document.querySelector(".email").value;
    var phone = document.querySelector(".phone-number").value;
    var streetAddress = document.querySelector(".street-address").value;
    var addressLine2 = document.querySelector(".address-optional").value;
    var city = document.querySelector(".city").value;
    var state = document.querySelector(".state").value;
    var zip = document.querySelector(".zip").value;

    // Assemble the form variables into an object array with key-value pair inputs

    var contactInfo = [
        { Label: "Full Name", Info: firstName.concat(" ", lastName)},        
        { Label: "Address", Info: streetAddress.concat(" ", addressLine2) },
        { Label: "City", Info: city.concat(" ", state, " ", zip) },
        { Label: "Email", Info: email },
        { Label: "Phone", Info: phone }
    ];

    // Create a table row div
    // This is the div the contact card is going to be appended to
    // Bootstrap styling class is also added to display the contact cards in a column grid.
    
    let tableRow = document.createElement("div")
    tableRow.classList.add("row")

    // Create a table element and apply custom sytling class

    var table = document.createElement("table");
    table.classList.add("contact-info");

    // Iterate over the contactInfo object array and populate table
    // Bootstrap and custom styling classes are also applied during iteration

    contactInfo.forEach(function (item) {
        var row = table.insertRow();
        row.classList.add("col-12")
        var label = row.insertCell(0);
        var info = row.insertCell(1);
        label.textContent = item.Label;
        label.classList.add("label")
        info.textContent = item.Info;
        info.classList.add("info")
    });

    // Apend the table element to the table row div

    tableRow = tableRow.appendChild(table)

    // Append the table to the parent element

    parentElement.appendChild(table);

}

// **************************************************************

// This function checks if state option is selected from the dropdown

function validateState() {

    // Select the state dropdown element

    var dropDown = document.getElementById("drop-down")

    // Check if a state is selected

    if (dropDown.value === "Choose...") {

        // No state selection
        return false;
    }
       
    else {
        // State is selected
        return true
    }
}




