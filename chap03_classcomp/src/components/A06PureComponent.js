import React, { Component, PureComponent } from "react";

// 기본형의 값이 동일한 값으로 변경되면
// shouldComponentDidUpdate()가 return false로 구현되어 있는 클래스
 class A06PureComponent extends PureComponent {
  constructor() {
    super();

    this.state = {
      name: "NolBu",
      ary: ["React", "Angular", "Vue"],
    };
  }

  changeName = () => this.setState({ name: "NolBu" });
  changeObject = () => this.setState({ ary: ["React", "Angular", "Vue"] });

  // PureComponent는 이미 오버라이드 되어 있어서 재정의 불가함
  // 적으면 에러
  // shouldComponentDidUpdate(props, state){
  //   return true;
  // }

  render() {
    console.log("---------- render() Method ----------");
    return (
      <div>
        <h3>A06 PureComponent</h3>

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
export default A06PureComponent;
