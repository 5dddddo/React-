import React from 'react'
import { SelectColorConsumer } from '../modules/SelectColorContext';

function SelectColor() {
  const colors = ['red', 'orange', 'green', 'blue', 'yellow'];
  const style = { width: '50px', height: '50px', background: 'gray', cursor: 'pointer'};

  return (
    // Consumer는 감시하는 변수들이 바뀌면 자동 리랜더링함
    <SelectColorConsumer>
      {data =>(
        <div>
        <div style={{display: 'flex'}}>
          { colors.map( color => <div key={color} style={{...style, background:color}}
            onClick={data.action.setColor}>{color}</div>)}
        </div>
        {/* bgColor는 감시 가능한 변수로 선언하지 않음 => state x */}
        <div style={{display: 'flex'}}>
          { colors.map( color => <div key={color} style={{...style, background:color}}
            onClick={data.action.setBgColor}>{color}</div>)}
        </div>
      </div>
      )}
    </SelectColorConsumer>
  )
}
export default SelectColor
