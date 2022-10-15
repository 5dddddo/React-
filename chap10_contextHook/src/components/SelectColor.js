import React from 'react'
import { SelectColorContext } from '../modules/SelectColorContext';

function SelectColor() {
  const colors = ['red', 'orange', 'green', 'blue', 'yellow'];
  const style = { width: '50px', height: '50px', background: 'gray', cursor: 'pointer'};

  const {action} =  useContext(SelectColorContext)

  return (

        <div>
        <div style={{display: 'flex'}}>
          { colors.map( color => <div key={color} style={{...style, background:color}}
            onClick={action.setColor}>{color}</div>)}
        </div>
        {/* bgColor는 감시 가능한 변수로 선언하지 않음 => state x */}
        <div style={{display: 'flex'}}>
          { colors.map( color => <div key={color} style={{...style, background:color}}
            onClick={action.setBgColor}>{color}</div>)}
        </div>
      </div>

  )
}
export default SelectColor
