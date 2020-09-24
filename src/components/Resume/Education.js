import React from 'react'
import './resume.css'

export default function Education(){
    return(
        <div>
            <div>
                <h2 className="edu-h2">Educational complex school gymnasium # 70
                    Class with a mathematical bias.</h2>
                <p className="edu-p">September 2009 - June 2020</p>
                <h2 className="edu-h2">Kyrgyz-Turkish Manas University</h2>
                <p className="edu-p">September 2020 - Present</p>
                
            </div>

            <div>
                <h2 className="edu-h2">Specialized Certified Courses:</h2>
                <h3 className="edu-h3">Front-End dev. in it-academy:</h3>
                <p className="edu-p">December 2019 - Present</p>
                <h3 className="edu-h3">SMM-manager in MarketingAcademia:</h3>
                <p className="edu-p">December 2018 - January 2019</p>
                <h3 className="edu-h3">English in UCA:</h3>
                <p className="edu-p">October 2017 - May 2018</p>
            </div>
        </div>
    )
}