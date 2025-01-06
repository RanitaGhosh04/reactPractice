import React, { useState } from 'react'

const StarRating = () => {

    const [selectedStarCount, setSelectedStarCount] = useState(0)
    const [selectedHoverStarCount, setSelectedHoverStarCount] = useState(0)
  return (
    <div className='App'>Star Rating
        <div className='stars'>
            {
                [...Array(5)].map((_,index)=>{
                    return(
                        <span
                        key={index}
                        className={`${index+1 <= selectedStarCount ? 'selected':''} ${index+1 <= selectedHoverStarCount ? 'selected':''}`}
                        onMouseOver={()=>{
                            setSelectedHoverStarCount(index+1)
                        }}
                        onMouseOut={()=>{
                            setSelectedHoverStarCount(0)
                        }}
                        onClick={()=>{
                            setSelectedStarCount(index+1)
                        }}
                        >
                            &#9733;
                        </span>
                    )
                })
            }
        </div>
        Rating Count : {selectedStarCount}
    </div>
  )
}

export default StarRating
