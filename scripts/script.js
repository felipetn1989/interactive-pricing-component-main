let planPrice = document.querySelector(".plan_price");

let currentPrice = document.querySelector(".price");

let period = document.querySelector(".period");

let pageViews = document.querySelector(".page_views");

islider.value = 1;

let price = 8;
let priceMultiplier = 1;

toggle.checked = false;

toggle.addEventListener("change", function () {
  if (toggle.checked) {
    priceMultiplier = 0.75 * 12;
    price = price * priceMultiplier;
    currentPrice.innerHTML = `$${price.toFixed(2)}`;
    period.innerHTML = `/ year`;
  } else {
    priceMultiplier = 1;
    price = price / 0.75 / 12;
    currentPrice.innerHTML = `$${price.toFixed(2)}`;
    period.innerHTML = `/ month`;
  }
});

islider.addEventListener("change", function () {
  switch (islider.value) {
    case "1":
      price = 8 * priceMultiplier;
      currentPrice.innerHTML = `$${price.toFixed(2)}`;
      pageViews.innerHTML = `10k Pageviews`;
      break;
    case "2":
      price = 12 * priceMultiplier;
      currentPrice.innerHTML = `$${price.toFixed(2)}`;
      pageViews.innerHTML = `50k Pageviews`;
      break;
    case "3":
      price = 16 * priceMultiplier;
      currentPrice.innerHTML = `$${price.toFixed(2)}`;
      pageViews.innerHTML = `100k Pageviews`;
      break;
    case "4":
      price = 24 * priceMultiplier;
      currentPrice.innerHTML = `$${price.toFixed(2)}`;
      pageViews.innerHTML = `500k Pageviews`;
      break;
    case "5":
      price = 32 * priceMultiplier;
      currentPrice.innerHTML = `$${price.toFixed(2)}`;
      pageViews.innerHTML = `1m Pageviews`;
      break;
  }
});
