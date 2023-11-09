
import './App.css'
import AbouteMe from './components/AbouteMe'
import Contact from './components/Contact'
import Main from './components/Main'
import Projects from './components/Projects'
import Sidenav from './components/Sidenav'
import ProjectsBackend from './components/ProjectsBackend'
import { useEffect, useState } from 'react'


function App() {

  const [theme, setTheme] = useState("light")

  useEffect(() => {
    if(theme === "dark"){
      document.querySelector('html').classList.add('dark')
    } else{
      document.querySelector('html').classList.remove('dark')
    }
  },[theme])

  return (
    <>  
      <Sidenav setTheme={setTheme}/>
      <Main setTheme={setTheme}/>
      <AbouteMe/>
      <Projects/>
      <ProjectsBackend/>
      <Contact/>
    </>
  )
}

export default App
