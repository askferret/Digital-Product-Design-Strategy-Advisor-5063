import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './context/AppContext'
import { ThemeProvider } from './context/ThemeContext'
import { ChatProvider } from './context/ChatContext'
import { DataProvider } from './context/DataContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider>
        <AppProvider>
          <DataProvider>
            <ChatProvider>
              <App />
            </ChatProvider>
          </DataProvider>
        </AppProvider>
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>,
)