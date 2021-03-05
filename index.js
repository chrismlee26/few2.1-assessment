// Challenge 0
const { format } = require('prettier');
const data = require('./data.json');
const Lib = require('@chrisle26/homework-1-strings');
const D = require('few2-1-date-library');
// console.log(data)

// Creating a function that loops & creates items for later functions to change.
function displayData(data) {
  let arrayOfItems = []
  for (var i = 0; i < data.length; i++) {
    const customerInfo = {
      firstName: data[i].first_name,
      lastName: data[i].last_name,
      purchaseDate: data[i].purchased,
      lastPayment: data[i].lastpayment,
      phoneNumber: data[i].phone,
      carMake: data[i].make,
      carModel: data[i].model,
      cityName: data[i].city
    };
    arrayOfItems.push(customerInfo)
  }
  return arrayOfItems
}

// console.log(displayData(data))
displayData(data)



// // Challenge 1
// function capitalizeName(str) {
//   return str[0].toUpperCase() + str.slice(1);
// } 

// console.log(capitalizeName(firstNameTest))
// console.log(capitalizeName(lastNameTest))

const firstNameTest = data[0].first_name
const lastNameTest = data[0].last_name

function printFirstLastName() {
  let output = Lib.capitalize(firstNameTest) + " " + Lib.capitalize(lastNameTest);
  console.log(output)
  return output
}

printFirstLastName()

const purchasedTest = data[0].purchased

// Challenge 2
function formatDateString() {
  const output = new D(purchasedTest).format('M, t, Y')
  let carPurchasedLog = 'Purchased: ' + output 
  console.log(carPurchasedLog)
  return carPurchasedLog
}

formatDateString()

const lastPaymentTest = data[0].lastpayment

// Challenge 3 
function formatWhenBought() {
  const output = new D(lastPaymentTest).when();
  let carPaymentLog = 'Last Payment was: ' + output
  console.log(carPaymentLog)
}

formatWhenBought()

const phoneNumberTest = data[0].phone

// Challenge 4
function phoneNumberString() {
  const phone = phoneNumberTest.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  console.log(phone)
  }

phoneNumberString()
