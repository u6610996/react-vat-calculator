import { useState } from 'react'
import './App.css'

function App() {
  const [price, setPrice] = useState(0)
  const [discount, setDiscount] = useState(0)
  const VATRATE = 0.07

  const handlePriceChange = (e) => {
    setPrice(parseFloat(e.target.value) || 0)
  }

  const handleDiscountChange = (e) => {
    setDiscount(parseFloat(e.target.value) || 0)
  }

  const netPrice = Math.max(price - discount, 0)
  const vat = netPrice * VATRATE
  const total = netPrice + vat

  return (
    <div className="container">
      <h2>VAT Calculator</h2>
      <div className="card">
        <div>
          <label>Price: </label>
          <input type="number" placeholder="Enter price" onChange={handlePriceChange} />
        </div>
        <div>
          <label>Discount: </label>
          <input type="number" placeholder="Enter discount" onChange={handleDiscountChange} />
        </div>
        <hr />
        <div>Net Price: {netPrice.toFixed(2)} ฿</div>
        <div>VAT (7%): {vat.toFixed(2)} ฿</div>
        <div><strong>Total: {total.toFixed(2)} ฿</strong></div>
      </div>
    </div>
  )
}

export default App
