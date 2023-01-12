import React from 'react';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <div id='home'>
                {/* header */}
                <div id='header'>
                    <a href="/grit-and-grace">GRIT & GRACE</a>
                    <div id='header-buttons'>
                        <a href="">HOME</a>
                        <a href="">THE TEAM</a>
                        <a href="">ABOUT THE LEARNING PACKAGE</a>
                        <a href="">LESSON PLANS</a>
                        <a href="">CONCLUSIONS AND RECOMMENDATIONS</a>
                        <a href="">REFERENCES</a>
                        <a href="">DISCLAIMER</a>
                        <a href="">FEEDBACK</a>
                    </div>
                    <a href="">SEARCH</a>
                </div>

                {/* body */}
            </div>
        )
    }
}

export default Home