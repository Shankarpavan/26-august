import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const name = "Shankar";
  const sub = "FSWD section-51"

  // URL of the image you provided
  const imageUrl = "https://imgs.search.brave.com/Pn6bKa6m7K8b8KAK3rzlhvV4igWMd6R9X0XZkbRqNhc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMyLmNic25ld3Nz/dGF0aWMuY29tL2h1/Yi9pL3IvMjAyMS8w/OC8wMi85MDhkNzUz/Ni1lMjViLTQzNzUt/YjQ3ZC1kNzYyZmUz/NjJkODgvdGh1bWJu/YWlsLzYyMHg0MTMv/ZGMyZTI3OWQ5NDEz/MDAxOWIyYzFmYjg0/ZWQ5MWE1N2UvZ2Fs/dmVzdG9udHhmcm9t/c3BhY2UuanBnIw"

  return (
    <>
      <div>
        <header><h1> jsx is HTML like syntax inside javascript</h1></header>
      </div>
      <div>
        <p> JSx is syntactic sugar </p>
        <div> <br />
          <h1> Hello</h1> <p>world</p>
        </div>
        <div className='hero'>HI</div>
      </div>
      <div>
        <h1> Heartly Welcome {name}</h1>
        <h2> Heartly Welcome {sub}</h2>

        {/* Added image tag here */}
        <img src={imageUrl} alt="Earth view from space" />
      </div>
    </>
  )
} 

export default App