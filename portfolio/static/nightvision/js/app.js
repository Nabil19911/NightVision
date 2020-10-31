// Slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("image");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}



// Smooth scrolling jQuery
$(document).ready(function(){
  jQuery.scrollSpeed(150, 1000);
});

(function($) {
jQuery.scrollSpeed = function(step, speed, easing) {
    
    var $document = $(document),
        $window = $(window),
        $body = $('html, body'),
        option = easing || 'default',
        root = 0,
        scroll = false,
        scrollY,
        scrollX,
        view;
        
    if (window.navigator.msPointerEnabled) return false;
        
    $window.on('mousewheel DOMMouseScroll', function(e) {
        
        var deltaY = e.originalEvent.wheelDeltaY,
            detail = e.originalEvent.detail;
            scrollY = $document.height() > $window.height();
            scrollX = $document.width() > $window.width();
            scroll = true;
        
        if (scrollY) {
            view = $window.height();
                
            if (deltaY < 0 || detail > 0)
                root = (root + view) >= $document.height() ? root : root += step;
            
            if (deltaY > 0 || detail < 0)
                root = root <= 0 ? 0 : root -= step;
            
            $body.stop().animate({
                scrollTop: root
            
            }, speed, option, function() {
                scroll = false;
            });
        }
        
        if (scrollX) {
            
            view = $window.width();
                
            if (deltaY < 0 || detail > 0)
                root = (root + view) >= $document.width() ? root : root += step;
            
            if (deltaY > 0 || detail < 0)
                root = root <= 0 ? 0 : root -= step;
            
            $body.stop().animate({
                scrollLeft: root
            
            }, speed, option, function() {
                scroll = false;
            });
        }
        return false;
        
    }).on('scroll', function() {
        
        if (scrollY && !scroll) root = $window.scrollTop();
        if (scrollX && !scroll) root = $window.scrollLeft();
        
    }).on('resize', function() {
        
        if (scrollY && !scroll) view = $window.height();
        if (scrollX && !scroll) view = $window.width();
        
    });       
};

jQuery.easing.default = function (x,t,b,c,d) {
    return -c * ((t=t/d-1)*t*t*t - 1) + b;
};
})(jQuery);