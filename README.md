Your task is create a customer details form that collects the data from the user.

Responsibilities:
- Print the form data object in the console and show success modal on submit if the form doesn't have errors.
- Display required or invalid error messages.
- If the form has some errors, scroll the page to the first error and don't print or show the success modal.
- Clear the form after successfully submitted.
---------------------------------------------
Specs:
- Full name
    All fields are required
   
- Address
    All fields are required

- Phone number
    Required and accepts numbers only

- Email
    Optional
    show invalid message if the email is invalid

- How did you hear about us?
    Required
    List of: None, Newspaper, Internet, Magazine, Other
    Note: if the user select 'Other', then you have to show 'Other' section and it will be required, see 'form-other.png' image

- Feedback about us:
    - Optional
    - Text area

- Suggestions if any for further improvement:
    - Optional
    - Text area

- Will you be willing to recommend us?
    - Optional
    - Checkbox button of 3 values: Yes, Maybe, No
    - See the 'form-checkbox.png' for the UI reference

- Please give reference of any two people whom you feel:
    - Optional
    - Table of inputs
    - Store the value of the table in array of objects
---------------------------------------------
Design Specs:

Colors:
    main-text: rgb(44, 51, 69);
    secondary-text: rgb(87, 100, 126);
    dark-red: rgb(242, 58, 60);
    light-red: rgb(255, 237, 237);
    dark-blue: rgb(46, 105, 255);
    light-blue: rgb(241, 245, 255);
    table-color: rgb(195, 202, 216);
    green-color: rgb(24, 189, 91);

Font
    Inter https://fonts.google.com/specimen/Inter