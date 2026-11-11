(() => {
  "use strict";

  let slide = 1;
  document.querySelector("#next-slide").addEventListener("click", () => {
    slide = slide === 3 ? 1 : slide + 1;
    document.querySelector("#slide").textContent = `Carousel – Inhalt ${slide}`;
  });

  document.querySelector("#close-notice").addEventListener("click", (event) => {
    event.currentTarget.closest(".notice").hidden = true;
  });

  document.querySelector("#demo-form").addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector("#form-status").textContent =
      "Formular erfolgreich getestet.";
  });
})();
