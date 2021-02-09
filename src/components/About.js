import React from 'react';

export default function About(props) {
    let bio;
    let pic;
    if (props.data) {
        bio = props.data.bio;
        pic = "image/" + props.data.image;
    }

    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic" src={pic} alt="" />
                </div>
                <div className="nine columns main-col">
                    <h2>About</h2>
                    <p>{bio}</p>
                </div>
            </div>

        </section>
    );
}