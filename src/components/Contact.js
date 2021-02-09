import React, { Component } from 'react';
import Map from './Map';

class Contact extends Component {
    render() {

        if (this.props.data) {
            var name = this.props.data.name;
            var street = this.props.data.address.street;
            var city = this.props.data.address.city;
            var state = this.props.data.address.state;
            var zip = this.props.data.address.zip;
            var phone = this.props.data.phone;
            var email = this.props.data.email;
        }

        return (
            <section id="contact">
                <div className="row">
                    <h4>Contact</h4>
                    <p className="address">
                        {name}<br />
                        {street} <br />
                        {city}, {state} {zip}<br />
                        <a href="tel:2048818915">{phone}</a><br />
                        <a href="mailto:denosali@gmail.com">{email}</a>
                    </p>
                    <Map />
                </div>
            </section>
        );
    }
}

export default Contact;
