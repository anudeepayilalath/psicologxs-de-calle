import React from 'react';
//import SubFooter from './components/SubFooter3/SubFooter';

import './Footer.css';
//import Jumbotron from 'react-bootstrap/Jumbotron' 

const Footer = ()=>{

return (
    
        <div className="container my-4">
          <div className="footer bg-info row justify-content-center">
            <div id="firstItem">
                <h2>Psicologxs de calle</h2>
                <h3>Carrer de la Rieretra, 24, 08001, Barcelona</h3>
                <h3>conatacto@psicologxsdecalle.com</h3>
                <h3>+34 000 00 00 00</h3>

            </div>

            <div  id="firstItem">
                <h3>Colabodores</h3>
                <div className="midcomp  " >
                <img id="footerImg" src="https://static1.squarespace.com/static/54c15c2ae4b0bad93722c9cb/t/56df438cb654f95102099987/1552503652342/?format=750w" width="60px" />
                <img id="footerImg" src="https://lh3.googleusercontent.com/proxy/gyZCnVBUZEVkjzWuUZqe_PrHWguAy406DzXXo42LnVufAsd2YJXfmJX5kz0yIs-5UneZSp8i58vKKg6EZtNtbeDZOI4iC40g6y3aC9tUZenxbt0sl6938MDHDQ5-I4v5bOxhkqxO" width="60px"/>
                
                </div>
            </div>

            <div  id="firstItem">
                <h3>Siguenos o comparte el proyecto</h3>
                <div id="thirdItem">
                    <img src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Instagram_svg-256.png" width="40px"/>
                    <img src="https://cdn0.iconfinder.com/data/icons/global-top-brands/90/facebook-logo-256.png" width="40px"/>
                    <img src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Twitter5_svg-256.png" width="40px"/>
                    <img src="https://cdn0.iconfinder.com/data/icons/simple-darkcon-1/85/envelope-256.png" width="40px"/>
                </div>
            </div>

            
        </div> 
        </div>

        
            
        
)

};

export default Footer; 