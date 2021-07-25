const mainInput = document.querySelector("#mainInput");
const mainSelect = document.querySelector("#mainSelect");
const options = document.querySelectorAll(".option");
const output = document.querySelector("#output");
const mG = document.querySelector("#milliOutput");
const Gm = document.querySelector("#gramsOutput");
const kG = document.querySelector("#kgOutput");
const sent = document.querySelector("#sentOutput");
const tonna = document.querySelector("#tonOutput");

mainInput.addEventListener("input", (e) => {
  if (mainSelect.value === "MilliGram") {
    mG.innerHTML = e.target.value;
    Gm.innerHTML = e.target.value / 1000;
    kG.innerHTML = Gm.textContent / 1000;
    sent.innerHTML = kG.innerHTML / 100;
    tonna.innerHTML = sent.innerHTML / 10;
  } else if (mainSelect.value === "Gram") {
    mG.innerHTML = e.target.value * 1000;
    Gm.innerHTML = e.target.value;
    kG.innerHTML = Gm.innerHTML / 1000;
    sent.innerHTML = kG.innerHTML / 100;
    tonna.innerHTML = sent.innerHTML / 10;
  } else if (mainSelect.value === "KiloGram") {
    mG.innerHTML = e.target.value * 1000 ** 2;
    Gm.innerHTML = e.target.value * 1000;
    kG.innerHTML = e.target.value;
    sent.innerHTML = kG.innerHTML / 100;
    tonna.innerHTML = sent.innerHTML / 10;
  } else if (mainSelect.value === "Sentner") {
    mG.innerHTML = e.target.value * 100 * 1000 ** 2;
    Gm.innerHTML = e.target.value * 100 * 1000;
    kG.innerHTML = e.target.value * 100;
    sent.innerHTML = e.target.value;
    tonna.innerHTML = sent.innerHTML / 10;
  } else if (mainSelect.value === "Tonna") {
    mG.innerHTML = e.target.value * 1000 ** 3;
    Gm.innerHTML = e.target.value * 1000 ** 2;
    kG.innerHTML = e.target.value * 1000;
    sent.innerHTML = e.target.value * 100;
    tonna.innerHTML = e.target.value;
  }
});
