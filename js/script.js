let id = 0;

$(document).ready(function () {});

$("#export").click(function (e) {
  $("aside").hide();
  $("#editor").css("padding", 0);
  $("#editor-container").css({
    width: "100vw",
    height: "145.7vw",
  });
  window.print();
});

$("#add-element").click(function (e) {});

$("#add-page").click(function (e) {
  $("#editor").append(
    `<div class="editor-container" id="editor-${id}"><div class="add-content add-content-${id}"><a class="add-elements">Add content</a></div></div>`
  );
  $("html, body").animate(
    {
      scrollTop: $(`#editor-${id}`).offset().top,
    },
    500
  );
  id++;
});
