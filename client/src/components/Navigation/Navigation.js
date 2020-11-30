import React from 'react';
import Nav from 'react-bootstrap/Nav';

import styles from './navigation.css';

const Navigation = () => {
    return(
      <Nav className="justify-content-end navBar" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">¿Por qué existe?</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">Forma parte de la solución</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">Contáctanos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">Equipo</Nav.Link>
        </Nav.Item>
    </Nav>
    )
}

export default Navigation;

//When you click on a link created with react-router-hash-link it will scroll to the element on the page with the id that matches the #hash-fragment in the link.

//pending to make the hamburger