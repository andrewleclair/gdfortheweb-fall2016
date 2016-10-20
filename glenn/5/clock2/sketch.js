function AnimateRotate(d) {

        $(".rect").animate({
          '-moz-transform':'rotate('+d+'deg)',
          '-webkit-transform':'rotate('+d+'deg)',
          '-o-transform':'rotate('+d+'deg)',
          '-ms-transform':'rotate('+d+'deg)',
          'transform':'rotate('+d+'deg)'
     }, 1000); 
}