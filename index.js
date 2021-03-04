// Challenge 0
const data = require('./data.json');
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

console.log(displayData(data))
displayData(data)

// Challenge 1
function firstAndLast(arrayOfItems) {

}