import Editor from "./modules/Editor.js";

$(document).ready(function () {
  Editor();
  disableButtons();
});

$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();
  $("html, body").animate({
    scrollTop: $($.attr(this, "href")).offset().top,
  }, 500);
});

const disableButtons = () => {
  const elements = document.querySelectorAll(".editable");
  elements.forEach(element  => {
    element.classList.add("denied");
    element.setAttribute("disabled", "");
  });
}



