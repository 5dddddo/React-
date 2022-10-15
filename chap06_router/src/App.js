import { Link, Navigate, NavLink, Route, Routes , } from "react-router-dom";
import {lazy, Suspense} from "react";
import A01FuncProps from './components/A01FuncProps'
import A02FuncState from './components/A02FuncState'
import A03Currency from './components/A03Currency'
import A04History from './components/A04History'
import A05Param from './components/A05Param'
import {Bars, Circles}  from 'react-loader-spinner';
// import A06Arguments from './components/A06Arguments'
// import A07ChildComponent from './components/A07ChildComponent'
// import A08Redirect from './components/A08Redirect'
// import NotfoundComponent from './components/NotFoundComponent'
const A06Arguments = lazy(()=> import('./components/A06Arguments'));
const A07ChildComponent = lazy(()=> import('./components/A07ChildComponent'));
const A08Redirect = lazy(()=> import('./components/A08Redirect'));
const NotfoundComponent = lazy(()=> import('./components/NotFoundComponent'));

function App() {
  const user = {name: 'HungBu', age: 20};
  const ary = ['a', 'b', 'c'];
  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

  const nav = {color:'orange'};
  
  return (
    <div className="m-3">
      <h1>Chap07 Router</h1>

      {/* Route에 기술한 path 이름으로 링크를 설정한다 */}
      <NavLink to="/" style={props=> props.isActive? nav:undefined}>Index</NavLink> | {' '}
      <NavLink to="/A01Props" style={props=> props.isActive? nav:undefined}>A01Props</NavLink> | {' '}
      <NavLink to="/A02State" style={(isActive)=> isActive? nav:undefined}>A02State</NavLink> | {' '}
      <Link to="/A03Currency">A03Currency</Link> | {' '}
      <Link to="/A04History">A04History</Link> | {' '}
      <Link to="/A05Param/1/NolBu">A05Param 1 </Link> | {' '}
      <Link to="/A05Param/2/HungBu">A05Param 2 </Link> | {' '}
      <Link to="/A06Arguments?id=3&name=Bangja&add=Seoul#TOP">A06Arguments</Link> | {' '}
      <Link to="/A07ChildComponent">A07ChildComponent</Link> | {' '}
      <Link to="/A08Redirect">A08Redirect</Link> | {' '}
      <Link to="/ABC">NotfoundComponent</Link> | {' '}
      <hr />

      {/* 기술된 위치에 설정한 컴퍼넌트가 표시 */}
      <Routes>
        {/* replace 옵션: 페이지 이동. replace history 남기지 않음 */}
        <Route path="/"                 element={<Navigate to='/A01Props' replace/>} />
        <Route path="/A01Props"         element={<A01FuncProps name="NolBu" age={30} arr={ary} user={user} onAdd={onAdd} isChecked />} />
        <Route path="/A02State"         element={<A02FuncState />} />
        <Route path="/A03Currency"      element={<A03Currency />} />
        <Route path="/A04History"       element={<A04History />} />
        {/* :id, :name은 변수명이며 호출하는 곳 (link)에서 값을 주입해 주고
         주입한 값이 변수의 값이 된다  */}
        <Route path="/A05Param/:id/:name"  element={<A05Param />} />
        {/* argument 로 데이터를 받으므로 여기서는 패스명만 기술. link에서 값을 지정*/}
        <Route path="/A06Arguments"       element={<Suspense fallback={<div>Loading...</div>}><A06Arguments /></Suspense>} />

        <Route path="/A07ChildComponent"       element={<Suspense fallback={<Bars/>}><A07ChildComponent /></Suspense>} />
        {/* 상위 컴퍼넌트가 지정되면 기본으로 표시됨 */}
        <Route path="/A07ChildComponent"       element={<h3>one</h3>} /> 
        {/* 절대경로는 항상 상위 컴포넌트의 path/하위경로 형태로 지정 */}
        {/* 상대경로는 상위 컴퍼넌트의 path 생략하고 하위패스만 / 없이 기술 
            하위 Route는 A07ChildComponent 내부에서 지정*/}
        <Route path="/A07ChildComponent/two"       element={<h3>two</h3>}  />
        <Route path="three"       element={<h3>three</h3>} />
        <Route path="/A08Redirect"       element={<Suspense fallback={<Circles/>}><A08Redirect /></Suspense>} />

        {/* 매칭되는 패스가 없으면 이 컴포넌트가 매칭 */}
        <Route path="*"       element={<Suspense fallback={<Circles/>}><NotfoundComponent /></Suspense>} />
      </Routes>
    </div>
  );
}

export default App;

// npm i react-router-dom
// npm i react-loader-spinner