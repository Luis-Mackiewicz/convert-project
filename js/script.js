const USD = 5.1;
const EUR = 5.92;
const GBP = 6.89;

const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const form = document.querySelector("form");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

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
  try {
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

    let total = amount * price;

    if (isNaN(total)) {
      return window.alert("Digite o valor corretamente");
    }

    total = formatCurrencyBRL(total).replace("R$", "");

    result.textContent = `${total} Reais`;

    footer.classList.add("show-result");
  } catch (err) {
    console.log(err);
    footer.classList.remove("show-result");
  }
}

function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
