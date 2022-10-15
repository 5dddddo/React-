import React, { Component } from "react";

class A05LifeCycle extends Component {
  constructor() {
    super();

    this.state = {
      color: "green",
    };
    console.log("1. Constructor");
  }

  // 넘어온 props로 state를 조정할때 사용
  static getDerivedStateFromProps(props, state) { // Virtual DOM에 있는 값
    console.log(props)
    if(props.check){
      state.name = 'ADD Name';
      state.color = props.color;
    }
    
    console.log('2 getDrivedStateFromProps');
    // return props; // props로 리턴하고 render 함수에서 찍어보면 props로 넘긴 값으로 기존 state를 덮어 씀
    return state; // state 리턴하고 render 함수에서 찍어보면 state 값 추가, 수정되어 있음
    
  }

  componentDidMount (){
    // DOM 완성, 화면 렌더링이 완료된 시점에 호출
    console.log('4 componentDidMount');

    // Ajax 요청 => 화면에 출력하는 작업
  }

  shouldComponentUpdate(props, state){
    // 값이 update 되기 전에 발생
    console.log('5 shouldComponentUpdate');

    // true or false 값 리턴해줘야함
    // true 면 리랜더링
    // false 면 랜더링 x : 같은 값 넘어온 경우 굳이 랜더링할 필요 X
    return false;
  }
  componentDidUpdate (){
    // Update 된 후 발생
    console.log('6 componentDidUpdate');

    // Ajax 요청 => 화면에 출력하는 작업
  }

  changeColor = () => {
    this.setState({ color: "orange" });
  };

  render() {
    //console.log("3. Render");
   // console.log(this.state);
    return (
      <div>
        <h3>A05 Life Cycle</h3>
        color: {this.state.color}
        <br />
        <button onClick={this.changeColor}>Click</button>
      </div>
    );
  }
}
export default A05LifeCycle;
