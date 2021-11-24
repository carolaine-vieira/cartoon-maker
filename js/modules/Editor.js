import Modal from "./Modal.js";

export default function Editor() {
  let editors = document.querySelectorAll(".editor-container");
  let id = 2;

  $("#export").click(function (e) {
    $("aside").hide();
    $("#editor").css({
      marginLeft: 0,
    });
    $("span.editor-label").hide();
    $(".editor-container").css({
      width: "100vw",
      height: "145.7vw",
      margin: 0,
    });
    window.print();
  });

  $("#add-element").click(function (e) {});

  $("#add-page").click(function (e) {
    $("#editor").append(
      `<div class="editor-container" id="editor-${id}"><span class="editor-label" id="editor-label-${id}">Page ${id}</span><div class="add-content add-content-${id}"><a class="add-elements">Add content</a></div></div>`
    );

    $("html, body").animate(
      {
        scrollTop: $(`#editor-${id}`).offset().top,
      },
      500
    );

    id == 2
      ? $("aside").append(
          `<span class="title">Current editing pages</span><ul id="pages-available"><li><a href="#initial-editor">Page 1</a></li></ul>`
        )
      : {};
    $("aside ul#pages-available").append(
      `<li><a href="#editor-label-${id}">Page ${id}</a></li>`
    );

    id++;

    editors = document.querySelectorAll(".editor-container");
    console.log(editors);
  });

  $(document).on("click", 'a[href^="#"]', function (event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      500
    );
  });

  $("#add-background").click(function (e) {
    e.preventDefault();
    Modal();
  });
}
