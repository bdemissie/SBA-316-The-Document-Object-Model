The Contact Page Project is designed to capture user data through a web form and dynamically display this data in a table format. This project leverages JavaScript to handle form submissions, validate inputs, and manipulate the DOM to update the page with a formatted contact table based on the user's input.

**************************************************************

Features

Dynamic Table Generation: Automatically generates a table displaying contact information after form submission.
Client-side Validation: Ensures all required form fields are filled and validates state selection.

**************************************************************

Technologies Used
HTML5
CSS3
JavaScript
Bootstrap 4 for responsive layout

**************************************************************

File Structure

index.html: Contains the HTML structure of the contact form and placeholder for the contact table.

styles.css: Includes all custom styles applied to the form and table.

script.js: Contains all JavaScript logic for form validation, table generation, and DOM manipulations.

**************************************************************

Event Listener for Form Submission:

The event listener Intercepts the form submission event to perform custom validation and processing without sending data to the server.

When the form is submitted, the event listener prevents the form from being submitted traditionally using e.preventDefault(), 
function submitForm(parentElement), Validates whether a state is selected using the validateState() function,if validation fails, resets the form and displays an alert message, and 
If validation passes, calls the submitForm() function to process the form data and resets the form afterwards. 

**************************************************************

submitForm function 

Handles the processing of the contact form data and dynamically creates a contact card that is appended to the specified parent element on the webpage.

The function is called with the parentElement variable which is the DOM element to which the newly created contact card will be appended.

The function then retrieves values from each form field,
organizes these values into an array of objects, each representing a piece of contact information with a label and corresponding information, dynamically creates a new table element and populates it with the contact information and appends the table to the webpage within the specified parent element, displaying it as a contact card.

**************************************************************

validateState function

Checks if a state has been selected from a dropdown menu in the form.

The function returns true if a state is selected, and returns false if no state selection is made# SBA-316-The-Document-Object-Model
