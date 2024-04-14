import React from 'react'
import NavBar from './Components/NavBar'
import Job from './Components/Job'
import Search from './Components/Search'
import Value from './Components/Value'
import Footer from './Components/Footer'


const App = () => {
  return (
    <div className='w-[85%] m-auto bg-white'>
    <NavBar/>
    <Search/>
    <Job/>
    <Value/>
    <Footer/>
    App
    </div>
  )
}

export default App  