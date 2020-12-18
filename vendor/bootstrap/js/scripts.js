$('body').delegate('.c-faq', 'click', function(){
    $('.c-faq').removeClass('c-faq--active');
    $(this).addClass('c-faq--active');
  });

$(document).ready(function () {
  $('#gall').bxSlider({
    controls: false,
    auto: true,
    pause: 4500
  });
});


// Not required for animation, just provides "Retype" button functionality

// Animation restart method from CSS-Tricks:
// @link https://css-tricks.com/restart-css-animation/

const button = document.querySelector("button");
const word = document.querySelector("a span");

// reset the transition by...
button.addEventListener(
"click",
function (e) {
  e.preventDefault;

  // -> removing the class
  word.classList.remove("animating");

  // -> triggering reflow /* The actual magic */
  void word.offsetWidth;

  // -> and re-adding the class
  word.classList.add("animating");
},
false);

