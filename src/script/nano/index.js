const nanos = Array.from(document.querySelectorAll(".amount input"));

if (nanos !== null) {
  nanos.map((nano) => {
    let value = nano.value;
    // text = text.replace(/,|\./gi, "");
    value = parseFloat(value);
    value = value / 1000000000;
    value = value.toFixed(4);
    value = value.toString();

    let divide = value.split(".");
    divide[0] = parseFloat(divide[0]).toLocaleString();
    // const value = `${divide[0]}.${divide[1]}`;
    nano.nextElementSibling.innerText = divide[0];
    nano.nextElementSibling.nextElementSibling.nextElementSibling.innerText =
      divide[1];
  });
}
