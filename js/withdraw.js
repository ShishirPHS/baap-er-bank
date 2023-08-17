// add event listener to withdraw button
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // get value from withdraw field
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  // clear withdraw field value
  withdrawField.value = "";

  // check validation whether withdraw amount is not a number
  if (isNaN(newWithdrawAmount)) {
    alert("Please provide a valid number");
    return;
  }

  // get previous withdraw amount
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  // get previous balance value
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // check validation whether withdraw amount is bigger than balance
  if (newWithdrawAmount > previousBalanceTotal) {
    alert("Baap er bank a eto taka nai");
    return;
  }

  // calculate withdraw total after each withdraw
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

  // show update withdraw amount
  withdrawTotalElement.innerText = currentWithdrawTotal;

  // calculate new balance total after each withdraw
  const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;

  // show update balance amount
  balanceTotalElement.innerText = currentBalanceTotal;
});
