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

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////



// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const movement of movements){
//   movement > 0 ? console.log(`you + ${movement}`) :  console.log(`you - ${Math.abs(movement)}`)
// }

// console.log(`-----------------------`)

// movements.forEach(function(movement){
//   movement > 0 ? console.log(`you + ${movement}`) :  console.log(`you - ${Math.abs(movement)}`)
// })

// const obj =  {
//   name : 'saad',
//   lastName : 'khan',
//   friends : ['x', 'y', 'z'],

//   detail : function(x){
//     console.log(`${this.name} ${this.lastName} has three friends but his best friend is called ${this.friends[0]} ${x}`)
//     // console.log(`${object.name} ${object.lastName} has three friends but his best friend is called ${object.friends[0]}`)
//   }
// }

// document.querySelector('.login__btn').addEventListener('click', obj.detail.bind(obj))



const array = ['xx', 'YY']
 const obj =  {
  name : 'saad',
  lastName : 'khan',
  x : function(frnd1, frnd2){
    console.log(`${this.name} ${this.lastName} has tWO frnd ${frnd1} ${frnd2}`)
  }
 }

 const fun = obj.x

 const obj1 =  {
  name : 'chetan',
  lastName : 'narhar',
  
 }

 const obj2 =  {
  name : 'sahil',
  lastName : 'narhar',
  
 }

 const obj3 =  {
  name : 'sameer',
  lastName : 'narhar',
  
 }

//  obj.x('xx', 'yy')
//  fun.call(obj1, 'AA', 'BB')

fun.apply(obj1, array)
// fun.call(obj1, ...array)
fun.apply(obj2, array)
fun.apply(obj3, array)




