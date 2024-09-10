
import Home  from './Pages/Home';
import './App.css'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Project from './Pages/Project';
function App() {

  return (
    <Router>
      <div className="font-bebas flex-col gap-10 overflow-hidden text-efuye">
         <Routes>
            <Route path ='/' element={<Home/>} />
            <Route path ='/:id' element={<Project />} />
         </Routes> 
      </div>

    </Router>
  )
}

export default App
