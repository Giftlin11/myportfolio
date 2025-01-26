import React,{useState} from 'react'
import './qualification.css'

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab=(index)=>{
        setToggleState(index);
    }
  return (
    <section className='qualification section'>
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState===1? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>Education
                </div>

                <div className={toggleState===2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState===1 ? "qualification__content qualification__content-active" : "qualification__content "}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Bachelor of Technology </h3>
                            <span className="qualification__subtitle">Chennai - St.Joseph's College Of Engineering</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder">
                            </span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                            
                        </div>
                        <div>
                            <h3 className="qualification__title">Higher Seconday Education</h3>
                            <span className="qualification__subtitle">Chennai - Jeppiaar Matric Higher Secondary School </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2020 - 2022
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Secondary Education</h3>
                            <span className="qualification__subtitle">Chennai - St.John's International School </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2018 - 2020
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                            
                        </div>
                    </div>

                    
                </div>

                <div className={toggleState===2 ? "qualification__content qualification__content-active" : "qualification__content "}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Full Stack Intern</h3>
                            <span className="qualification__subtitle">India - CodSoft</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> Nov 2024 - Jan 2025
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                            
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                            
                        </div>
                        <div>
                            <h3 className="qualification__title">Web Development</h3>
                            <span className="qualification__subtitle">India - Octanet </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt">Mar 22024 - Apr 2024 </i> 
                            </div>
                        </div>
                    </div>

                     <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Power BI</h3>
                            <span className="qualification__subtitle">India - PCI</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt">Oct 2023-Nov2023</i>
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                            
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification