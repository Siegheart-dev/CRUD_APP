import { useState, useEffect } from 'react'
import './App.css'
import Table from './components/Table'
import ImageForm from './components/ImageForm'
import axios from 'axios'


function App() {

  const [images, setImages] = useState("")
  const [isLoading, setisLoading] = useState(true)


  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/image');
      setImages(response.data)
      setisLoading(false)
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <div className=' px-8 bg-indigo-100 min-h-screen '>
      <nav className='pt-8' >
        <h1 className=' text-5xl text-center pb-8'>IMAGE STORAGE </h1>
      </nav>
      {/* Body */}
      <ImageForm
        setImages={setImages}
        fetchData={fetchData}
      />
      <Table
        images={images}
        isLoading={isLoading}
        setImages={setImages} />
    </div>
  )
}

export default App