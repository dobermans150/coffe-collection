import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { Header } from './components'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='w-full'>
      <Header text='ALOHA' />
    </div>
  </React.StrictMode>,
)
