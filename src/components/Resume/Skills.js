import React from 'react'
import html from '../img/HTML5.jpg'
import css from '../img/css.jpg'
import figma from '../img/figma.jpeg'
import json from '../img/json.webp'
import js from '../img/js.png'
import npm from '../img/npm.png'
import bootstrap from '../img/bootstrap.png'
import react from '../img/react.jpeg'
import git from '../img/git.png'
import russia from '../img/russia.png'
import vscode from '../img/vscode.png'
import kyrgyz from '../img/kyrgyzstan.png'
import english from '../img/english.jpg'

export default function Skills(){
    const skills =[
        {skill: "HTML", id:1, foto: html},
        {skill: "CSS", id:2, foto: css},
        {skill: "FIGMA", id:3, foto: figma },
        {skill: "JSON", id:4, foto: json},
        {skill: "JAVASCRIPT", id:5, foto: js},
        {skill: "NPM", id:6, foto: npm},
        {skill: "BOOTSTRAP", id:7, foto: bootstrap},
        {skill: "REACT", id:8, foto: react},
        {skill: "GIT", id:9, foto: git }, 
        {skill: "VS CODE", id:10, foto: vscode},
    ]
    const languages = [
        {lang:"kyrgyz",id:1, foto: kyrgyz },
        {lang:"english", id:2, foto: english },
        {lang:"russian", id:3, foto: russia}
    ]
    return(
        <div className="container">
            <h2>HARD SKILLS</h2>
            <div className="skill-cont">
                {
                    skills.map(el => (
                        <div key={el.id} className="skills" alt="ds">
                           <img src={el.foto} className="skill-foto"></img>
                           {el.skill}
                        </div>
                    )) 
                }
            </div>
            <h2>LANGUAGES</h2>
            <div className="skill-cont">
                {
                    languages.map(el => (
                        <div key={el.id} className="skills">
                            <img src={el.foto} className="skill-foto"/>
                            {el.lang}
                        </div>
                    )) 
                }
            </div>
        </div>
    )
 }
