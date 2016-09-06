var sign = true;

$(document).ready(function(){
  $('.square').click(function(){

      if (sign === true) {
        $(this).html('<p>X</p>');
        sign = false;
      }
      else if (sign === false) {
        $(this).html('<p>O</p>');
        sign = true;
      }
  });

  $('.clear').click(function(){
    $('.square').html('');
    sign = true;
  });
});
