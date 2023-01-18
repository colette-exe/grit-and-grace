import { getDownloadURL, ref } from 'firebase/storage';
import React, { useState } from 'react';
import storage from '../../firebase-config';
import logo from '../../images/banner.png';

import './Homepage.css';

function Homepage() {
    const fileName = "Intro.mp4";
    const fileRef = ref(storage, fileName);

    const [Url, setUrl] = useState('');
    getDownloadURL(fileRef)
        .then((url) => {
            setUrl(url);
        })
        .catch((error) => {
            console.log(error)
        });
    return (
        <div>
            {/* logo */}
            <div><img id="img-logo" src={logo} alt="Logo" /></div>

            <div id="home-content">
                <iframe width="80%" height="600px" src={Url} type="video/mp4" allowFullScreen="true"></iframe>
                <div id="paragraph">
                    <h2>Mabuhay!</h2>
                    <h3>You are now in the Grit and Grace learning pod.</h3>
                    <p>
                    This e-Portfolio showcases a collection of language and literacy lesson plans designed to be the heart of the group’s Thematic Learning Package (TLP) inspired by the UN’s Sustainable Developmental Goals (SDG 16) or the Beauty in Diversity and Inclusion. This Learning Package is a final requirement for LLE 206 – Development of Instructional Materials in Language and Literacy Education under the Diploma in Language and Literacy Education program (DLLE) of the University of the Philippines Open University.
                    <br/><br/>
                    Grit and Grace hopes that you may have a meaningful experience in visiting our site and be able to find the helpful information that you need. Good luck!
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default Homepage