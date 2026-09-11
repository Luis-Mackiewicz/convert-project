const USD = 5.35;
const EUR = 6;
const GBP = 6.08;

const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const form = document.querySelector("form");

amount.addEventListener("input", () => {
  const hasCharacteresRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharacteresRegex, "");
});

form.onsubmit = () => {
  event.preventDefault();

  console.log(currency.value);

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US");
      break;

    case "EUR":
      convertCurrency(amount.value, EUR, "E");
      break;

    case "GBP":
      convertCurrency(amount.value, GBP, "L");
      break;
  }
};

function convertCurrency(amount, price, symbol) {
  console.log(amount, price, symbol);
}
