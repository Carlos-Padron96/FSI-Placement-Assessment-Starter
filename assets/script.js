// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Carlos Padron"
//Function for Updating Quantity
function updateQuantity(displayQuantity){
    let quantity = document.querySelector('.qty-gb')
    quantity.innerHTML = displayQuantity 
}
// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')

// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')
//Quantity Buttons/Function
let quantGb = document.querySelector('#qty-gb')
// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Cookies
//gb button
gbPlusBtn.addEventListener('click', function() {

console.log('Gingerbread + button was clicked!')
})
//cc button
ccPlusBtn.addEventListener('click', function() {

console.log('Chocolate Chip + button was clicked!')
})
//sugar button
sugarPlusBtn.addEventListener('click', function() {

console.log('Sugar + button was clicked!')
})

// Event listener for clicks on the "-" button for Cookies
//gb button
gbMinusBtn.addEventListener('click', function() {

console.log('Ginerbread - button was clicked!')
})
//cc button
ccMinusBtn.addEventListener('click', function() {

console.log('Chocolate Chip - button was clicked!')
})
//sugar button
sugarMinusBtn.addEventListener('click', function() {

console.log('Sugar - button was clicked!')
    })
//Event Listener for adding and subtracting
gbPlusBtn.addEventListener('click', function() {
    let quantity = "qty-gb"
    quantity++
    updateQuantity(`qty-gb: ${quantity}`)
})