// mobile menu

let navMenu = document.getElementById ("js-menu");

let navBarToggle = document.getElementById ("js-nav-toggle"); 

navBarToggle.addEventListener ("click", function (){
  navMenu.classList.toggle ("nav-active");
});


$(document).ready(function(){
  
  // close menu when clicked nav links
  $(".nav-link").click(function(){
    $("#js-menu").removeClass("nav-active");
  });

  // trigger nav links when clicked nav menu
  // $("#js-nav-toggle").on("click", function(){
  //   $("#js-menu").toggle();
  // });

});
