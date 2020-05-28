import React from 'react';
import Nav from '../Nav'
import style from './about.module.css';
import Name from '../Name'




export default function About (){
    return (
        <div>
            <Name />
            <Nav />
            <div className="back">
                <div className="container about">
                    <p className="about-text">
                        <span className="text-me">Салам) Меня зовут Талгат. Я родился и вырос в городе Бишкек. </span>
                        
                        <span className="text-me"> Я учусь в УВКШГ # 70, в классе с мат.уклоном. </span>
                        
                        <span className="text-me">В детстве я любил считать и складывать, поэтому меня отдали в этот класс. </span>
                        
                        <span className="text-me">Я хорошо учился и учусь, 
                        мне довольно легко это дается.</span>
                        
                        <span className="text-me">Также я люблю спорт. Занимался многими видами спорта. Например: </span>
                        
                        <span className="text-me">Футбол - хотя я так и не научился хорошо играть( </span>
                    
                        <span className="text-me">Плавание - я участвовал во многих спартакиадах</span>
                        
                        <span className="text-me">Дзюдо - занимался им не долго из-за травмы,</span>
                        <span className="text-me">но успел получить
                        призовое место на соревнованиях </span>
                    </p>
                    <div className="foto"></div>
                </div>
            </div>
        </div>
    )
}