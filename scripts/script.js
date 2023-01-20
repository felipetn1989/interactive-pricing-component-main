/* Variable declarations */

let planPrice = document.querySelector(".plan_price");

let currentPrice = document.querySelector(".price");

let period = document.querySelector(".period");

let pageViews = document.querySelector(".page_views");

/* Declaring default values for when the page is loaded for the first time */

islider.value = 1;

let price = 8;
let priceMultiplier = 1;

toggle.checked = false;

/* Function for when the toggle is changed. It will define the price and text for both the monthly and annual plans. */

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

/* This next function will change the price and page views number to the appropriate numbers for each choice of the range element. I used a switch instead of if...else to save some lines of coding. The priceMultiplier has a default value of 1, and then it changes back and forth as the user uses the toggle switch */

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
