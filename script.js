'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovement = function(movemnets){

  movemnets.forEach(function(mov , index){
    const type = mov < 0 ? 'withdrawal' : 'deposit'
    const html = `
     
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${index + 1} : ${type} deposit</div>
          <div class="movements__value">${mov}€</div>
        </div>
     `

     containerMovements.insertAdjacentHTML('afterbegin', html)
  });
};
displayMovement(account1.movements)


const username = function(accounts){
  accounts.forEach(function(acc){
    const userNameMethod = acc.owner.toLowerCase().split(' ').map(function(Ele){
      return Ele[0];}).join('')
    console.log(userNameMethod)
  })
}
username(accounts)


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// challenge 1
// const jhon = [3, 5, 2, 12, 7]
// const sam = [9, 16 ,6, 8, 3]

// const checkDog = function(dataJhon , dataSam){
// const jhonCopy = jhon.slice(1,3);
// const collectedData = [...jhonCopy, ...sam];
// collectedData.forEach(function(age, index, arr){
//   const check = age >= 3 ? console.log(`Dog number ${index + 1} is an adult, and is ${arr.at(index)} Years old.`) : console.log(`dog number ${index + 1} is still a puppy`)
// });
// };
// checkDog();

// const indianRs = [2010, 5432, 6754, 7400]

// const indToUSD = indianRs.map(function(Rs){
//   return `${Rs / 74 }`
// })
// console.log(indToUSD)

// const movementDiscription = account1.movements.map(function(Element, index){
//   return `Movement ${index + 1} : You ${Element > 0 ? `deposited` : `withdrawed`} ${Math.abs(Element)}`
// }) 
// console.log(movementDiscription)