// import React, { useState } from 'react'
// import languagesData from '../assets/languagesData'

// const ProgramMultiverse = () => {
    
//   return (
//    <>
//    {languagesData.map(
//     (ele) => (
//         <div>{ele.name}</div>
//     )
//    )}
//    </>
//   )
// }

// export default ProgramMultiverse

import React from 'react'

const ProgramMultiverse = ({languages}) => {
  return (
    <>
     {
        languages.map((el)=>(
            <h1>{el.name}</h1>
        ))
     }
     </>
  )
}

export default ProgramMultiverse