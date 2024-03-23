import React, { useState } from 'react'
import {Navbar, Container} from 'react-bootstrap'


function NavBar() {
     const [activelink, setActiveLink] = useState('home');
     const [scrolled, setScrolled] = useState(false);
     
     useEffect(()=>{
        const onScroll = () =>{
            if (windows.scrolly > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        windows.addEventListener('scroll', onScroll);

        return () => windows.removeEventListener('scroll', onScroll);
     }, [])

  return (
    <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">
        <img src={''} alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Skill</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>

        </Nav>
        <span className="nav-text"> l0
        <div className="social-icon">
            <a href="#"><img src={''} alt="" /></a>
            <a href="#"><img src={''} alt="" /></a>
            <a href="#"><img src={''} alt="" /></a>
        </div>
        <button className='vvd' onClick={()=> console.log('connect')}><span>let's connect</span></button>
        </span>

      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
       
}

export default NavBar