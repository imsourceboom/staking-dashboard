const anchors = Array.from(document.querySelectorAll("main a"));
const footerAnchor = document.querySelector("footer a");

if (anchors != null) {
  anchors.map((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });
}

if (footerAnchor !== null) {
  footerAnchor.addEventListener("click", (e) => {
    e.preventDefault();
  });
}
