export default function Modal(box) {
  $(box).addClass("editing");
  let imageIdCounter = 0;

  const modalLinks = [
    {
      title: "Change Background",
      id: "background",
    },
    {
      title: "Add Image",
      id: "image",
    },
    {
      title: "Add Baloon",
      id: "baloon",
    },
  ];

  const inputModalLinks = () => {
    modalLinks.forEach((link) => {
      $("#modal .modal-box").append(
        `<li><a id="${link.id}">${link.title}<a/></li>`
      );
    });
  };

  $("#ipt-add-background").change(function inputObject(e) {
    e.stopImmediatePropagation();

    let image = $(".editing");
    let imageURI = null;
    imageURI = URL.createObjectURL(e.target.files[0]);

    $(image).css({
      background: `#222 url("${imageURI}")`,
      backgroundSize: "cover",
    });
  });

  $("#ipt-add-object").change(function inputObject(e) {
    e.stopImmediatePropagation();

    let imageURI = URL.createObjectURL(e.target.files[0]);

    $(".editing").append(
      `<div class="ui-widget-content box-image"><img src="${imageURI}" class="box-image-${imageIdCounter}" alt="Object number ${imageIdCounter}" /></div>`
    );
    turnDraggable();

    imageIdCounter++;
  });

  const turnDraggable = () => {
    $(".ui-widget-content").draggable({
      containment: "parent",
    });
  };

  $("#add-ballon").click(function (e) {
    $(".editing").append(
      `<div class="ballon ui-widget-content"><div class="ballon-triangle"></div>Write a text</div>`
    );
    turnDraggable();
  });

  const showModal = () => {
    $("#editor").css("margin-right", "20%");
    $("#modal").css("display", "flex");
    inputModalLinks();
  };
  showModal();

  const closeModal = () => {
    $("#editor").css("margin-right", "0%");
    $("#main #modal").hide();
    $(box).removeClass("editing");
  };

  $("#modal a.close-button").click(function (e) {
    e.preventDefault();
    closeModal();
  });
}
