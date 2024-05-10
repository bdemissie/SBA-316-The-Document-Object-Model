The Contact Page Project is designed to capture user data through a web form and dynamically display this data in a table format. This project leverages JavaScript to handle form submissions, validate inputs, and manipulate the DOM to update the page with a formatted contact table based on the user's input.
Features
Dynamic Table Generation: Automatically generates a table displaying contact information after form submission.
Client-side Validation: Ensures all required form fields are filled and validates state selection.
Responsive Design: Adapts to various device screens for optimal user experience.
Technologies Used
HTML5
CSS3
JavaScript
Bootstrap 4 for responsive layout
File Structure
index.html: Contains the HTML structure of the contact form and placeholder for the contact table.
styles.css: Includes all custom styles applied to the form and table.
script.js: Contains all JavaScript logic for form validation, table generation, and DOM manipulations.
Select the contact-form
Event Listener for Form Submission: The event listener is set up correctly to intercept the form submission, prevent the default action (which stops the form from being sent to the server), and handle validation before proceeding 
This function will submit the contact form and generate a contact card
Iterate over contactInfo array and populate table
check if state option is selected
Check if a state is selected and finally
Error Handling: While the code checks for state selection, considering additional error handling for other inputs might be beneficial, ensuring that all fields meet expected formats or are not left empty, especially since this is crucial for fields like email and phone number.
