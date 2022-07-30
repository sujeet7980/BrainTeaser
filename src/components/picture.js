import React from 'react'
import Main from './Main'
import data from './rocords.json'
import Sidebar from './Sidebar'
const Picture = () => {
  return (
    <div>
      <Sidebar/>
      <Main  type="picture" />
    </div>
  )
}

export default Picture
