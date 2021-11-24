export default function Modal() {
  const showModal = () => {
    $("#modal").css("display", "flex");
  };

  const closeModal = () => {
    $("#modal").hide();
  };

  const outsideClick = () => {
    $("#modal").click(function (e) {
      e.target === this ? closeModal() : {};
    });
  };

  $("#modal .close-button").click(function (e) {
    e.preventDefault();
    closeModal();
  });

  $("#modal").click(function (e) {
    outsideClick();
  });

  showModal();
}
