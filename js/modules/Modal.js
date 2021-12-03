export default function Modal(box) {
  const initModal = () => {
    $("#main").append(`<div id="modal"></div>`);
    $("#modal").append(`<div class="modal-box"></div>`);
    $(".modal-box").append(`<a class="close-button">X</a>`);
  };

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

  const showModal = () => {
    $("#editor").css("margin-right", "20%");
    $("#modal").html("");
    initModal();
    $("#modal").css("display", "flex");
    inputModalLinks();
  };
  showModal();

  const closeModal = () => {
    $("#editor").css("margin-right", "0%");
    $("#main #modal").remove();
  };

  $("#modal a.close-button").click(function (e) {
    e.preventDefault();
    closeModal();
  });

  $("#modal").click(function (e) {
    e.target === this ? closeModal() : {};
  });

  $(box).css("background-color", "red");
}
