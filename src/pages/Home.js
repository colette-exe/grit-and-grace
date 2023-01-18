import React from 'react';
import './Home.css';
import Body from './Body.js';
import Credit from './Credit.js'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: ""
        }
        this.set_type_home = this.set_type_home.bind(this);
        this.set_type_members = this.set_type_members.bind(this);
        this.set_type_conclusion = this.set_type_conclusion.bind(this);
        this.set_type_disclaimer = this.set_type_disclaimer.bind(this);
        this.set_type_learning = this.set_type_learning.bind(this);
        this.set_type_lesson = this.set_type_lesson.bind(this);
        this.set_type_reference = this.set_type_reference.bind(this);
        this.set_type_feedback = this.set_type_feedback.bind(this);
    }

    set_type_home() {
        this.setState({ type: 'home' });
    }

    set_type_members() {
        this.setState({ type: 'members' });
    }

    set_type_learning() {
        this.setState({type: 'learning-package' })
    }

    set_type_lesson() {
        this.setState({ type: 'lesson-plan' })
    }

    set_type_conclusion() {
        this.setState({ type: 'conclusions' })
    }

    set_type_reference() {
        this.setState({ type: 'references' })
    }

    set_type_disclaimer() {
        this.setState({ type: 'disclaimer' })
    }

    set_type_feedback() {
        this.setState({ type: 'feedback' })
    }


    render() {
        return (
            <div id='home'>
                {/* header */}
                <div id='header'>
                    <div id='header-buttons'>
                        <button id='logo' onClick={this.set_type_home}>GRIT & GRACE</button>
                        <button id='home-button' onClick={this.set_type_home}>HOME</button>
                        <button onClick={this.set_type_members}>THE TEAM</button>
                        <button onClick={this.set_type_learning}>ABOUT THE LEARNING PACKAGE</button>
                        <button onClick={this.set_type_lesson}>LESSON PLANS</button>
                        <button onClick={this.set_type_conclusion}>CONCLUSIONS AND RECOMMENDATIONS</button>
                        <button onClick={this.set_type_reference}>REFERENCES</button>
                        <button onClick={this.set_type_disclaimer}>DISCLAIMER</button>
                        <button onClick={this.set_type_feedback}>FEEDBACK</button>
                    </div>
                    {/* <button id='search'><a href="">SEARCH</a></button> */}
                </div>

                {/* body */}
                <div id='home-body'>
                    <Body data={[this.state.type]} />
                </div>

                {/* credits */}
                <Credit />
            </div>
        )
    }
}

export default Home