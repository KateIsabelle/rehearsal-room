import { useState } from 'react'

export default function CloudinaryUpload() {
  const [fileInput, setFileInput] = useState("")
  const [selectedFile, setSelectedFile] = useState("")

  const handleFileInputChange = e => {
    const file = e.target.files[0] // just takes one file
  }

  return (
    <div className="cloudinary-upload">
      <h1>Upload</h1>
      <form>
        <input 
          type="file" 
          name="image" 
          onChange={handleFileInputChange} 
          value={fileInput} 
          className=""
        />    
        <button className="" type="submit">Submit</button>  
      </form>
    </div>
  )
}