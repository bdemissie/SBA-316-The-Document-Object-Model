// function submitForm() {
//     // Prevent form from submitting to the server
//     e.preventDefault();

//     // Get the values from the form
//     var firstName = document.getElementById("First Name").value;
//     var lastName = document.getElementById("Last Name").value;
//     var email = document.getElementById("Email").value;
//     var phone = document.getElementById("Phone").value;
//     var streetAddress = document.getElementById("Street Address").value;
//     var apartment = document.getElementById("Apartment").value;
//     var city = document.getElementById("City").value;
//     var zip = document.getElementById("zip").value;
// }

// let app = document.querySelector('.contact-info');
// let  table = document.createElement("table");
//     table.appendChild(document.createElement("tr"))
//     .appendChild(document.createElement("th"))  
//     .appendChild(document.createElement("th")).textContent = "Nested structures!";

//     app.appendChild(table)

// Define the contact info data
var contactInfo = [
    { Field: "Full Name", Value: document.getElementById("First Name").value.concat(" ", document.getElementById("First Name")).value },
    { Field: "Address", Value: "1121 University Blvd W. Apt 1313" },
    { Field: "City", Value: "Silver Spring, MD, 20904" },
    { Field: "Email", Value: "bennet.hdemissie@gmail.com" },
    { Field: "Phone", Value: "2405336079" }
];


// Function to create and append the table
function appendContactInfo(parentElement) {
    // Create table element
    var table = document.createElement("table");
    table.classList.add("contact-info");

    // Iterate over contactInfo array and create table rows
    contactInfo.forEach(function (item) {
        var row = table.insertRow();
        row.classList.add("col-12")
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.textContent = item.Field;
        cell2.textContent = item.Value;
    });

    // Append the table to the parent element
    parentElement.appendChild(table);
}


var parentElement = document.getElementById("container"); // Replace "parentElementId" with the actual ID of the parent element
appendContactInfo(parentElement);

