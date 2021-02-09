import './App.css';
import React, { Component } from "react";
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Certificate from './components/Certificate';
import Footer from './components/Footer';
import Contact from './components/Contact';

class App extends Component {
    state = { data: {} };

    getData = () => fetch(`myData.json`).then(response => response.json());

    componentDidMount = () => this.getData().then(data => this.setState({ data }));

    render = () =>
        <div className="App">
            <Header data={this.state.data.main} />
            <About data={this.state.data.main} />
            <Resume data={this.state.data.resume} />
            <Certificate data={this.state.data.portfolio} />
            <Contact data={this.state.data.main} />
            <Footer data={this.state.data.main} />

        </div>
}

export default App;
