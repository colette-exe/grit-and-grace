import React from "react";
import logo from '../../images/Grit&Grace.png';
import './Members.css';

class Members extends React.Component {
    render() {
        return (
            <div id="members">
                <img id="img-logo-other" src={logo} alt="Logo" />

                <div id="members-content">
                    <div id="member-summary">
                        Summary
                    </div>
                    <div className="member-card" id="1">
                        Carolina R. Duka
                    </div>
                    <div className="member-card" id="2">
                        Christine Joy Velicaria
                    </div>
                    <div className="member-card" id="3">
                        Lady Lyne Margrethe U. Adoptante
                    </div>
                    <div className="member-card" id="4">
                        Sharina L. Garcia
                    </div>
                </div>
            </div>
        )
    }
}

export default Members;