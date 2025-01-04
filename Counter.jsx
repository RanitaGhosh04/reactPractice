import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [inputVal, setInputVal] = useState(1)

    const handleInputChange = (e) => {
        const value = e.target.value.trim();
        setInputVal(value === "" ? "" : parseInt(value)); 
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() =>
            {
                if (inputVal === "") {
                    alert("Please enter a valid number");
                } else {
                    setCount(count - inputVal); // Decrement by the value
                }
            }
                
                 }>-</button>
            <button onClick={() =>
            {
                if (inputVal === "") {
                    alert("Please enter a valid number");
                } else {
                    setCount(count + inputVal); // Increment by the value
                }
            }
                
                 }>+</button>
            <p>Increment Decrement By</p>
            <input
                type="text"
                value={inputVal}
                onChange={handleInputChange} // Use the new handler
            />
            <button onClick={() => { setCount(0)
                setInputVal(1)
            }
               }
                >Reset</button>
        </>
    )
}

export default Counter
