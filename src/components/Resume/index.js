import React from 'react';
import Nav from '../Nav';
import Name from '../Name';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import './resume.css';



export default function Resume(){
    const resume=[
        {id:1, element: <Education />, name:"EDUCATION"},
        {id:2, element: <Experience />, name:"EXPERIENCE"},
        {id:3, element: <Skills />, name:"SKILLS"}
    ];
    return(
        <div>
            <Name />
            <Nav />
            <div className="res-back">
                <div className="resume-main">
                    {
                        resume.map(el => (
                            <div key={el.id} className="res-cont">
                                <h3 className="res-h3">{el.name}</h3>
                                <div className="res-name">{el.element}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}