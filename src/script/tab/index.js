const tabs = Array.from(document.querySelectorAll(".package nav h3"));
const boxs = Array.from(document.querySelectorAll(".package .box"));

if (tabs !== null) {
  tabs.map((tab) => {
    tab.addEventListener("click", () => {
      tabs.map((verify, i) => {
        if (verify == tab) {
          verify.classList.add("active");
          boxs.map((box, j) => {
            if (i == j) {
              box.classList.add("active");
            } else {
              box.classList.remove("active");
            }
          });
        } else {
          verify.classList.remove("active");
        }
      });
    });
  });
}
