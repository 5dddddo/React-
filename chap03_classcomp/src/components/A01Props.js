
import React from 'react'
import PropTypes from 'prop-types';

class A01Props extends React.Component{
  constructor (){
    super(); // 상속 받은 경우 부모 생성자부터 호출
    this.name = 'A01 Props';
    // React 가 watcher로 관리하고 있는 2가지 요소
    // Props(부모가 가지고 있는 속성값) 와 state (자식이 내부적으로 가지고 있는 속성값 )가 변경 되면 
    // virtual DOM 을 갱신하고 화면 자동 랜더링 됨
  }

  changeTitle = () => this.title = 'hell world'; 

  render(){ // 화면 렌더링 작업하는 method 반드시 overriding 해야함
    return (
      <div>
        <h3>{this.name} Component - 수정불가 (참조만 가능, 넘어올 땐 문자열)</h3>

        <div>
          Name : {this.props.name}<br/>
          Age : {this.props.age+100} <br/>
          {/* 넘기는 Key가 변수명이 된다. 변수로 전달하려면 {변수명}으로 넘겨야함  */}
          Address : {this.props.address}<br/> 

          {/* Undefined 는 화면에 표시되지 않음 */}
          Arr : {this.props.arr[0]/this.props.arr[1]/this.props.arr[2]}<br/>
          User : {this.props.user.name} / {this.props.user.age} / {this.props.user.address}<br/>
          onAdd : {this.props.onAdd(10,20)} <br/>
          {/* React에서는 값을 전달하지 않으면 True로 여김, JS랑 다름 */}
          isChecked : {this.props.isChecked?'True':'False'}<br/>

          {/* 기본형은 전달되지 않은 값 참조도 에러 아님 */}
          전달되지 않은 기본형 값 : {this.props.num}<br/> 

          {/* 전달되지 않은 참조형은 값이 없으면 에러 */}
          {/* 전달되지 않은 참조형 값 : {this.props.obj.name}<br/>  */}

          {/* 전달되지 않은 참조형 default 값 설정 가능 */}
          전달되지 않은 참조형 값 : {this.props.obj.name} <br/>
          <br/>
          
          <div>
            상위 컴포넌트에서 전달한 View가 표시되는 영역, 분산해서 따로 표시할 수는 X <br/>
            {this.props.children}
          </div>
        </div>

        {/* 일반적으로 선언된 변수라 React가 자동 갱신하지 않음 */}
        <button onClick={this.changeTitle}>Title</button>    <br/>
      </div>
    )

  }
}

export default A01Props;

// defaultProps (기본 내장, 이름 수정 불가)
// props 로 값이 넘어오면 넘어온 값으로, 넘어오지 않으면 Default 값 사용
A01Props.defaultProps = {
  num : 0,
  name: 'NoLBu',
  obj : {name : 'Unknown'}
}

// props로 넘어온 Type 체크 (기본 내장 아님, Import 필요)
// import PropTypes from 'prop-types';

A01Props.propTypes = {
  name : PropTypes.string.isRequired,
  age : PropTypes.number,
  address : PropTypes.string,
  arr : PropTypes.array,
  user : PropTypes.object,
  onAdd : PropTypes.func

}