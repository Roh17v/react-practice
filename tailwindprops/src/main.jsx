import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from './components/card.tsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Card username="Rohit" />
      <Card username="hitesh" />
      <Card username="Somesh" />
  </React.StrictMode>
)
