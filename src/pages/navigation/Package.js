import React from "react";
import "./Package.css";
import image from "../../images/learning-package-banner.png"

class Package extends React.Component {
    render() {
        return (
            <div id="package">
                
                <div id="package-header">
                    <img id="img-package" src={image} alt="Tulips with books" />
                </div>
                <div id="package-body">
                    Contents
                </div>
            </div>
            
        )
    }
}

export default Package;