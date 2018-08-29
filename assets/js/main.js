// Cache window object

var $window = $(window);

$('section[data-type="background"]').each(function() {
  var $bgobj = $(this);

  $(window).scroll(function(){
    //scroll the background at var spearhead
    // the Ypos is negative valuable

    var yPos = -($window.scrollTop() / $bgobj.data('speed'));

    // put together final position
    var coords = '50% ' + yPos + 'px';

    // Move the background
    $bgobj.css({ backgroundPosition: coords });

  });
});
