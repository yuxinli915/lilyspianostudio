import React from "react";

export default function Header(props) {
    let name;
    let description;

    if (props.data) {
        name = props.data.name;
        description = props.data.description;
    }

    return (
        <header>
            <nav id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                <ul id="nav" className="nav">
                    <li className="current">
                        <a className="smoothscroll" href="#">Home</a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#about">About</a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#resume">Resume</a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>

            <div className="banner-text">
                <h1 className="responsive-headline">{name}</h1>
                <h3>{description}</h3>
            </div>


            <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="fas fa-chevron-circle-down"></i></a>
            </p>
        </header>
    );
}