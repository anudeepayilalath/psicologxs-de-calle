import React from 'react';
import Logo from './../Logo/Logo';

import Button from 'react-bootstrap/Button'

import styles from './header.css'


const Header = () => {
  return (
    <div className="container my-4">
      <div class="row justify-content-center">
        <div class="col">
          <Logo/>
        </div>
        <div class="col d-sm-none d-md-block d-none d-sm-block justify-content-end text-right">
        <Button className="text-uppercase signInText" variant="link">Área privada</Button> 
        </div>        
      </div>
    </div>
  )
}

export default Header;

/**the button is just for testing. it will have to be changed */