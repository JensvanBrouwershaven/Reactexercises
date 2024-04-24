import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import DeliveryList from './components/DeliveryList';
function App() {


  return (
    <>
    <div className='HtmlBody'>
      <div className='header'>
        <Header />
        </div>
        <div className='Deliverylist'>
        <h1>Delivery Tracking</h1>
        <DeliveryList/>
        </div>
    </div>

    </>
  )
}

export default App
