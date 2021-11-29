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

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(-1));

//SHALLOW CPY OF ARRAY
console.log(arr.slice());

console.log(arr.splice(2));
console.log(arr);

arr = ['a', 'b', 'c', 'd', 'e'];

const arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse());
console.log(arr2);

//Concat

const letter = arr.concat(arr2);
console.log(letter);

//JOIN

console.log(letter.join('*'));

console.log('/////////////////////////////////////');

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(` Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}:You withdrawed ${Math.abs(movement)}`);
  }
}

console.log('FOR EACH LOOOOOP');

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}:You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrawed ${Math.abs(mov)}`);
  }
});

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

console.log(currenciesUnique);

currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const juliaDogs = [3, 5, 2, 12, 7];
const kateDogs = [4, 1, 15, 8, 3];

const juliaDogsCorrect = juliaDogs.slice();
juliaDogsCorrect.splice(0, 1);
console.log(juliaDogsCorrect);
juliaDogsCorrect.splice(-2);
console.log(juliaDogsCorrect);

const checkDogs = function (array) {
  array.forEach(function (val, i) {
    if (val >= 3) {
      console.log(
        `Dog number ${i + 1} 
is an adult, and is ${val} years old`
      );
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};

checkDogs(kateDogs);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});

console.log(movements);
console.log(movementsUSD);

const movementDesc = movements.map(function (mov, i, arr) {
  if (mov > 0) {
    return `Movement ${i + 1}:You deposited ${mov}`;
  } else {
    return `Movement ${i + 1}: You withdrawed ${Math.abs(mov)}`;
  }
});

console.log(movementDesc);

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

console.log(deposits);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

console.log(deposits);

// accumulator >> snowball
const balance = movements.reduce(function (acc, curr, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);

  return acc + curr;
}, 0);

console.log(balance);

///finding max with reduce

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const max = movements.reduce(function (acc, mov, i, arr) {
  console.log(`Iteration ${i}: ${acc}, mov: ${mov}`);
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);

console.log(max);

const juliaDogs = [3, 5, 2, 12, 7];
const kateDogs = [4, 1, 15, 8, 3];

const juliaDogsCorrect = juliaDogs.slice();
juliaDogsCorrect.splice(0, 1);

juliaDogsCorrect.splice(-2);
console.log(juliaDogsCorrect);
const dogsArr = [...juliaDogsCorrect, ...kateDogs];
console.log(dogsArr);

const checkDogs = function (array) {
  array.forEach(function (val, i) {
    if (val >= 3) {
      console.log(
        `Dog number ${i + 1} 
is an adult, and is ${val} years old`
      );
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};

checkDogs(dogsArr);

const calcAverageHumanAge = function (arr) {
  const humanAge = arr
    .map(function (val) {
      if (val <= 2) return val * 2;
      else return 16 + val * 4;
    })
    .filter(val => val > 18)
    .reduce(function (acc, val, i, arr) {
      return acc + val / arr.length;
    }, 0);

  console.log(humanAge);
};

calcAverageHumanAge(dogsArr);

const calcAverageHumanAge1 = function (arr) {
  const humanAge = arr
    .map(val => (val <= 2 ? val * 2 : 16 + val * 4))
    .filter(val => val > 18)
    .reduce((acc, val, i, arr) => acc + val / arr.length, 0);
  console.log(humanAge);
};

calcAverageHumanAge1(dogsArr);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find(mov => mov < 0);

console.log(movements);
console.log(firstWithdrawal);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');

console.log(account);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);
console.log(movements.includes(-130));

//returns true

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

console.log(arr.flat());

const accountMovements = accounts.


const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//return < 0, A, B (keep order)
// return > 0, B, A (switch order)

movements.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
  console.log(a, b);
});

console.log(movements);

const sarahDog =
  dogs.find(val => val.owners.includes('Sarah')).recommendedFood >
    dogs.curFood * 0.9 && dogs.recommendedFood < dogs.curFood * 1.1
    ? 'Eating good'
    : 'Eating bad';

    
if (sarahDog.curFood > sarahDog.recommendedFood * 1.1) {
  console.log('Eating too much');
} else if (sarahDog.curFood < sarahDog.recommendedFood * 0.9) {
  console.log('Eating too little!');
} else {
  console.log('Eating good');
}

const tooMuch = dogs.map(function (val) {
  if (val.curFood > val.recommendedFood * 1.1) {
    return val.owners;
  } else {
    return '';
  }
});

console.log(tooMuch);

const tooLitle = dogs.map(function (val) {
  if (val.curFood < val.recommendedFood * 0.9) {
    return val.owners;
  } else {
    return;
  }
});

tooMuch.forEach(function (val) {});

console.log(tooLitle);




