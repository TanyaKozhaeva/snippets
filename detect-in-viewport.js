function detectInViewBox(elem){
  var elem = elem;
  var elementTop = $(elem).offset().top;
  var elementBottom = elementTop + $(elem).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return (elementBottom > viewportTop && elementTop < viewportBottom)
}
