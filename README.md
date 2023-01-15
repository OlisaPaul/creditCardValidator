This app is used to verify the type of credit card
Use: node creditcardType.js to run the app

verification of the card number is in two stages:

Firstly, we have to check if the number is valid, by using lunin algorithm.
if the number is not valid, we return the "Not a valid number"
Else, we go to the next stage which is chacking the card provider

The app can only check for a few card providers, e.g. Visa, Master, China union pay card, etc.
we use Regular Expressions to achieve this. Each of this cards have their own perculiar regex partterns that differ from the others.
For example:
Visa cards starts with 4 and its a total of either 16 digit or 13. So we use: /^(?:4[0-9]{12}(?:[0-9]{3})?)$/ to represent it.

American Express card starts with 34 or 37, and has 15 digits. So we use: /^(?:3[47][0-9]{13})$/ to represent it.

MasterCard starts with 51 through 55, with 16 digits. So we use: /^(?:5[1-5][0-9]{14})$/ to represent it.

Discover Card starts with 6011, with length of 16 digits or it can start with 5, with length of 15 digits. So we use: /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/ to represent it

Diners Club Card starts with 300 through 305, 36, or 38, with length of 14 digits. So we use: /^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/ to represent it

JCB card starts with 2131 or 1800, with length of 15 digits or it can start with 35, with length 16 of digits. So we use: /^(?:(?:2131|1800|35\d{3})\d{11})$/ to represent it.
