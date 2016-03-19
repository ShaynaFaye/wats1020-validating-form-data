/* Custom JS goes here. */

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
// 2. Define a validation object for use on your page.
// 3. Connect the validation object to an event handler tied to the submit button.

// Refer to the `index.html` file for the validation rules that must be enforced.


// 1. Create a document ready handler:
$(document).on('ready', function() {
    
    //Create method that only allows letters and spaces, no numbers:
    jQuery.validator.addMethod("lettersonly", function(value, element) {
  return this.optional(element) || /^[a-z," "]+$/i.test(value);
}, "Letters only please");

// 2. Define a validation object for use on your page:
    $( "#order-form" ).validate({
        // 3. Connect the validation object to an event handler tied to the submit button:
         submitHandler: function(form) {
            // If form is valid, submit it!
            form.submit();
        },
        /* (From html todo's) TODO: Add a general validation check so that any field contained in a `div.form-group. required` will be required to have information when the user submits the form.  Solution: I added a class 'required' to all input classes in the divs 'form-group required' then made a rule here for my newly created class.  This way I do not need to repeat the rule 'required' for each thing*/
        rules: {
            required: {
                required: true
            },
            "your-name": {
                maxlength: 128,
                lettersonly: true //used method created above so it may not contain numbers
            },
            "your-state": {
                minlength: 2,
                maxlength: 2,
                lettersonly: true
            },
            "your-zip": {
                digits: true,
                minlength: 5,
                maxlength: 5
            },
            "card-holder-name": {
                maxlength: 128,
                lettersonly: true
            },
            "card-number": {
                creditcard: true
            },
            "expiry-month": {
                required: true,
            },
            "expiry-year": {
                required: true
            },
            "cvv": {
                digits: true,
                minlength: 3,
                maxlength: 3
            },
            "shipping-method": {
              required: true  
            },
            "comments": {
                maxlength: 500
            }
        }// End rules
    });// End validate function
    
     // Tooltips
    $('label span.glyphicon').tooltip();
    
});// End .on ready function