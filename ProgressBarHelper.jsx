import React, { useEffect, useState } from 'react'
import ProgressBar from './ProgressBar'

const ProgressBarHelper = () => {

    const [value, setvalue] = useState(0)

  useEffect(()=>{
    setInterval(()=>{
      setvalue((value)=>value+1)
    },100)
  },[])

  return (
    <div className='app'>
    <span>Progress Bar</span>
    <ProgressBar
     value={value}
      />
   </div>
  )
}

export default ProgressBarHelper