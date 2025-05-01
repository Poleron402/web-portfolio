
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Header from './components/Header'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import PersonalProjects from './components/PersonalProjects'
import SchoolProjects from './components/SchoolProjects'
import IndividualSchoolProject from './pages/IndividualSchoolProject'

function App() {

  return (
    <>
     
     <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="resume" element = {<Resume/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="projects" element={<Projects/>}>
          <Route path="school" element={<SchoolProjects/>}/>
          <Route path=":code" element={<IndividualSchoolProject/>}/>
          <Route index element={<PersonalProjects/>}/>
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
