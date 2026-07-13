// transaction history
const transactrionData = [];

/**
 * ===================
 * # resuseable functions
 * ===================
 */
function handleToggle(id) {
  const forms = document.getElementsByClassName("forms");

  for (const from of forms) {
    from.style.display = "none";
  }

  document.getElementById(id).style.display = "block";
}

function handleCategoryCardColor(id) {
  const categoryCard = document.getElementsByClassName("category_card");

  for (const category of categoryCard) {
    category.classList.remove("bg-blue-600/5", "border-blue-600");
    category.classList.add("border-zinc-950/10");
  }

  document.getElementById(id).classList.remove("border-zinc-950/10");
  document.getElementById(id).classList.add("bg-blue-600/5", "border-blue-600");
}

/**
 * ==================
 * toggle functionality
 * ==================
 */
document // add money card
  .getElementById("add_money_card")
  .addEventListener("click", function () {
    handleToggle("add_money_form_parent");
    handleCategoryCardColor("add_money_card");
  });

// cash out card
document.getElementById("cash_out_card").addEventListener("click", function () {
  handleToggle("cash_out_parent");
  handleCategoryCardColor("cash_out_card");
});

// transfer money card
document
  .getElementById("transfer_money_card")
  .addEventListener("click", function () {
    handleToggle("transfer_money_form_parent");
    handleCategoryCardColor("transfer_money_card");
  });

// get bonus card
document
  .getElementById("get_bonus_card")
  .addEventListener("click", function () {
    handleToggle("get_bonus_form_parent");
    handleCategoryCardColor("get_bonus_card");
  });

// pay bill card
document.getElementById("pay_bill_card").addEventListener("click", function () {
  handleToggle("pay_bill_form_parent");
  handleCategoryCardColor("pay_bill_card");
});

// transactions card
document
  .getElementById("transactions_card")
  .addEventListener("click", function () {
    handleToggle("transactions_form_parent");
    handleCategoryCardColor("transactions_card");
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

    // add money history
    const addMoneyData = {
      name: "Add Money",
      date: new Date().toDateString(),
    };

    // push add money data into transaction history / data
    transactrionData.push(addMoneyData);
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
  const fourDigitPinNumber = document.getElementById(
    "four_digit_pin_number",
  ).value;

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

  // cash out history
  const cashoutData = {
    name: "Cashout",
    date: new Date().toDateString(),
  };

  // push cashout data into transaction history / data
  transactrionData.push(cashoutData);
});

/**
 * =======================
 * # transaction history
 * =======================
 */
document
  .getElementById("transactions_card")
  .addEventListener("click", function () {
    const transactionContainer = document.getElementById(
      "transaction_container",
    );
    transactionContainer.innerHTML = "";

    // loop through transactiondata
    for (const tData of transactrionData) {
      const div = document.createElement("div");
      div.innerHTML = `
      <!-- cards -->
        <div
          class="flex items-center gap-x-2 px-4 py-3 bg-white rounded-xl border border-zinc-950/10"
        >
          <!-- img -->
          <div class="p-2.5 bg-zinc-950/5 rounded-full">
            <img width="24" src="./assets/images/opt-1.png" alt="icon" />
          </div>

          <div class="-space-y-1.5">
            <p class="text-zinc-950/70 text-base font-semibold">
              ${tData.name}
            </p>
            <span class="text-zinc-950/70 text-xs font-normal"
              >${tData.date}</span
            >
          </div>
        </div>
      `;

      // append parent
      transactionContainer.appendChild(div);
    }
  });
