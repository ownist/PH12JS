// add money card
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
