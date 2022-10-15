import React from "react";
import { Link, Outlet } from "react-router-dom";

function A07ChildComponent() {
  return (
    <div>
      <h5>Children Component</h5>
      <div>This is Children Component</div>
      <br />

      <div>
        {/* path는 상위path/하위path로 정의 */}
        <Link to="/A07ChildComponent">ONE</Link> | {' '}
        <Link to="/A07ChildComponent/two"> TWO</Link> |{' '}
        <Link to="/A07ChildComponent/three"> THREE</Link>
      </div>
      <hr />

      {/* Router 가 없으므로 표시될 영역이 없음
        대신 하위 컴포넌트에서는 Outlet 태그로 하위 컴퍼넌트가 표시될 영역을 지정 */}
        <Outlet></Outlet>
    </div>
  );
};
export default A07ChildComponent;
