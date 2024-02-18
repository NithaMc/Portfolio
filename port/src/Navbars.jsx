import React from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap';
import './App.css'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Skills from './Skills';
import Contact from './Contact';
import fa  from './fa.jpg'

const Navbars = () => {
  return (
    <div>
    <div className='App'>

<div className='navbar'>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container >
          
          <Nav className=" m-auto">
            <Nav.Link as={Link}  to="/">Home</Nav.Link>
            <Nav.Link as={Link}to="/Skills">Skills</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
     <Outlet/>
      </div>
      
<div className='headbox'>
      <div className='heading'>
      <h1 >Hi </h1>
    <h1>I'm NITHA</h1>  
    <h1 className='stack'>Full Stack Developer</h1>
    <p>A developer with passion for learning and creativity</p>
    </div>
     <div className='box'>
      <div className='img'>
        <img src={fa}/>
      </div>
     </div>
      </div>   
      </div>
      <Skills/>
      <Contact/>
      </div>
  );
}

  

export default Navbars