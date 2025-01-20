// Q1 変数

let nickname = 'ごっしー';
let age = 28;
console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');


// Q2 配列

let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let template = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`;
console.log(template);

// Q3 オブジェクト Q7 メソッド

let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
  birthday: '2000-09-27',
  sayHello: function(){
    console.log('Hello!');
  }
};
console.log(user.age);

// Q4 配列 × オブジェクト

let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda']
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros'],
  },
];

console.log(playerList[1].favorites[1]);

// Q5 四則演算

let ave = ((playerList[0].age)+
          (playerList[1].age)+
          (playerList[2].age))/3

console.log(ave);

// Q6 関数

function sayHello() {
  console.log('hello');
}

sayHello();

let sayWorld = 'World';
sayWorld = function(){};
console.log(sayWorld);

// Q7 メソッド

user.sayHello();

// Q8 引数

let calc = {
  add: function(x, y) {
    console.log(x + y);
  },
  subtract: function(x, y) {
    console.log(x - y);
  },
  multiply: function(x, y) {
    console.log(x * y);
  },
  divide: function(x, y) {
    console.log(x / y);
  },
};

calc.add(2, 5);
calc.subtract(20, 10);
calc.multiply(7, 7);
calc.divide(10, 2);

// Q9 返り値

function remainder(x ,y){
  return  x % y;
}

console.log(5 + 'を' + 3 + 'で割った余りは' + remainder(5, 3) + 'です。');

// Q10 スコープ

function foo() {
  let x = 1;
}console.log();

//　console.log(x);においてコンソールに1が出力されない理由は、
//　x は、foo関数の中で定義した為、スコープの有効範囲が関数の中のみになっている。
// そのため、x は関数内でしか参照できない状態だからコンソールに1を出力できない。


// 応用問題
// Q1 標準組み込みオブジェクト

let random = Math.floor(Math.random() * 10);
console.log(random);

// Q2 コールバック関数

function callback() {
  console.log('Hello World!');
}

setTimeout(callback, 3000);

// Q3 if

let num = 0;
if (num > 0 ) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else if (num === 0) {
  console.log('num is 0');
}

// Q4 for

let numbers = [];

for (let i = 0; i <= 99; i++) {
  numbers[i] = i ;
}
console.log(numbers);

// Q5 for × if

let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++){
  if (typeof mixed[i] === 'string'){
    console.log('not number');
  } else if (mixed[i] % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}
