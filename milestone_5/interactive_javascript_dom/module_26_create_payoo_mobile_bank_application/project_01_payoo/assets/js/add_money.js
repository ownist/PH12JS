// add money feature
document
  .getElementById("add_money_btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    // get users value
    const getUserBank = document.getElementById("bank").value;
    const getUserBankAccountNumber = document.getElementById(
      "bank_account_number",
    ).valueAsNumber;
    const getUserAmmoutToAdd =
      document.getElementById("ammount_to_add").valueAsNumber;
    const getUserFourDigitPinNumber = document.getElementById(
      "user_four_digit_pin",
    ).valueAsNumber;

    // user available balance
    const availableBalance = parseInt(
      document.getElementById("available_balance").innerText,
    );

    // substract ammount
    const totalAmmout = getUserAmmoutToAdd + availableBalance;

    // set balance & update on dom
    document.getElementById("available_balance").innerText = totalAmmout;
  });
