let planPrice = document.querySelector(".plan_price");

let currentPrice = document.querySelector(".price");

let period = document.querySelector(".period");

islider.value = 1;

let price;
let priceMultiplier = 1;

islider.addEventListener("change", function () {
  switch (islider.value) {
    case "1":
      price = 8 * priceMultiplier;
      currentPrice.innerHTML = `$${price.toFixed(2)}`;
      break;
    case "2":
      price = 12 * priceMultiplier;
      currentPrice.innerHTML = `$${price.toFixed(2)}`;
      break;
    case "3":
      price = 16 * priceMultiplier;
      currentPrice.innerHTML = `$${price.toFixed(2)}`;
      break;
    case "4":
      price = 24 * priceMultiplier;
      currentPrice.innerHTML = `$${price.toFixed(2)}`;
      break;
    case "5":
      price = 32 * priceMultiplier;
      currentPrice.innerHTML = `$${price.toFixed(2)}`;
      break;
  }
});
