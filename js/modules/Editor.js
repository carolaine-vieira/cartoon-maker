import Modal from "./Modal.js";

export default function Editor() {
  let id = 2, initialZoom = 80;
  const editor = document.querySelector("#editor");

  const refresh = () => {
    const editors = document.querySelectorAll(".editor-container");

    editors.forEach((editor) => {
      const editorId = $(editor).attr("id");
      const addLink = document.querySelector(`#${editorId} .add-elements`);
      $(addLink).click(function () {
        addElements(editorId);
      });
    });
  };

  const inputBoxs = (editorParent) => {    
    const editor = document.querySelector(`#${editorParent}`); 
    editor.innerHTML = `
      <div id="comic">
        <div class="comic-container">
          <div class="box"></div>
        </div>

        <div class="comic-container">
          <div class="box"></div>
          <div class="box"></div>
        </div>

        <div class="comic-container">
          <div class="box"></div>
        </div>
      </div>
    `;

    const boxs = document.querySelectorAll(`#${editorParent} .box`);
    boxs.forEach((box, index) => {
      box.classList.add(`box-${index}`);
      box.addEventListener("click", function () {
        $(".box").removeClass("editing");        
        Modal(this, true);
      });
    });
  };  

  // Add new #editor / cartoon page
  $(".add-page").click(function () {
    $("#editor").append(`
      <div class="editor-container" id="editor-${id}">
        <span class="editor-label" id="editor-label-${id}">Page ${id}</span>
        <div class="add-content add-content-${id}">
          <a class="add-elements">Add content</a>
        </div>
      </div>
    `);

    $("html, body").animate({
      scrollTop: $(`#editor-${id}`).offset().top,
    }, 500);

    if( id == 2 ){
      $("aside.left").append(`
        <span class="category-title">Current editing pages</span>
        <ul id="pages-available">
          <li><a href="#editor-1">Page 1</a></li>
        </ul>
      `);
    }

    $("aside ul#pages-available").append(`<li><a href="#editor-${id}">Page ${id}</a></li>`);

    id++;
    refresh();
  });

  // Remove "add content" element to clear the #editor
  const addElements = (editorId) => {
    $(`#${editorId} .add-content`).remove();
    inputBoxs(editorId);
  };

  // Page zoom by input box
  $("#page-zoom").change(function (e) {
    e.preventDefault();
    initialZoom = parseInt(e.target.value);
    editor.style.zoom = `${initialZoom}%`;
  });
 
  // Page zoom by wheel
  editor.addEventListener("wheel", (event) => {
    event.preventDefault();
    if( event.deltaY < 0 && initialZoom < 150 ) {
      initialZoom += 1;
      editor.style.zoom = `${initialZoom}%`;
      $("#page-zoom").attr("value", initialZoom);
    } else if( event.deltaY > 0 && initialZoom > 30 ) {
      initialZoom -= 1;
      editor.style.zoom = `${initialZoom}%`;
      $("#page-zoom").attr("value", initialZoom);
    }
  });

  refresh();
}

