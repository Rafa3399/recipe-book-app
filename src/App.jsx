
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Foodlist from './components/Foodlist'

function App() {

  return (
    <>
      <div className='root'>
        <Navbar />
        <Sidebar />
        <Foodlist />
        <Footer />
      </div>
    </>
  )
}

export default App
