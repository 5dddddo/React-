// ES6
let name = 'NolBu';
console.log('My Name is ' + name);
// 문자열 중 변수만 `${}`로 묶어 사용
console.log(`My Name is ${name}`);

let obj = {
    name: 'HungBu',
    age: 25,
    child: ['one', 'two'],
    info: {
        tel: '010-1234-5678',
        add: 'Seoul'
    },
    toString: function(){
        console.log(this.name + '님의 나이는 ' + this.age + '세 입니다');

        // ES6 - template 문자열
        console.log(`${this.name}님의 나이는 ${this.age}세 입니다.`);
        console.log(`${this.name}님은
            ${this.age}세 입    니다.`);
    }
}

let dom = `<div> 
    <h3>Hello World</h3>

    <div>
        This is content
    </div>
</div>`;

console.log(dom);
obj.toString();
