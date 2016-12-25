$(function() {

  // We can attach the `fileselect` event to all file inputs on the page
  $(document).on('change', ':file', function() {
    var input = $(this),
      numFiles = input.get(0).files ? input.get(0).files.length : 1,
      label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    input.trigger('fileselect', [numFiles, label]);
  });

  // We can watch for our custom `fileselect` event like this
  $(document).ready(function() {
    $(':file').on('fileselect', function(event, numFiles, label) {

      var input = $(this).parents('.input-group').find(':text'),
        log = numFiles > 1 ? numFiles + ' files selected' : label;

      if (input.length) {
        input.val(log);
      } else {
        if (log) alert(log);
      }

    });
    
    var isMobile = window.matchMedia("only screen and (max-width: 760px)");

    if (isMobile.matches) {
        
        document.body.style.zoom = "40%"; 
        
        document.getElementById('first_div').style.marginLeft="0px";
        document.getElementById('last_div').style.marginLeft="0px";
        document.getElementById('gender_div').style.marginLeft="0px";
        document.getElementById('education_div').style.marginLeft="0px";
        document.getElementById('phone_div').style.marginLeft="0px";
        document.getElementById('email_div').style.marginLeft="0px";
        document.getElementById('email').style.width="250px";
        document.getElementById('date_div').style.marginLeft="0px";
        document.getElementById('location_div').style.marginLeft="0px";
        document.getElementById('category_div').style.marginLeft="0px";
        document.getElementById('category').style.width="300px";
        document.getElementById('description_div').style.marginLeft="0px";
        document.getElementById('comm').style.height="150px";
        document.getElementById('uploadData_div').style.marginLeft="0px";
        document.getElementById('fill').style.height="50px";
        document.getElementById('fill').style.width="250px";
    }
    
    $('#incident_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                row: '.col-xs-2',
                validators: {
                    stringLength: {
                        min: 2
                    },
                        notEmpty: {
                        message: 'Please supply your first name'
                    }
                }
            },
             last_name: {
                row: '.col-xs-2',
                validators: {
                    stringLength: {
                        min: 2
                    },
                    notEmpty: {
                        message: 'Please supply your last name'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your email address'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your phone number'
                    },
                    phone: {
                        country: 'US',
                        message: 'Please supply a vaild phone number with area code'
                    }
                }
            },
            date: {
                validators: {
                    notEmpty: {
                        message: 'Please supply a date'
                    },
                    date: {
                        format: 'YYYY-MM-DD',
                        message: 'The value is not a valid date'
                    }
                }
            },
            location: {
                validators: {
                    notEmpty: {
                        message: 'Please supply a location'
                    }
                }
            },
            category: {
                validators: {
                    notEmpty: {
                        message: 'Please supply a category'
                    }
                }
                
            }
                    
          }
        })
        
  });

});




 

