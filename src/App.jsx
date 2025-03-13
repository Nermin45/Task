import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import imageData from './data/dat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='head'>
    <h2>Şəkil Qalereyası</h2>
    <div className='flowers'>
      {imageData.map((image) => (
        <div className='imges' key={image.id}>
          <h3>{image.title}</h3>
          <img src={image.url} alt={image.alt} width="300" />
        </div>
      ))}
    </div>
  </div>
);
  
}

export default App
