import React from 'react';
import Nav from '../Nav'
import style from './about.modules.css'



export default function About (){
    return (
        <div>
            <Nav />
            <div className="back">
                <div className="container about">
                    <p className="about-text">
                        Салам) Меня зовут Талгат. Я родился и вырос в городе Бишкек. Я учусь в <br />
                        <br />
                        УВКШГ # 70, в классе с мат.уклоном. <br />
                        <br />
                        В детстве я любил считать и складывать, поэтому меня отдали в этот класс. <br />
                        <br />
                        Я хорошо учился и учусь, 
                        мне довольно легко это дается.<br />
                        <br />
                        Также я люблю спорт. Занимался многими видами спорта. Например: <br/>
                        <br />
                        Футбол - хотя я так и не научился хорошо играть( <br />
                            <br />
                        Плавание - я участвовал во многих спартакиадах <br />
                        <br />
                        Дзюдо - занимался им не долго из-за травмы,<br />
                        <br/>
                         но успел получить
                        призовое место на соревнованиях <br />
                    </p>
                    <div className="foto"></div>
                </div>
            </div>
        </div>
    )
}