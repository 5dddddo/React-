// 변수.

// vscode 는 js 로 만들어진 library

var nickname = 'NolBu';

// nickname : 한번, nickname 변수 한번 찍음 = 2번 출력
console.log('nickname : ', nickname);
// 두 문자열을 한번에 찍음 
console.log('nickname : ' + nickname);

// node 명령어로는 실행 불가
//console.log(window);

// js = 동적 타입 언어
console.log('nickname : ', nickname, 'typeof 변수명' , typeof nickname);

nickname = 20;
console.log('nickname : ', nickname, 'typeof 변수명' , typeof nickname);

nickname = true;
console.log('nickname : ', nickname, 'typeof 변수명' , typeof nickname);

// 찹조형은 타입이 모두 object로 표시됨
nickname = [10, 20, 30];
console.log('nickname : ', nickname, 'typeof 변수명' , typeof nickname);

// 기본형
// String, number, boolean, undefined, null, symbol(ES6)

// var 변수는 함수 이외의 {} 에서 변수의 영역(scope)를 갖지 않는다.
// if, for, while, switch 구문에서는 불가
// 선언한 변수를 재선언해도 에러가 아님 => 호이스팅 
var age = 10;
if(age > 0){
  var age = "HungBu";
  console.log('IF {} 내부의 age => ', age); // HungBu
}
console.log('IF {} 외부의 age => ', age); // HungBu
console.log(''); // 개행

function onOne1(){
  var z = 10;   // 지역변수, 함수 외부에서 사용 불가
  console.log('onOne1 : ',z); 
}
onOne1();
// console.log('외부 : ',z); // 에러

// 이러한 문제를 해결하기 위해 ES6에서 새 변수타입 생김
// 타입 변경은 가능하나 재선언 불가
let address = 'Seoul';
console.log('Address : ', address, 'typeof : ', typeof address);

address = 10;
console.log('Address : ', address, 'typeof : ', typeof address);

// let으로 선언한 변수는 var, let, const 모두 재선언 불가
// let address = 'ABC'; // 에러
// var address = 'ABC'; // 에러

// 모든 {} 블럭에서 변수 범위를 갖는다
// 햠수, if, for, while, switch 구문에서도 동일

let x = 10;
if(x>0){
  let x= 1000; // 지역변수 : {} 내부에 선언된 변수
  console.log('IF 내부 {} X => ', x); // 1000
}
console.log('외부 {} X => ', x); //10

function onOne(){
  let z = 10;   // 지역변수, 함수 외부에서 사용 불가
  console.log('onOne : ',z); 
}
onOne();
// console.log('외부 : ',z); // 에러


// CONST 변수
// 값 변경 불가
const MY_PI = 3.1415;
console.log('MY_PI : ', MY_PI, 'typeof : ', typeof MY_PI);

// MY_PI = 123; // 에러

// 선언과 동시에 초기화가 이루어져야 함
//const MY_NAME ; // 에러 

const arr = [10, 20];
// 에러 아님
// 내부 값 (참조하는 값)은 바꿀 수 있지만
let result = arr.push(30); // 추가 후 배열의 개수 return
console.log(arr, result);

// react 는 concat 사용
// react view는 reference (번지수) 를 바라보고 값이 바껴야 화면을 자동 갱신하는데
// push로 값을 넣으면 번지수 자체에는 변경이 없기 때문에 자동갱신 x 
// concat 은 새 객체를 만들어 react view가 바라보고 있는 번지수 자체를 바꾸기 때문에 reRendering (자동갱신) 함
let newArr = arr.concat(30); // 추가 후 새로운 배열 return
console.log(arr, newArr);

// 번지 수 자체를 바꾸는 것은 불가
// 번지 수는 lock 걸려 있음
//arr = [10, 20];

const obj = {name : 'Nolbu', age: 20};
obj.address = 'Seoul';
// obj = {x:10}; // 에러

// 참조형 변수 : 기본형 변수 외 