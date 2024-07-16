/**
 * Remove 'overflow-hidden' class from body and hide mobile view navigation.
 * Reset navigation button styles and close any open dropdowns.
 */
function removeOverflowHidden() {
  body.classList.remove("overflow-hidden");
  mobileView.classList.remove("show");
  hamburgerLine1.classList.remove("cross_line_1");
  hamburgerLine2.classList.remove("cross_line_2");
  hamburgerLine3.classList.remove("cross_line_3");
}

// Select relevant elements for mobile view navigation.
let mobileView = document.querySelector(".mobile_view");
let menu = document.querySelector(".menu");
let body = document.querySelector("body");
let hamburgerLine1 = document.querySelector(".hamburger_line_1");
let hamburgerLine2 = document.querySelector(".hamburger_line_2");
let hamburgerLine3 = document.querySelector(".hamburger_line_3");

// Add a click event listener to the menu button.
menu.addEventListener("click", function () {
  mobileView.classList.toggle("show");
  body.classList.toggle("overflow-hidden");
  hamburgerLine1.classList.toggle("cross_line_1");
  hamburgerLine2.classList.toggle("cross_line_2");
  hamburgerLine3.classList.toggle("cross_line_3");
});
