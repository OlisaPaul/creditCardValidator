// Imports the validateCardNumber funnction from the validate.js file
const validateCardNumber = require("./validate");

// the function is used to identify the card type
function creditCardType(cardno) {
  if (!validateCardNumber(cardno)) return "Not a valid card";

  // We use an object called creditCardRegex to store the regex matching the different credit card types
  const creditCardRegex = {
    "Visa Card": /^(?:4[0-9]{12}(?:[0-9]{3})?)$/,
    "JCB Card": /^(?:(?:2131|1800|35\d{3})\d{11})$/,
    "Dinners Club Card": /^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/,
    "Discover Card": /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/,
    "Master Card": /^(?:5[1-5][0-9]{14})$/,
    "American Express Card": /^(?:3[47][0-9]{13})$/,
    "China Union Pay Card": /^62[0-9]{14}[0-9]*$/,
  };

  // this converts our creditCardRegex object to an array containing just the properties.
  const cardTypeKeys = Object.keys(creditCardRegex);

  // we use the for loop to scan through the cardTypeKeys array
  for (let i = 0; i < cardTypeKeys.length; i++) {
    // This convert each properties in the cardTypeKeys array, to their respective values.
    const cardRex = creditCardRegex[cardTypeKeys[i]];

    // we use this test our card number, if the card number macthes any of the regex (cardRex) in the creditCardRegex object,
    // it returns the type of the card (property)
    if (cardRex.test(cardno)) return cardTypeKeys[i];
  }

  // we will only return this if the card number doesn't match any of the regex in the creditCardRegex object.
  return "We don't know your Credit Card Type";
}

console.log(creditCardType(506109032922693832));
