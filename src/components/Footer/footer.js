import React, { Component } from 'react';
import './footer.css';
import Modalpopup from '../Modal/modal.js';

class Footer extends Component {
    render() {
    return (
    <div className="footer">
        <h3 className="text-center">Feel free to email me at <a href={`mailto:${this.props.email}`}>djgoodrich15@gmail.com</a><Modalpopup /></h3>
    </div>
    );
}
}
export default Footer;