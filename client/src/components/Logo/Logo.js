import React from 'react';
import { Link } from 'react-router-dom';

import styles from './logo.css'

const Logo = () => {
    return (
    <div className="logo">
        <Link to='/'>
          <h1 className="logo">Psicólogxs de calle</h1>
        </Link>
    </div>
    );
    };

export default Logo;