import React from 'react'
import questions from '../assets/Data'

const Accordion = () => {
  return (
    <>
    {
        questions.map((e)=>(
            <>
            <h2>{e.title}
                <span>+</span>
            </h2>
            <h4>{e.info}</h4>
            </>
        ))
    }
    </>
  )
}

export default Accordion 