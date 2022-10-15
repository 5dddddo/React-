import React, { Component } from "react";
// npm i shallow-equal;
import {shallowEqualArrays, shallowEqualObjects} from 'shallow-equal'

// 일반 component를 상속 받았지만 shallow-equal로 shouldComponentUpdate 오버라이딩해서
//  purecomponent 인 것처럼 사용 가능
class A07ShallowEqual extends Component {
  constructor() {
    super();

    this.state = {
      name: "NolBu",
      ary: ["React", "Angular", "Vue"],
    };
  }

  changeName = () => this.setState({ name: "NolBu" });
  changeObject = () => this.setState({ ary: ["React", "Angular", "Vue1"] });

  componentDidMount() {
    const ary = ["Angular", "React"];
    const one = ["Angular", ary];
    const two = ["Angular", ary];
    const three = ["Angular", ["Angular", "React"]];

    console.log(shallowEqualArrays(one,two));   //true
    console.log(shallowEqualArrays(one,three)); //false

    const obj = { name: "NolBu", age: 30 };
    const obj1 = { title: "Shallow", obj: obj };
    const obj2 = { title: "Shallow", obj: obj };
    const obj3 = { title: "Shallow", obj: { name: "NolBu", age: 30 } };

    console.log(shallowEqualObjects(obj1,obj2));   //true
    console.log(shallowEqualObjects(obj1,obj3)); //false
  }

  shouldComponentUpdate(props, state){
    // state => Virtual DOM 의 State
    // this.state => dom의 state
    if(shallowEqualObjects(state,this.state)) return false;
    else return true;
  }

  render() {
    console.log("---------- render() Method ----------");
    return (
      <div>
        <h3>A07 Shallow Equals Array</h3>

        <div>
          Name: {this.state.name} <br />
          Ary: {this.state.ary[0]}
          <br />
          <button className="btn btn-primary btn-sm" onClick={this.changeName}>Name</button>
          <button className="btn btn-danger btn-sm" onClick={this.changeObject}>Ary</button>
        </div>
      </div>
    );
  }
}
export default A07ShallowEqual;
