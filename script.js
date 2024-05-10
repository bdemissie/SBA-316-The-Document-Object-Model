
// Select the contact-form
var contactForm = document.querySelector(".contact-form")
var parentElement = document.getElementById("contact-card"); 

// Add an event listener for the form submit event
//Event Listener for Form Submission: The event listener is set up correctly to intercept the form submission, prevent the default action (which stops the form from being sent to the server), and handle validation before proceeding

contactForm.addEventListener("submit", function(e) {

    e.preventDefault();

    var isStateValid = validateState();

    // Break out of the submit event if state is not selected

    if(!isStateValid) {

        contactForm.reset
        return
    }

    submitForm(parentElement)
    
    contactForm.reset()
}
)

// This function will submit the contact form and generate a contact card

function submitForm(parentElement) {

    // Cache the values from the contact form to a variable

    var firstName = document.querySelector(".first-name").value;
    var lastName = document.querySelector(".last-name").value;
    var email = document.querySelector(".email").value;
    var phone = document.querySelector(".phone-number").value;
    var streetAddress = document.querySelector(".street-address").value;
    var addressLine2 = document.querySelector(".address-optional").value;
    var city = document.querySelector(".city").value;
    var state = document.querySelector(".state").value;
    var zip = document.querySelector(".zip").value;

    // Define the contact info array

    var contactInfo = [
        { Label: "Full Name", Info: firstName.concat(" ", lastName)},        
        { Label: "Address", Info: streetAddress.concat(" ", addressLine2) },
        { Label: "City", Info: city.concat(" ", state, " ", zip) },
        { Label: "Email", Info: email },
        { Label: "Phone", Info: phone }
    ];

    // Create a table row div
    
    let tableRow = document.createElement("div")
    tableRow.classList.add("row")

    // Create a table element

    var table = document.createElement("table");
    table.classList.add("contact-info");

    // Iterate over contactInfo array and populate table
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

// Check if state option is selected

function validateState() {

    // Select the state dropdown element

    var dropDown = document.getElementById("drop-down")

    // Select div to write validation message if no selection is made

    var validationMessage = document.getElementById("validation-message")
    

    // Check if a state is selected

    if (dropDown.value === "Choose...") {

        // Show validation message if no option is selected

        validationMessage.textContent = "Please select a State from the dropdown"
        validationMessage.style.color = "red"; // Change color to red
        validationMessage.style.fontSize = "20px"; // Increase font size
        
        return false;
    }
        //Error Handling: While the code checks for state selection, considering additional error handling for other inputs might be beneficial, ensuring that all fields meet expected formats or are not left empty, especially since this is crucial for fields like email and phone number.
    else {
        validationMessage.textContent = ""
        return true
    }
}





