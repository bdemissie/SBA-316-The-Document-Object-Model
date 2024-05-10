// Add an onClick event Listener to the "Submit" botton of the form

// Select the contact-form
var contactForm = document.querySelector(".contact-form")

var parentElement = document.getElementById("contact-card"); 



// Add an event listener for the form submit event

contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    submitForm(parentElement)
    
    contactForm.reset()
}
)

// This function will submit the contact form and generate a contact card

function submitForm(parentElement) {

    // Prevent form from submitting to the server
    // e.preventDefault();

    // Cache the values from the contact form to a variable

    var firstName = document.querySelector(".first-name").value;
    // var lastName = document.getElementById("Last Name").value;
    // var email = document.getElementById("Email").value;
    // var phone = document.getElementById("Phone").value;
    // var streetAddress = document.getElementById("Street Address").value;
    // var apartment = document.getElementById("Apartment").value;
    // var city = document.getElementById("City").value;
    // var zip = document.getElementById("zip").value;

    // Define the contact info array

    var contactInfo = [
        { Label: "Full Name", Info: firstName},        
        { Label: "Address", Info: "1121 University Blvd W. Apt 1313" },
        { Label: "City", Info: "Silver Spring, MD, 20904" },
        { Label: "Email", Info: "bennet.hdemissie@gmail.com" },
        { Label: "Phone", Info: "2405336079" }
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




// // Replace "parentElementId" with the actual ID of the parent element

// submitForm(parentElement);

