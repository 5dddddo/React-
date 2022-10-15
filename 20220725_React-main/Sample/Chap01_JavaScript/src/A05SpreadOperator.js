
console.log([10, 11, 100]);
console.log('NolBu');
console.log('');

// 한글자씩 꺼내오기
console.log(...[10, 11, 100]);
console.log(...'NolBu');
console.log(...'');

// ...rest는 나머지 매개변수를 의미. 이전의 argumensts라는 내부 변수와 비슷 
// parameter를 5개보다 많이 입력한 경우 rest가 받음
function spreadFun(a, b, c, d, e, ...rest) {
    console.log(`a => ${a}`);
    console.log(`b => ${b}`);
    console.log(`c => ${c}`);
    console.log(`d => ${d}`);
    console.log(`e => ${e}`);
    console.log(`rest => ${rest} / ${rest.length}`);
}

spreadFun(0, [10, 20, 30], 40, [50, 60, 70]);
console.log('')

// 두번째 파라미터를 각각 대입하고 싶은 경우 ... spread 사용
spreadFun(0, ...[10, 20, 30], 40, [50, 60, 70]);

// 배열 합치기.
const aryOne = [10, 20, 30];
const aryTwo = [1, 2, 3, aryOne];
console.log(aryTwo);
console.log('');

// 배열을 풀어서 대입하고 싶은 경우 ... spread 사용
const aryOne2 = [10, 20, 30];
const aryTwo2 = [1, 2, 3, ...aryOne];
console.log(aryTwo2);
console.log('');

// Object
const objOne = {
    id: 1,
    name: 'NolBu'
};

const objTwo = {
    id: 2,
    address: 'Seoul',
    ...objOne
}
// id의 값은 중복이므로 나중에 온 값으로 덮어씀
console.log(objTwo);

const objThree = {
    ...objOne,
    id: 3,
    address: 'InChen',
}
console.log(objThree);

// React 사용예시
// 새 객체 생성
const objFour = {
    id: 1,
    name: 'NolBu'
};

const objFive = {
    id: 2,
    address: 'Seoul'
}

const objSix = {...objFour, ...objFive};
console.log(objSix);

const objSeven = {
    id: 1,
    name: 'NolBu'
};

// 값만 바꿨을 뿐 새 객체 생성한것이 아님 -> 주소값이 바뀌지 않아서 REACT에서 사용 X
//objSeven.name = 'OOO';

// Spread : 객체의 추가, 변경 시 사용함
const newObj = {...objSeven, name: 'OOO'};

console.log(objSeven);
console.log(newObj);
// 주소값 비교
console.log(objSeven === newObj);

// Delete : 삭제
delete newObj.name;
console.log(newObj);
console.log(objSeven === newObj);