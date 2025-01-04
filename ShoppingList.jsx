import React, { useEffect, useState } from 'react'

const ShoppingList = () => {
    const [input, setInput] = useState('')
    const [result, setrRsult] = useState([])
    const [selectedItem, setselectedItem] = useState(null)
    const [isComplete, setIsComplete] = useState(false)

    // Variable to store the timeout ID
    let debounceTimeout;

    // Custom debounce function
    const debounceFetch = (value) => {
        
        clearTimeout(debounceTimeout)

        debounceTimeout = setTimeout(async () => {
            if(value)
                {
                    try{
                        const res = await fetch(`https://api.frontendeval.com/fake/food/${value}`)
                        const data = await res.json()
                        setrRsult(data)
                    }

                    catch{
                        setrRsult([])
                    }
                }
                else{
                    setrRsult([]);
                }
        },2000) //Debounce delay in milliseconds
    }

    const handleInput = async(e) => {
        const value = e.target.value
        // console.log(value);
        
        setInput(value)
        // console.log(input);
        
        debounceFetch(value) // Trigger debounced fetch
        // if(value)
        // {
        //     const res = await fetch(`https://api.frontendeval.com/fake/food/${value}`)
        //     const data = await res.json()
        //     setrRsult(data)
        // }
        // else{
        //     setrRsult([]);
        // }
    }

    const handleSelect = (ele) => {
        setselectedItem(ele)
        setrRsult([])
        setInput('')
    }

    const handleComplete = () => {
        setIsComplete(!isComplete)
    }

    const handleDelete = () => {
        setselectedItem(null)
    }

    // Cleanup the timeout on component unmount to avoid memory leaks
    useEffect(() => {
        return () => {
            clearTimeout(debounceTimeout);
        };
    }, []);

  return (
    <>
    <h2>My Shopping List</h2>
    <input type="text"
    value={input}
    onChange={handleInput}
     />
     {
        result.map((ele)=>{
           return <ul onClick={()=>handleSelect(ele)}>{ele}</ul>
        })
     }

     {
        selectedItem && (
            <div>
                <button onClick={handleComplete}>✔️</button>
                <span
                style={
                    {
                        textDecoration: isComplete ? 'line-through' : 'none'
                    }
                }
                >{selectedItem}</span>
                <button onClick={handleDelete}>❌</button>
            </div>
        )
     }
    </>
  )
}

export default ShoppingList