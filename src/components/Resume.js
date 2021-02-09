import React from 'react';

export default function Resume(props) {
    if (props.data) {
        var education = props.data.education.map(education =>
            <div key={education.school}>
                <h3>{education.school}</h3>
                <p className="info">
                    {education.degree} <span>&bull;</span><em className="date">{education.graduated}</em>
                </p>
                <p>{education.description}</p>
            </div>
        )

        var work = props.data.work.map(work =>
            <div key={work.company}>
                <h3>{work.company}<span>&bull;</span><em className="location">{work.location}</em></h3>
                <p className="info">
                    {work.title}<span>&bull;</span> <em className="date">{work.years}</em>
                </p>
                <p>{work.description}</p>
            </div>
        )
    }
    return (
        <section id="resume">
            <div className="row education">
                <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                </div>

                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            {education}
                        </div>
                    </div>
                </div>
            </div>

            <div className="row work">
                <div className="three columns header-col">
                    <h1><span>Work</span></h1>
                </div>

                <div className="nine columns main-col">
                    {work}
                </div>
            </div>
        </section>
    );
}
