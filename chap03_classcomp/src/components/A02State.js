import React, { Component } from 'react'

export class A02State extends Component {
  constructor(){
    super();

    // 값이 변경되면 변경된 값으로 화면 리 렌더링이 이루어진다.
    this.state = {
      name: 'NolBu',
      age: 40,
      arr: [10, 20],
      address: 'seoul',
      user: {name: 'HungBu', age: 30}
    }
    this.changeName = this.changeName.bind(this);
    // console.log(this);
  }

  onAdd(x, y) {
    return `${x} + ${y} = ${x + y}`;
  };
  changeName(evt) {
     //this.state.name = 'bangja'; // 에러
     console.log(this)
     // 새 객체를 return해야 자동 랜더링됨
     // {...this.state, name : 'bangja}
     // this.state => 변수 선언을 위한 내장객체
     // this.setState() => state 변수를 수정하기 위한 메서드
     this.setState({name:'bangja'});
  }

  // Arrow 함수는 속해져 있는 객체가 없기 떄문에 this = class이다
  // Arrow 함수는 항상 리랜더링 되므로 몇개 안될경우 쓰지만
  // 많은 경우 binding 해서 쓰자 !
  changeAge = (x)=>this.setState({age:x});

  addArray = () =>{
    const random = Math.ceil(Math.random() * 100);
    // push는 새 객체 반환 안하므로 자동갱신 x
    // this.setState({arr: this.arr.push(random)});
    
    // concat은 새 배열을 반환하므로 자동갱신 o
    this.setState({arr: this.state.arr.concat(random)});
  }

  updateArray = (index, value) =>{
    // 새 객체 반환 안하므로 자동갱신 x
    // this.setState({arr: this.state.arr[index] = value});

    const newArr = this.state.arr.map((item,i)=> index === i? value : i);
    this.setState({arr:newArr})
  }

  deleteArray = (index) =>{
    // 새 객체 반환 안하므로 자동갱신 x
    // this.setState({arr: this.state.arr.splice(index,1));
    const newArr = this.state.arr.filter((item,i)=> index !== i);
    this.setState({arr:newArr})
  }

  // 새로운 객체를 만들어서 return해야 함
  addObject = (key,value) =>{
      const newUser = {...this.state, [key]:value};
      this.setState({user : newUser});
  }

  updateObject = (key,value) =>{
      const newUser = {...this.state, [key]:value};
      this.setState({user : newUser});
  }
  deleteObject = key =>{
    delete this.state.user[key];
    const newUser = {...this.state.user};
    // this.setState({user : {...this.state.user}});
    this.setState({user : newUser});
  }

  render() {
    return (
      <div>
        
        <h3>A02State Component (State는 변경 가능. 자동 화면 갱신)</h3>

        <div>
        Name : {this.state.name}<br/>
        Age : {this.state.age}<br/>
        Addr : {this.state.address}<br/>

        onadd : {this.onAdd}<br/>
        </div>
        <br/>

        <div>
          {this.state.arr.map((item, index)=> <span key={index}> {item},</span>)}
        </div>

        <div>
          {/* this 는 버튼 자체를 가리킴 */}
          <button onClick={this.changename}>Name</button>
         {/* 매개변수가 있는 경우 */}
         {/* event객체가 내부적으로 넘어오므로 함수에서 사용할 경우 evt 받거나 */}
          <button onClick={(evt)=> this.changeAge(evt,10)}>Age</button>
          
         {/* evt 사용안하는 경우 빼고 넘기기 */}
         {/* 바로 {this.changeAge({10})} 으로 쓰면 바로 실행하라는 의미이므로
         event handler를 함수로 지정해서 매개변수를 받는 함수를 재호출해야 함 */}
          <button onClick={()=> this.changeAge(10)}>Age</button>

          <button onClick={this.addArray}>Add array</button>
          <button onClick={()=> this.updateArray(0,2000)}>updateArray</button>
          <button onClick={()=> this.deleteArray(0)}>deleteArray</button>

          <button onClick={()=> this.addObject('address', 'seoul')}>addObject</button>
          <button onClick={()=> this.updateObject('address', 'busan')}>updateObject</button>
          <button onClick={()=> this.deleteObject('address')}>deleteObject</button>
        </div>
      </div>
    )
  }
}

export default A02State