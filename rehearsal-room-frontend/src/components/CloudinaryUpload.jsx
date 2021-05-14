import { useState } from 'react'
import axios from 'axios'

export default function CloudinaryUpload() {
  //previewSource is a base-64 encoded string that represents the image 
  const [previewSource, setPreviewSource] = useState()

  //sets previewSource when file chosen
  const previewFile = file => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
  }
  //calls previewFile with file chosen
  const handleFileInputChange = e => {
    const file = e.target.files[0] // just takes one file
    previewFile(file)
  }
  //makes post request to backend
  const uploadImage = base64EncodedImage => {
    axios.post('/api/upload', {data: base64EncodedImage})
  }
  //on submit, calls uploadImage with previewSource
  const handleSubmitFile = e => {
    console.log("submitting")
    e.preventDefault();
    if(!previewSource) return; 
    uploadImage(previewSource);
  }



  return (
    <div className="cloudinary-upload">
      <h1>Upload</h1>
      <form onSubmit={handleSubmitFile}>
        <input 
          type="file" 
          name="image" 
          onChange={handleFileInputChange} 
          className=""
        />    
        <button className="" type="submit">Submit</button>  
      </form>
      {previewSource && <img src={previewSource} alt="" style={{height: '100px'}}/>}
    </div>
  )
}