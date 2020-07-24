const anchors = Array.from(document.querySelectorAll("main a"));

if (anchors != null) {
  anchors.map((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });
}
