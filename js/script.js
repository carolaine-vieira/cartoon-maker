import Editor from "./modules/Editor.js";

$(document).ready(function () {
  Editor();
});

const loadFile = (event) => {
  let image = $("aside");
  let imageURI = URL.createObjectURL(event.target.files[0]);
  $("output").attr("src", imageURI);
  $(image).css({
    background: `#222 url("${imageURI}")`,
    backgroundSize: "cover",
  });
};

$("#file").change(function (e) {
  e.preventDefault();
  loadFile(e);
});

// $("#file").change(function previewFile() {
//   var preview = document.querySelector("img");
//   var file = document.querySelector("input[type=file]").files[0];
//   var reader = new FileReader();

//   reader.onloadend = function () {
//     preview.src = reader.result;
//     $(".box-0").css("background", `#222 url("${reader.result}")`);
//   };

//   if (file) {
//     reader.readAsDataURL(file);
//   } else {
//     preview.src = "";
//   }
// });

$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    500
  );
});
