/**
 * ==================
 * toggle functionality
 * ==================
 */
document
  .getElementById("add_money_card")
  .addEventListener("click", function () {
    document.getElementById("add_money_form_parent").style.display = "block";
    document.getElementById("cash_out_parent").style.display = "none";
  });

// cash out card
document.getElementById("cash_out_card").addEventListener("click", function () {
  document.getElementById("cash_out_parent").style.display = "block";
  document.getElementById("add_money_form_parent").style.display = "none";
});

/**
 * ===================
 * add money feature
 * ===================
 */
document
  .getElementById("add_money_btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    // original pin number
    const pinNumber = "1234";

    // get users value
    const getUserBank = document.getElementById("bank").value;
    const getUserBankAccountNumber = document.getElementById(
      "bank_account_number",
    ).value;
    const getUserAmmoutToAdd =
      document.getElementById("ammount_to_add").valueAsNumber;
    const getUserFourDigitPinNumber = document.getElementById(
      "user_four_digit_pin",
    ).value;

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

/**
 * =================
 * cashout feature
 * =================
 */
document.getElementById("withdraw_btn").addEventListener("click", function (e) {
  e.preventDefault();

  const originalPinNumber = "1234";

  // selectors
  const availableBalance = parseInt(
    document.getElementById("available_balance").innerText,
  );
  const agentNumber = document.getElementById("agent_number").value;
  const ammountToWithdraw = parseInt(
    document.getElementById("ammount_to_withdraw").value,
  );
  const fourDigitPinNumber = parseInt(
    document.getElementById("four_digit_pin_number").value,
  );

  // validate agent number
  if (agentNumber.length < 11) {
    alert("Invalid Agent Number");
    return;
  }

  // validate pin number
  if (fourDigitPinNumber !== originalPinNumber) {
    alert("Invalid Pin Number");
    return;
  }

  const totalAvailableBalance = availableBalance - ammountToWithdraw;

  document.getElementById("available_balance").innerText =
    totalAvailableBalance;
});
