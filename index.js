const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const payResult = document.getElementById("payResult");

mySubmit.onclick = function () {
  if (myCheckBox.checked) {
    subResult.textContent = `You are subscribed!`;
  } else {
    subResult.textContent = `You are are not subscribed yet!`;
  }
  if (visaBtn.checked) {
    payResult.textContent = `You are paying with Visa.`;
  } else if (masterCardBtn.checked) {
    payResult.textContent = `You are paying with MasterCard.`;
  } else if (paypalBtn.checked) {
    payResult.textContent = `You are paying with PayPal.`;
  } else {
    payResult.textContent = `You must select a payment type.`;
  }
};
