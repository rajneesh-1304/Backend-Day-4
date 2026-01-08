import React from 'react'
import Weather from './Page/Weather/Weather'
 import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div className='container'>
      <Weather/>
      <ToastContainer />
    </div>
  )
}

export default App
