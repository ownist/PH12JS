/**
 * ================
 * user login functionality
 * ================
 */
document.getElementById("continue_btn").addEventListener("click", function (e) {
  e.preventDefault();

  // original phone numbers
  const main_phone_number = "01234567891";
  const main_four_digit_pin = "1234";

  // user phone number
  const user_phone_number = document.getElementById("user_mobile_number").value;
  const user_four_digit_pin = document.getElementById(
    "user_four_digit_pin",
  ).value;

  // condition
  if (
    user_phone_number === main_phone_number &&
    user_four_digit_pin === main_four_digit_pin
  ) {
    window.location.href = "./dashboard.html";
  } else {
    alert("Invalid credentials!");
  }
});
