//Mobile menu
$('.nav-btn').click(function() {
  $(this).toggleClass('nav-btn--opened');
  $(this).next().slideToggle();
})

//Sidebar
$('.block_header').click(function() {
  $(this).next().slideToggle();
})
