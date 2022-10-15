// libB.js

const data = {    // export default { } 로 적기도 함
  name : 'Nolbu',
  age : 30,
  changeAge(){
    return `${this.name} - ${this.age}`
  }
}

// 한 파일에서 딱 1개만 지정 가능
export default data;
