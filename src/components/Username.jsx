import React, {forwardRef} from 'react'

function Username(props, ref){
  return (
    <div>
        <input type="text" ref={ref} /> 
    </div>
  )
}

export default forwardRef(Username);