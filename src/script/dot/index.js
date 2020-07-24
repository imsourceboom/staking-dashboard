import { osCheck } from "../agentCheck";

const dots = Array.from(document.querySelectorAll(".amount .dot"));

if (dots !== null) {
  dots.map((dot) => {
    if (osCheck() === "android") {
      dot.style.marginRight = "0.1em";
      console.log(dot);
    }
  });
}
