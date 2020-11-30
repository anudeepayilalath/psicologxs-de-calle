import React from 'react'
import { HashLink } from 'react-router-hash-link';

import styles from './BackToTop.module.css';



const BackToTop = () => {
   

    return (
        <div className={styles.backToTop}>
            <HashLink to="#top" scroll={el => el.scrollIntoView({ behavior: 'smooth' })}>&uarr;</HashLink>
        </div>
    )
}
export default BackToTop;