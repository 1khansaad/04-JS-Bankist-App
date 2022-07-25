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
  locale : 'en-US',
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2022-07-18T14:11:59.604Z",
    "2022-07-22T17:01:17.194Z",
    "2022-07-23T23:36:17.929Z",
    "2022-07-24T10:51:36.790Z",
  ],
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-07-26T17:01:17.194Z",
    "2020-07-28T23:36:17.929Z",
    "2020-08-01T10:51:36.790Z",
  ],
  locale : 'ar-SY',
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




const formatDate = function(date, locale){

  const clacDays = function(date1, date2){
    return Math.round(Math.abs((date1 - date2)/(1000*60*60*24)))
  }
  
  const date1 = clacDays(new Date(), date)
  console.log(date1)

  if(date1 === 0) return `Today`
  if(date1 === 1) return `Yesterday`
  if(date1 <= 7) return `${date1} Days a go`
  else{

  return new Intl.DateTimeFormat(locale).format(date)
  }
    
  
    
}
// Display movements ////////////////////////

const displayMovement = function(acc, sort = false){

  const movs = sort ? acc.movements.slice().sort((a, b) => a- b) : acc.movements

  containerMovements.innerHTML = '';
  movs.forEach(function(mov , index){
    const type = mov < 0 ? 'withdrawal' : 'deposit'

    const date = new Date(acc.movementsDates[index])
    const displayDate = formatDate(date, acc.locale)

    const html = `
     
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${index + 1} : ${type}</div>
          <div class="movements__date">${displayDate}</div>

          <div class="movements__value">${mov}€</div>
        </div>
     `

     containerMovements.insertAdjacentHTML('afterbegin', html)
  });
};

const clacDisplayBalance = function(acc){
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = acc.balance;
}



const displaySummary = function(acc){
  const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = incomes;

  const out = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = Math.abs(out)

  const interest = acc.movements.filter(mov => mov > 0).map(deposite => (deposite * acc.interestRate ) / 100).filter((int, i , arr) => {
    return int >= 1;
  }).reduce((acc, mov) => acc + mov , 0)
  labelSumInterest.textContent = interest;
}

const updateUI = function(acc){
  const now = new Date()
  const options = {

  day : '2-digit',
  month : 'long',
  year : 'numeric',
  hour : 'numeric',
  minute : 'numeric',
}
labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now);

  displayMovement(acc)
  displaySummary(acc)
  clacDisplayBalance(acc)
}


// username //////////////////////////////

const createUsername = function(accs){
  accs.forEach(function(acc){
  acc.username = acc.owner.toLocaleLowerCase().split(' ').map(function(acc){
    return acc[0];
  }).join('')
})
}
createUsername(accounts)



// Implementing login
let currentAccount;

// fake login
currentAccount = account1;
updateUI(currentAccount)
containerApp.style.opacity = 100;



btnLogin.addEventListener('click', function(e){
  e.preventDefault();
  
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount)

  if(currentAccount?.pin === Number(inputLoginPin.value)){
    labelWelcome.textContent = `Welcome Back ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 100;

    // clearing field

    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    console.log(currentAccount)
    updateUI(currentAccount)
  }
})



btnTransfer.addEventListener('click', function(e){
  e.preventDefault();


  const amount = Number(inputTransferAmount.value)
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value)

  inputTransferTo.value = inputTransferAmount.value = ''
  if(amount > 0 && currentAccount.balance >= amount && currentAccount.username !== receiverAcc.username && receiverAcc){
    receiverAcc.movements.push(amount)
    receiverAcc.movementsDates.push(new Date())
    currentAccount.movements.push(-amount)
    currentAccount.movementsDates.push(new Date())

    updateUI(currentAccount)
  }

})

btnLoan.addEventListener('click', function(e){
  e.preventDefault()
  const amount = Number(inputLoanAmount.value);
  console.log(amount)
  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){
    currentAccount.movements.push(amount)
    currentAccount.movementsDates.push(new Date())
    updateUI(currentAccount)
  }
  inputLoanAmount.value = '';
})

btnClose.addEventListener('click' , function(e){
  e.preventDefault();
  console.log('clicked')

  if(inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin){

    const index = accounts.findIndex(acc => acc.username === currentAccount.username)
    
    accounts.splice(index, 1);

    containerApp.style.opacity = 0;

  }
  inputCloseUsername.value = inputClosePin.value = '';
})

let sorted = false
btnSort.addEventListener('click', function(e){
  e.preventDefault();
  displayMovement(currentAccount, !sorted);
  sorted = !sorted
})
const x = new Date()
labelDate.textContent = new Intl.DateTimeFormat().format(x)