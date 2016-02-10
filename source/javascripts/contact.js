$(document).ready(function() {
  $('#contact-form').on('submit', function(e) {
    e.preventDefault();
    f = $(this);
    n = f.find('input[name="name"]').val();
    e = f.find('input[type="email"]').val();
    m = f.find('textarea').val();
    if(grecaptcha.getResponse() !== '')
      $.ajax({
        url: "//formspree.io/patrick.lindsay@me.com", 
        method: "POST",
        data: {
          name: n,
          email: e,
          message: m
        },
        dataType: "json",
        success: function() {
          f.text('');
          $('.success-message').html('<h1>Message received!</h1><h3>I\'ll get back to you shortly.</h3>');
        },
        error: function() {

        }
      });
    else{
      $('.g-recaptcha').addClass('shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {$(this).removeClass('shake');});
    }
  });
});