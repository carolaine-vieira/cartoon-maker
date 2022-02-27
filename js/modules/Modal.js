export default function Modal(box) {
  box.classList.add("editing");
  const editors = document.querySelectorAll(".editor-container");  
  let imageIdCounter = 0;

  const modalLinks = [
    { title: "Change Background", id: "background"},
    { title: "Add Image", id: "image" },
    { title: "Add Baloon", id: "baloon"}
  ];

  const insertModalLinks = () => {
    editingMode = true;
    editors.forEach(editor => editor.classList.add("editing-mode"));

    modalLinks.forEach((link) => {
      $("#modal .modal-box").append(
        `<li><a id="${link.id}">${link.title}<a/></li>`
      );
    });
  };

  const insertObjectOptions = () => {
    $(".object-editable a.object-options").remove();
    $(".object-editable").append(`
      <a class="object-options" title="Delete">
        <span class="fas fa-trash-alt"></span> Delete
      </a>
    `);
    deleteObject();
  };

  const deleteObject = () => {
    const objects = document.querySelectorAll(".object-options");
    objects.forEach((object) => {
      object.addEventListener("click", () => {
        object.parentNode.remove();
      });
    });
  };

  const turnDraggable = () => {
    $(".ui-widget-content").draggable({
      containment: "parent",
    });
  };

  $("#ipt-add-background").change(function insertObjects(e) {
    e.stopImmediatePropagation();

    const image = $(".editing");
    const imageURI = URL.createObjectURL(e.target.files[0]);

    $(image).css({
      background: `#222 url("${imageURI}")`,
      backgroundSize: "cover",
    });

    e.target.value = null;
  });

  $("#ipt-add-object").change(function insertObjects(e) {
    e.stopImmediatePropagation();

    const imageURI = URL.createObjectURL(e.target.files[0]);

    $(".editing").append(`
      <div class="ui-widget-content box-image object-editable">
        <img src="${imageURI}" class="box-image-${imageIdCounter}" alt="Object number ${imageIdCounter}" />
      </div>
    `);
    turnDraggable();
    insertObjectOptions();

    imageIdCounter++;
    e.target.value = null;
  });  

  $("#add-ballon").click(function (e) {
    e.stopImmediatePropagation();

    $(".editing").append(`
      <div class="ballon ui-widget-content object-editable">
        <div class="ballon-triangle"></div>
        <textarea class="ballon-textarea" placeholder="Enter a text" value="Write a text"></textarea>
      </div>
    `);
    turnDraggable();
    insertObjectOptions();
  });

  const showModal = () => {
    $("#modal").show();
    insertModalLinks();
  };
  showModal();

  const closeModal = () => {
    $("#editor").css("margin-right", "0%");
    $("#main #modal").hide();
    box.classList.remove("editing");
  };

  $("#modal a.close-button").click(function (e) {
    e.preventDefault();
    closeModal();
  });
}
