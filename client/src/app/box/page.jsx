'use client'
import { changeHeight, changeshape } from '@/redux/reducerSlices/boxSlice'
import { Button, DateInput, Input, button, input } from '@nextui-org/react'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

button
const Box = () => {
    const {backgroundColor,height,width} = useSelector(state=>state.box)
    const dispatch = useDispatch()
  return (
    <div> 

<div style={{backgroundColor: backgroundColor, height: height, width: width, borderRadius: '0'  }}>

</div>

<div>
<Button>+Width</Button>
<Button onClick={ ()=> dispatch(changeHeight())}> +height </Button>
<Button onClick={()=> dispatch(changeshape())}>Change the circel</Button>
    
</div>
    </div>
  )
}

export default Box