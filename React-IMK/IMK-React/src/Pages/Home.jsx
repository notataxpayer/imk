import React from 'react'
import Menu from '../Component/Menu/Menu'
import Homepage from '../Component/Homepage/Homepage'

const Home = () => {
  return (
    <div className="flex justify-center flex-col items-center font-Figtree">
        <Homepage/>
        <Menu/>
    </div>
  )
}

export default Home