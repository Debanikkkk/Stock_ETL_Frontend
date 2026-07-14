import { useState } from 'react'
import './App.css'
import LoginPage from './pages/LoginPage/LoginPage'
import HomePage from './pages/HomePage/HomePage'
import Header from './components/Header/Header'
import UploadPage from './pages/UploadPage'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [route, setRoute] = useState<'home' | 'upload'>('home')

  const handleNavigate = (to: 'home' | 'upload') => setRoute(to)

  return (
    <div className="app-shell">
      <Header onNavigate={handleNavigate} isAuthenticated={isAuthenticated} onLogout={() => { setIsAuthenticated(false); setRoute('home') }} />
      {isAuthenticated ? (route === 'home' ? <HomePage /> : <UploadPage />) : <LoginPage onLogin={() => setIsAuthenticated(true)} />}
    </div>
  )
}

export default App
