import React from 'react'
import Main from './register/page'
import sideBarItems from '@/config/sideBarItems.json'


const page = () => {
  return (
    <div><Main/>
    
  <sideBarItems/>
    </div>
  )
}

export default page