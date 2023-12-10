
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
