import React from 'react'

  import { Navbar,Nav } from 'react-bootstrap'
import './mdbnav.css'


class BootstrapNavbar extends React.Component{

    render(){
        return(
           
                
                       
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top" pullRight className="botmargin">
                                <Navbar.Brand href="/Home"> Website Name</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="ml-auto">
                                    <Nav.Link  href="/">Home</Nav.Link>
                                    <Nav.Link  href="/Shirt"> Shirt</Nav.Link>
                                    <Nav.Link href="/Tshirt">Tshirt</Nav.Link>
                                    <Nav.Link href="/Sparkle">Sparkle</Nav.Link>
                                    <Nav.Link href="/loginform">Login</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                          
                            
                       
                  
              
           
        )  
    }
}

export default BootstrapNavbar;