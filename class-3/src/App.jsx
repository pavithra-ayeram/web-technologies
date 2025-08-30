import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App(){
  return (
    <>
      <BrowserRouter>
        <Link to = "/">Home</Link>
        <Routes>
          <Route path = '/' Component = {Home}></Route>
        </Routes>
      </BrowserRouter>  
    </>
  )
}