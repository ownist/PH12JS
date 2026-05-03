// add money feature
const validpinNumber = 1234;

document.getElementById("btnAddMoney").addEventListener("click", function (e) {
  e.preventDefault();

  const bankAccountNumber = document.getElementById("bankAccountNumber").value;
  const ammountToAdd = document.getElementById("ammountToAdd").valueAsNumber;
  const selecBank = document.getElementById("selecBank").value;
  const pinNumber = document.getElementById("pinNumber").valueAsNumber;
  const totalbalance = parseInt(
    document.getElementById("totalbalance").innerText,
  );

  // validation
  if (bankAccountNumber.length < 11) {
    alert("Please provide a valid account number.");
    return;
  }

  if (pinNumber !== validpinNumber) {
    alert("Invalid pin number. Try again!");
    return;
  }

  const totalAmmount = ammountToAdd + totalbalance;

  // set balance
  document.getElementById("totalbalance").innerText = totalAmmount;
});

// implemet add money and cashout toggle feature
document.getElementById("addMoneyBtn").addEventListener("click", function () {
  document.getElementById("cashoutContainer").style.display = "none";
  document.getElementById("addMoneyContainer").style.display = "block";
});

document.getElementById("cashoutBtn").addEventListener("click", function () {
  document.getElementById("addMoneyContainer").style.display = "none";
  document.getElementById("cashoutContainer").style.display = "block";
});

// cashout
document.getElementById("btnWithdraw").addEventListener("click", function (e) {
  e.preventDefault();

  const agentNumber = document.getElementById("agentNumber").value;
  const cashoutAmmount =
    document.getElementById("cashoutAmmount").valueAsNumber;
  const cashoutPinNumber =
    document.getElementById("cashoutPinNumber").valueAsNumber;
  const totalbalance = parseInt(
    document.getElementById("totalbalance").innerText,
  );

  const presentAmmount = totalbalance - cashoutAmmount;

  // set present ammount
  document.getElementById("totalbalance").innerText = presentAmmount;
});
