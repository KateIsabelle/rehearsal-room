import { useState } from 'react'

export default function CloudinaryUpload() {
  const [fileInput, setFileInput] = useState("")
  const [selectedFile, setSelectedFile] = useState("")
  //previewSource is a string that represents the image
  const [previewSource, setPreviewSource] = useState()

  const previewFile = file => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
  }

  const handleFileInputChange = e => {
    const file = e.target.files[0] // just takes one file
    previewFile(file)
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
      {previewSource && <img src={previewSource} alt="" style={{height: '300px'}}/>}
    </div>
  )
}