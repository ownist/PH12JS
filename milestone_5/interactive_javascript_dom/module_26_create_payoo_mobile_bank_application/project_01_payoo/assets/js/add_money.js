// add money feature
document
  .getElementById("add_money_btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    // original pin number
    const pinNumber = 12345;

    // get users value
    const getUserBank = document.getElementById("bank").value;
    const getUserBankAccountNumber = document.getElementById(
      "bank_account_number",
    ).value;
    const getUserAmmoutToAdd =
      document.getElementById("ammount_to_add").valueAsNumber;
    const getUserFourDigitPinNumber = document.getElementById(
      "user_four_digit_pin",
    ).valueAsNumber;

    // available balance
    const availableBalance = parseInt(
      document.getElementById("available_balance").innerText,
    );

    // validate account number
    if (getUserBankAccountNumber.length < 11) {
      alert("Invalid account number");
      return;
    }

    // validate pin number
    if (getUserFourDigitPinNumber !== pinNumber) {
      alert("Invalid pin number");
      return;
    }

    // substract ammount
    const totalAmmout = getUserAmmoutToAdd + availableBalance;

    // set balance & update on dom
    document.getElementById("available_balance").innerText = totalAmmout;
  });
