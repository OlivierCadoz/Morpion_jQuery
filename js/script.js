var sign = true;


$(document).ready(function(){
  $('.square').click(function(){
    if ($(this).hasClass('empty')) {
      if (sign === true) {
        $(this).html('<p>X</p>').toggleClass('empty full');
        sign = false;
      }
      else if (sign === false) {
        $(this).html('<p>O</p>').toggleClass('empty full');
        sign = true;
      }
    }

  });

  $('.clear').click(function(){
    $('.square').html('').addClass('empty').removeClass('full');
    sign = true;
  });
});
