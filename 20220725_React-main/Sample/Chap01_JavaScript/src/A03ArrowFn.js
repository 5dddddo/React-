// 함수 리터럴. 함수 표현식
const onAdd = function(x, y) {
    console.log(`${x} + ${y} = ${x + y}`);
}

const onMin = function(x, y) {
    return `${x} - ${y} = ${x - y}`;
}

onAdd(10, 20);
console.log( onMin(10, 20) );
console.log('')


// ES6. 
// 함수 리터럴 방식만 변경 가능
// function을 삭제하고 인수 뒤를 =>로 변경 () => {} 형태가 된다
const onMulti1 = function (x,y) {
    const result = x*y;
    return `${x} * ${y} = ${result}`;

}
console.log(onMulti1(10,20));

const onMulti2 = (x,y) => {
    const result = x*y;
    return `${x} * ${y} = ${result}`;

}
console.log(onMulti2(10,20));

// Arrow 함수 내부에 리턴 구문 딱 1줄만 있는 경우 return 반드시 생략
const onDiv = (x,y) => {
    return `${x} / ${y} = ${x/y}`;
}
console.log(onDiv(10,20));

// 값이 아닌 실행구문 한 줄인 경우는 리턴하지 않고 실행함
const onOne = (x,y) => console.log(`${x} / ${y} = ${x/y}`);
onOne(10,20);

// 매개 변수가 1개인 경우는 () 생략 가능
// 매개 변수가 2개 이상인 경우 반드시 ()로 묶어야 함
const onTwo = x => 10 ** x; // ** 제곱승 : ES6에서 추가된 연산자 
console.log(onTwo(3));  // 10 * 10 * 10


// ES6부터 함수의 매개변수에 초기값을 할당할 수 있다.
function onThree (x=0,y=0) {
    return `${x} + ${y} = ${x+y}`;
}
console.log(onThree());
console.log(onThree(10,20));

const onFour = (x=0,y=0) =>  `${x} + ${y} = ${x+y}`;
console.log(onFour());
console.log(onFour(10,20));
// y값만 넘기고 싶은 경우
console.log(onFour(undefined,20));

// Arrow 함수는 this가 없다
function onFive () {
    console.log(this);
}
onFive(); // window 가 떨어짐

// 매개변수가 없는 경우 ()를 생략할 수 없음
const onSix = ()=> console.log(this);
onSix(); // window 가 떨어짐  
// this가 없는거 확인할 수 없음
console.log('');

const obj = {
    age: 10,
    getAge : function (){
        console.log(this);
        console.log(this.age);
    },
    // 자신의 this 는 없음. 항상 자신이 속한 객체(부모)가 참조하는 this를 자신의 this로 참조함
    getArrow : () => {
        console.log(this);      // window
        console.log(this.age);  // undefined
    }

}
obj.getAge();
// 실제 위의 코드는 window.obj.getAge(); 와 같음
obj.getArrow(); 
// 실제 위의 코드는 window.obj.getArrow(); 와 같음
// 그래서 부모의 this를 자신의 this로 가리킴

// dir : 구조보기
// callabe, constructor 인 함수 => 객체 무거움
console.dir(obj.getAge);

// callabe만 가능한 함수 => 객체 가벼움
console.dir(obj.getArrow);
