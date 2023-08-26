/// <reference types="../@types/jquery" />



$('.open_Tab .btn_open').on('click' , function(){
    $('.open_Tab .open_box').animate({width:'toggle'} , 1000)
})

$(document).ready(function() {
    // Add click event handler to accordion headers
    $('.accordion-header').click(function() {
      // Toggle the visibility of the clicked accordion content
      $(this).next('.accordion-content').slideToggle();
      
      // Hide other accordion items' content
      $('.accordion-content').not($(this).next('.accordion-content')).slideUp();
 });
  });


