$(document).ready(function() {
  console.log('index');
  $('.nav-item').each(function(i) {
    $(this).css({opacity: 0 });
    $(this).transition({
      opacity: 1,
      y: -20,
      duration: 500,
      delay: 125*i,
      easing: 'cubic-bezier(.38,.32,.38,4.25)'
    });
  });
});