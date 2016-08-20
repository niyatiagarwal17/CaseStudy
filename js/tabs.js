$(function(){
  $('ul.tabs li:first').addClass('active');
  $('.tabblock article').hide();
  $('.tabblock article:first').show();
  $('ul.tabs li').on('click',function(){
    $('ul.tabs li').removeClass('active');
    $(this).addClass('active')
    $('.tabblock article').hide();
    var activeTab = $(this).find('a').attr('href');
    $(activeTab).show();
    return false;
  });
})