import React, { useEffect, useRef, useState } from 'react'

const OTP = ({otpLength=6}) => {

    const ref = useRef([])
    
    const[optField,setOtpField] = useState(new Array(otpLength).fill(""))

    const handleKeyDown = (e,index) => {
      const key = e.key
      const copyOtpFields = [...optField]

      if(key == "ArrowLeft")
      {
        if(index>0) 
            {
              ref.current[index-1].focus()
            }
      }

      if(key == "ArrowRight")
      {
        if(index+1<optField.length) 
            {
              ref.current[index+1].focus()
            }
      }
      
      if(key === 'Backspace')
      {
        copyOtpFields[index] = ""
        setOtpField(copyOtpFields)
        if(index>0) 
            {
              ref.current[index-1].focus()
            }
      }
      if(isNaN(key))
      {
        return
      }
      
      copyOtpFields[index] = key
      if(index+1<optField.length) 
      {
        ref.current[index+1].focus()
      }
      setOtpField(copyOtpFields)
    }

    useEffect(()=>{
    ref.current[0].focus();
    },[])
    
  return (
    <div>
        {optField.map((value,index)=>{
          return <input 
            type="text" 
            value={value}
            key={index}
            ref={(currentInput)=>ref.current[index]=currentInput}
            style={{
                height:'1rem',
                width:'1rem',
                padding:'0.5rem',
                margin:'0.5rem'
            }}
            onKeyDown={(e)=>handleKeyDown(e,index)}
            />
        })}
    </div>
  )
}

export default OTP