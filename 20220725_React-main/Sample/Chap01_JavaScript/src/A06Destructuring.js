const obj = {
    name: 'NolBu',
    age: 30
}

// Spread 연산자 ... : 펼쳐서 조합할 경우 사용

// let name = obj.name;
// let age = obj.age;
// console.log(name);
// console.log(age);

// Destructuring 디스트럭처링: 개별 값을 꺼내서 각각의 변수에 대입 
// 변수명은 객체의 key오 동일한 이름으로 선언해야 함
const {name, age} = obj
console.log(name);
console.log(age);

// 이미 선언된 변수가 있으면 별칭 사용
const {name: nick, age : num} = obj
console.log(nick , num);

console.log(obj.address);   // undefined. 에러 아님

// 기본값 설정
const {name: x, age : y, address='Seoul'} = obj;
console.log(x,y,address); 

// 일부의 값 추출
const {name:x1} = obj;
console.log(x1);

// 배열
// 별칭 사용 불가
// 객체 => {}
// 배열 => []
const ary = ['A', 'B', 'C'];
const [a,b,c] = ary;
console.log(a, b, c);

// 기본값 설정은 가능
const [a1,b1,c1, d1=0] = ary;
console.log(a1, b1, c1, d1);

console.log(obj, ary);

// 원하는 값만 추출
const [,,c2] = ary;
console.log(c2);

// 중첩된 객체 꺼내오기
const user = {
    nm : 'Nolbu',
    old : 20,
    info : {
        addr : 'Seoul'
        , tel : '01056113427'
    }
};

const {nm,old,info} = user;
console.log(nm, old, info);

const {addr,tel} = info;
console.log(addr, tel);