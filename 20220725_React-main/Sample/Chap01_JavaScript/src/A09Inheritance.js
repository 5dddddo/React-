class Person {    
    constructor(name, age, add){
        this.name = name;
        this.age = age;
        this.add = add;
    }

    toString() {
        console.log(`[Person] name=${this.name} age=${this.age} add=${this.add}`);
    }
    getName() {
        return this.name;
    }
}

class Employee extends Person{
    constructor (name, age, add, job) {
        super(name, age, add); // 부모의 생성자 메서드를 호출하는 명령어
        this.job = job;
    }

    // 부모 객체에 있는 메서드를 자식 객체에서 선언하면
    // 자식 객체의 메서드를 먼저 호출함
    toString(){
        console.log(`[Employee] name=${this.name} age=${this.age} add = ${this.add} job=${this.job}`);
    }

}

const hungBu = new Person('HungBu', 20, 'Busan');
hungBu.toString();

const nulBu = new Employee('nulBu', 30, 'Busan');
nulBu.toString();


class MyComp extends React.Component {
    
    render(){

    }
}