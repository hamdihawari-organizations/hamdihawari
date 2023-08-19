
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './i18n.js'
import { GalleryStore } from './User/Context/GalleryStore.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GalleryStore>
        <App />
    </GalleryStore>
  </React.StrictMode>,
)