import { CountUp } from "countup.js";

const nanos = Array.from(document.querySelectorAll(".amount input"));

if (nanos !== null) {
  nanos.map((nano) => {
    if (nano.value !== "") {
      let value = nano.value;
      // text = text.replace(/,|\./gi, "");
      value = parseFloat(value);
      value = value / 1000000000;
      value = value.toFixed(4);
      let divide = value.split(".");
      const integerOptions = {
        // decimalPlaces: 4,
        duration: 2.5,
      };
      const decimalOptions = {
        prefix: ".",
        // suffix: " GRAM",
        useGrouping: false,
        duration: 1.5,
        // separator: "",
      };
      const integerAni = new CountUp(
        nano.nextElementSibling,
        divide[0],
        integerOptions
      );
      const decimalAni = new CountUp(
        nano.nextElementSibling.nextElementSibling,
        divide[1],
        decimalOptions
      );
      integerAni.start();
      decimalAni.start();
    }

    // divide[0] = parseFloat(divide[0]).toLocaleString();
    // const value = `${divide[0]}.${divide[1]}`;
    // nano.nextElementSibling.innerText = divide[0];
    // nano.nextElementSibling.nextElementSibling.nextElementSibling.innerText =
    // divide[1];
  });
}
