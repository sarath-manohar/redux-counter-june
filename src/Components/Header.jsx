import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
 <Navbar className="bg-warning">
        <Container>
          <Navbar.Brand href="#home" className='text-light fw-bolder'>
            <img
              alt=""
              src="https://flutterawesome.com/content/images/2019/10/Flutter-Counter-AppA.gif"
              width="40"
              height="30"
              className="d-inline-block align-top"
            />{' '}
           Counter-Redux
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
