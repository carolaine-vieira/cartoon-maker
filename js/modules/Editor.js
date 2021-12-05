import Modal from "./Modal.js";

export default function Editor() {
  let id = 2;
  let editors;

  const refresh = () => {
    editors = document.querySelectorAll(".editor-container");
    let editorId;
    let addLink;

    editors.forEach((editor) => {
      editorId = $(editor).attr("id");

      addLink = document.querySelector(`#${editorId} .add-elements`);
      $(addLink).click(function () {
        addElements(editorId);
      });
    });
  };

  const inputBoxs = (editorParent) => {
    let boxs = null;
    $(`#${editorParent}`).html("");

    $(`#${editorParent}`).append(`<div id="comic"></div>`);
    $(`#${editorParent} #comic`).append(
      `<div class="comic-container"><div class="box"></div></div>`
    );
    $(`#${editorParent} #comic`).append(
      `<div class="comic-container"><div class="box"></div><div class="box"></div></div>`
    );
    $(`#${editorParent} #comic`).append(
      `<div class="comic-container"><div class="box"></div></div>`
    );

    boxs = document.querySelectorAll(`#${editorParent} .box`);
    boxs.forEach((box, index) => {
      $(box).addClass(`box-${index}`);
    });

    boxs.forEach((box) => {
      box.addEventListener("click", function () {
        $(".box").removeClass("editing");
        Modal(this);
      });
    });
  };

  $("#export").click(function (e) {
    $("body").addClass("onprint");
    window.print();
  });

  window.onafterprint = (event) => {
    $("body").removeClass("onprint");
  };

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
      ? $("aside.left").append(
          `<span class="category-title">Current editing pages</span><ul id="pages-available"><li><a href="#editor-1">Page 1</a></li></ul>`
        )
      : {};

    $("aside ul#pages-available").append(
      `<li><a href="#editor-label-${id}">Page ${id}</a></li>`
    );

    id++;

    refresh();
  });

  const addElements = (editorId) => {
    $(`#${editorId} .add-content`).remove();
    inputBoxs(editorId);
  };

  $("#page-zoom").change(function (e) {
    e.preventDefault();
    let value = e.target.value;
    $("#editor").css("zoom", `${value}%`);
  });

  refresh();
}
