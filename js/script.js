const amount = document.getElementById("amount");
const currency = document.getElementById();

amount.addEventListener("input", () => {
  const hasCharacteresRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharacteresRegex, "");
});
