// withdraw btn
document.getElementById("withdraw_btn").addEventListener("click", function (e) {
  e.preventDefault();

  const originalPinNumber = 12345;

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
