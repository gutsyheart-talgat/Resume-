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
                        <div className="about-cont">
                            <img className="foto" src={foto}/> 
                        </div>
                        <div className="about-cont">
                            <div className="about-text">
                                <p className="text-me">Salam) My name is Talgat. I was born and raised in Bishkek.</p>
                                    
                                <p className="text-me">I study at ECSG # 70, in a class with a mathematical bias.</p>
                                    
                                <p className="text-me">As a child, I liked to count and add, and I did it better than others.</p>
                                
                                <p className="text-me">so I was sent to this class. </p>

                                <p className="text-me">I studied well and am studying It is quite easy for me.</p>
                                    
                                <p className="text-me">I also love sports. He was engaged in many sports. For instance:</p>
                                    
                                <p className="text-me">Football - although I never learned to play well (</p>
                                
                                <p className="text-me">Swimming - I participated in many sports events</p>
                                    
                                <p className="text-me">Judo - didn’t do it for long because of an injury,</p>
                                <p className="text-me">but managed to get prize in competitions </p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}