window.addEventListener("DOMContentLoaded", (event) => {
  const projectImages = document.querySelectorAll("img");

  const form = document.querySelector(".contact-form form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (form.checkValidity()) {
      alert("Form has been submitted!");

      form.submit();
    }
  });

  function updateImageSource() {
    for (let img of projectImages) {
      if (window.innerWidth >= 600) {
        if (!img.src.includes("_desktop"))
          img.src = img.src.replace(".PNG", "_desktop.PNG");
      } else {
        if (img.src.includes("_desktop"))
          img.src = img.src.replace("_desktop.PNG", ".PNG");
      }
    }
  }

  updateImageSource();

  window.addEventListener("resize", updateImageSource);
});
