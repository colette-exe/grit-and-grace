import React from 'react';
import logo from '../../images/banner.png';
import './Homepage.css';

class Homepage extends React.Component {
    render() {
        return (
            <div>
                {/* logo */}
                <img id="img-logo" src={logo} alt="Logo" />

                <div id="home-content">
                    content
                </div>
            </div>
        )
    }
}

export default Homepage