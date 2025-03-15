// Style
import './App.css'
import { Outlet } from 'react-router-dom'
//page fixas
import JoinDemo from './components/joinDemo/joinDemo'
import NavBar from './components/navbar/navBar'
import Footer from './components/footer/footer'

function App() {

  return (
    <div className="Global">
      <JoinDemo />

      <NavBar />
      <div className="gobal-main">
        <Outlet />
      </div>
      <Footer />

    </div>
  )
}

export default App
