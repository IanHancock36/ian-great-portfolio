import React from 'react'; 
import {BrowserRouter, Switch, Route,} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import Resume from './Components/Resume'
import Testimonials from './Components/Testimonials'
import './App.css'
function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar />
     
   
      
     <Switch>
    
      
       <Route path="/about"> <About/> </Route>
       <Route path="/projects"> <Projects/> </Route>
       <Route path="/resume"><Resume/> </Route>
       <Route path="/testimonials"> <Testimonials/> </Route>
       <Route path="/contact"> <Contact/> </Route>
       <Route path="/"> <Home/> </Route>
      
       
       </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;



/// Portfolio Breakdown

    // Page Outline 
      //Home 
      //About
      //Resume
      //Services
      //Portfolio
      // Tesimonials
      // Contact 