import React, { useRef, useState } from 'react'

const DragNDrop = () => {
  const [files, setFiles] = useState([])
  const fileRef = useRef(null)

  const handleClick = () => {
    fileRef.current.click();
  }

  const handleFiles = (e) => {
    setFiles([...files,...Array.from(e.target.files)])
    // console.log(files);
  }

  const handleDelete = (fileToDelete) => {
    setFiles(files.filter((file)=>file!==fileToDelete))
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const droppedFiles = Array.from(e.dataTransfer.files)
    setFiles((prevFiles)=>[...prevFiles,...droppedFiles])
  }

  return (
    <div>
      <h3>File Upload and Display</h3>
      <div style={{border:'2px dashed blue',padding:'10px', cursor:'pointer'}}
      onClick={handleClick}
      onDragOver={(e)=>e.preventDefault()}
      onDrop={handleDrop}
      >
        <p>Drag `n` drop some files here, or click to select files</p>
        <input type="file" name="" id=""
        ref={fileRef}
        style={{display:'none'}}
        onChange={handleFiles}
        />
      </div>
      <div>
        {files?.map((file)=>(
          <ul>
            <button
            onClick={()=>handleDelete(file)}
            >Delete</button>
            {file.name}</ul>
        ))}
      </div>
    </div>
  )
}

export default DragNDrop