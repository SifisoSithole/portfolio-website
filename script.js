window.addEventListener("DOMContentLoaded", (event) => {
  const projectImages = document.querySelectorAll("img");

  function updateImageSource() {
    for (let img of projectImages) {
      if (window.innerWidth >= 800) {
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
