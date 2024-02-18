import logo from './logo.svg';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './App.css';
import Contact from './Contact.jsx';
import Navbars from './Navbars.jsx'
import Skills from './Skills.jsx';
import { Link, Outlet } from 'react-router-dom';


function App() {
  return (
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
  );
}

export default App;



// I am an italian multidisciplinary creative frontend developer with over 20 years work experience with a stroke background as a designer.
// I have a creative mind inclined to learn something new everyday to develop solutions and experiences with a strong visual impact.
// I love to work with a great incredible team to build together the next future.
// I'm actually working as a frontend developer with threejs, glsl, react, nextjs at studiogusto.

// <span class="link" style="transform: translate(0px, 0px);">Linkedin</span>

// <span class="overlay" style="transform-origin: 0px 100%; transform: scale(1, 0);"></span>