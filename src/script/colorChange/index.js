const colorChangeButton = document.querySelector("body > header .color-change");
const body = document.querySelector("body");

if (colorChangeButton !== null) {
  colorChangeButton.addEventListener("click", () => {
    if (colorChangeButton.classList.contains("brightness")) {
      colorChangeButton.classList.remove("brightness");
      colorChangeButton.classList.add("darkness");
      body.classList.remove("brightness");
      body.classList.add("darkness");
      //   document.body.style.backgroundColor = "rgba(47, 53, 66, 1.0)";
      //   document.body.style.color = "rgba(255, 255, 255, 1.0)";
    } else if (colorChangeButton.classList.contains("darkness")) {
      colorChangeButton.classList.remove("darkness");
      colorChangeButton.classList.add("brightness");
      body.classList.remove("darkness");
      body.classList.add("brightness");
      //   document.body.style.backgroundColor = "rgba(255, 255, 255, 1.0)";
      //   document.body.style.color = "rgba(29, 31, 31, 1.0)";
    }
  });
}
