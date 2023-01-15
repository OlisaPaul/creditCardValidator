function validateCreditCard(cardNumber) {
  // Remove any spaces and dashes from the card number
  cardNumber = cardNumber.replace(/[ -]/g, "");

  // Check that the card number is a valid length
  if (!/^\d{13,16}$/.test(cardNumber)) {
    return false;
  }

  // Use the Luhn algorithm to check the card's validity
  var sum = 0,
    digit,
    shouldDouble = false;
  for (var i = cardNumber.length - 1; i >= 0; i--) {
    digit = parseInt(cardNumber.charAt(i));
    if (shouldDouble) {
      if ((digit *= 2) > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  return sum % 10 === 0;
}
