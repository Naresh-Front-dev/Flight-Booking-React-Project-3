import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'
import HomePage from './pages/HomePage';




function App() {
  return (
    <>
      <head>
        <title>Flight-Booking</title>
      </head>
      <HomePage />
    </>
  )
}

export default App
