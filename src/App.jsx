import './App.css'
import Navbar from './components/navbar'
import Home_section from './components/home_section.jsx'

function App() {
  return (
    <div className='w-full h-screen bg-white px-10 py-6 overflow-hidden'>
      <Navbar />
      <Home_section />
    </div>
  )
}

export default App
