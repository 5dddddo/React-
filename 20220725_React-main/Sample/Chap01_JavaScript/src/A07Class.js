
class User {
  // 생성자 메서드, new 명령어에 의해 최초 한 번만 실행됨
  constructor(name,age){
    this.name = name; // new로 생성한 객체의 내부 기본 값으로 정의됨
    this.age = age;
  }

  // Prototype 기반 상속 -> 부모 객체에만 선언되어 있고, 자식 객체들은 참조하여 사용
  display (){
      console.log(`${this.name}님은 ${this.age}세 입니다.`);
  }

}

const nolbu = new User('Nolbu', 30);
const hungbu = new User('HungBu', 20);

console.log(nolbu);
console.log(hungbu);

// 