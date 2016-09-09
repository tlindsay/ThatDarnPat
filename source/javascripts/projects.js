$(document).ready(function() {
  $('.project').click(function(e) {
    $this = $(this);

    if($(e.target).is(".body *"))
      return;

    if($this.hasClass('active'))
      $('.active').removeClass('active');
    else {
      $('.active').removeClass('active');
      $(this).addClass('active');
    }
  });
});
