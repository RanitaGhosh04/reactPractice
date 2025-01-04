// import React, { useState } from 'react';

// const DropDown = () => {
//   const [category, setCategory] = useState('');
//   const [subCategory, setSubCategory] = useState('');

//   const data = {
//     Fruits: ["Apple", "Mango", "Banana"],
//     Vegetables: ["Potato", "Tomato", "Onion"],
//     DairyProducts: ["Milk", "Cheese", "Yogurt"],
//   };

//   const handleCategoryChange = (e) => {
//     // console.log("Before setCategory:", category);

//     setCategory(e.target.value);
//     setSubCategory('');
//     // console.log("After setCategory:", category); 
//   };

//   // console.log("Category before return:", category); 

//   return (
//     <div>
//       <select value={category} onChange={handleCategoryChange}>
//         <option value="">Select Category</option>
//         {Object.keys(data).map((cat) => (
//           <option key={cat} value={cat}>
//             {cat}
//           </option>
//         ))}
//       </select>

//       <select value={subCategory} onChange={(e) => setSubCategory(e.target.value)}>
//         <option value="">Select an Option</option>
//         {category && data[category].map((item) => (
//           <option key={item} value={item}>
//             {item}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default DropDown;

import React from 'react'
import { useState } from 'react'

const DropDown = () => {

  const [category, setCategory] = useState('')
  const [subCategory, setSubCategory] = useState('')

  const data = {
    "Fruits" : ["Apple","Mango","Banana"],
    "Vegetables" : ["Potato","Tomato","Onion"],
    "Diary" : ["Milk","Cheese","Curd"]
  }

  return (
    <div>
      <select name="" id=""  onChange={(e)=>setCategory(e.target.value)}  value={category}>
      <option value=''>Select a category</option>
        {
          Object.keys(data).map((item,key)=>{
            return <option value={item}>{item}</option>
          })
        }
      </select>

      <select name="" id="" onChange={(e)=>setSubCategory(e.target.value)} value={subCategory} disabled={!category}>
        <option value="">Select subcategory</option>
        {
          category && data[category].map((item,index)=>(
            <option value={item}>{item}</option>
          ))
        }
      </select>
    </div>
  )
}

export default DropDown