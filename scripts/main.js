$(document).ready(function(){

  $('.shareImage').hide();

  $('.shareImage').hover(function(){
    $(this).show();
  },
  function() {
    $(this).hide();
  });

  $('.overlay').hide();

  $('.images').hover(function(){
    $(this).find('.overlay').show();
  },
  function() {
    $('.overlay').hide();
  });

  $('.like').click(function(){
  $(this).find('img').attr('src',"./img/heart-filled.png");
  return false;
  });

  // var brightness = $('.brightness').value();

  var brightness;

  $(".effects").keyup(function() {
    blur = $('.blur').val();
    brightness = $('.brightness').val();
    contrast = $('.contrast').val();
    grayscale = $('.grayscale').val();
    invert = $('.invert').val();
    opacity = $('.opacity').val();
    saturate = $('.saturate').val();
    sepia = $('.sepia').val();
    huerotate = $('.huerotate').val();
  });

  $('.editButton').click(function() {
    $('.editImage').css('-webkit-filter', 'brightness(' + brightness + '%) blur(' + blur + 'px) contrast(' + contrast + '%) grayscale(' + grayscale + '%) invert(' + invert + '%) opacity(' + opacity + '%) saturate(' + saturate + '%) sepia(' + sepia + '%) hue-rotate(' + huerotate + 'deg)');
  })

  $('.resetButton').click(function() {
    $('.editImage').css('-webkit-filter', 'brightness(' + 100 + '%) blur(' + 0 + 'px) contrast(' + 100 + '%) grayscale(' + 0 + '%) invert(' + 0 + '%) opacity(' + 100 + '%) saturate(' + 100 + '%) sepia(' + 0 + '%) hue-rotate(' + 0 + 'deg)');
  })






});
