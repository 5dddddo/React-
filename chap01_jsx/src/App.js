import logo from './logo.svg';
import './App.css';

// JSX
// DOM 구조 생성
// 1. 문자열이 아닌 일반 태그로 구성함
// 2. 1개의 요소만 태그로 변환이 가능함
 

// 함수 or Class 가능
/*
function First () {
  return dom;
}
function First () {
  return <h1>Hello World 2</h1>;
}

const dom = <div>
    <h1>Hello World 3</h1>
    <div> this is content</div>
    </div>;
    
function First () {
  return dom;
}


function First () {
  return <div>  // return 옆에 태그를 꼭 붙여야해서 귀찮 
      <h1>Hello World 4</h1>
      <div> this is content</div>
    </div>;
}

function First () {
  return (  // 괄호로 묶으면 개행 가능
  <div>
    <h1>Hello World 5</h1>
    <div> this is content</div>
  </div>
  );
}
export default First;
*/

import A01MakeDom from './components/A01MakeDom';
import A02Fragment from './components/A02Fragment';

function App() {
  // View Model : view에서 쓰는 변수를 가지고 있는 model
  const name = "Hungbu";
  const age = 40;
  const arr = [10,20];

  const onAdd = (x,y) => `${x}+${y} = ${x+y}`;
 
  // JSX 구문을 리턴하는 함수
  const makeDom = () => {
    return <div>
      <h3> Sub Dom</h3>
      <div> This Sub Content </div>
    </div>
  }
  // 사용자 정의 태그 = 커스텀 컴포넌트
  // 컴포넌트의 첫글자는 반드시 대문자
  // 단일 JSX DOM을 RETURN해야 함
  // export 안하면 내부에서만 사용 가능한 내부 컴포넌트
  const MakeDom = () => {
    const x = "hungBu"
    return <div>
      <h3> Sub Dom</h3>
      <div> This Sub Content {x} </div>
    </div>
  }

  // View
  return (
    // 속성명은 js의 속성명을 따른다.
    <div className="m-3">
      <h1>Chapter02 JSX</h1>
      
      <div>
        This is App content. <br/>
        Name  : {name} // 변수 참조  <br/>
        Age   : {age} <br/>
        Array : {arr[0]} / {arr[1]} <br/>
        onAdd : {onAdd(10,20)}<br/><br/>
        
        {/* JSX 만 반환해주면 바로 렌더링 가능 */}
        {makeDom()}

        {/* 내부 컴포넌트 사용 */}
        <MakeDom/>

        {/* import 한 컴포넌트 사용 */}
        <A01MakeDom/>
        <A02Fragment/>
      </div>
    </div>
  );
}
export default App;


