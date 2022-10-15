import React from "react";
import './css/A01Style.css'

// npm i node-sass :  scss , scaa 파일 사용을 위한 모듈
// react-script => 5 :  npm i node-sass@7
//  react-script => 4 : npm i node-sass@6
import './css/A01Style.scss' // 기본 지원 하지 않음

const color = 'title color'
const style = {
  background : 'black',
  color:'aqua',
  padding : '20px',
  fontSize : '24pt', // font-size => fontSize
  fontWeight : 'bold'
}
function A01Style() {
  return (
    <div>
      <h3 className="title color">A01 Style</h3>
      <h3 className={color}>A01 Style</h3>
      <h3 className="scssTitle">A01 Style</h3>
      <h3 className={style}>A01 Style</h3>
      {/* style 직접 줄때는 {{}} */}
      <h3 className={{
          background : 'black',
          color:'aqua',
          padding : '20px',
          fontSize : '24pt', // font-size => fontSize
          fontWeight : 'bold'
        }}>A01 Style</h3>
    </div>
  );
}

export default A01Style;
