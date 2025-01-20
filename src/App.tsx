
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Header from './components/Header'
import Projects from './pages/Projects'

function App() {

  return (
    <>
     
     <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="projects" element={<Projects/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
