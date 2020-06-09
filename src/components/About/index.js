import React from 'react';
import Nav from '../Nav';
import './about.css';
import Name from '../Name';
import foto from '../img/talgat.png'




export default function About (){
    return (
        <div>
            <Name />
            <Nav />
            <div className="back">
                <div className="container about" >
                        <p className="about-text col-12 col-md-6 col-lg-6">
                            <span className="text-me">Salam) My name is Talgat. I was born and raised in Bishkek.</span>
                            
                            <span className="text-me">I study at ECSG # 70, in a class with a mathematical bias.</span>
                            
                            <span className="text-me">As a child, I loved to count and add, so I was sent to this class. </span>
                            
                            <span className="text-me">I studied well and am studying It is quite easy for me.</span>
                            
                            <span className="text-me">I also love sports. He was engaged in many sports. For instance:</span>
                            
                            <span className="text-me">Football - although I never learned to play well (</span>
                        
                            <span className="text-me">Swimming - I participated in many sports events</span>
                            
                            <span className="text-me">Judo - didn’t do it for long because of an injury,</span>
                            <span className="text-me">but managed to get prize in competitions </span>
                        </p>
                        <img className="foto col-12 col-md-6 col-lg-6" src={foto}/>
                </div>
            </div>
        </div>
    )
}