import React, { useState } from "react";
import { getDownloadURL, ref } from 'firebase/storage'
import storage from '../../firebase-config'
import logo from '../../images/Grit&Grace.png';
import './Members.css';

function Members() {
    // filenames
    const mem1 = "1-24.png";
    const mem2 = "2-9.png";
    const mem3 = "3-7.png";
    const mem4 = "4-4.png";

    // file references
    const ref1 = ref(storage, mem1);
    const ref2 = ref(storage, mem2);
    const ref3 = ref(storage, mem3);
    const ref4 = ref(storage, mem4);

    // states
    const [Url1, setUrl1] = useState('');
    const [Url2, setUrl2] = useState('');
    const [Url3, setUrl3] = useState('');
    const [Url4, setUrl4] = useState('');

    // get urls
    getDownloadURL(ref1)
    .then((url) => {
        setUrl1(url);
    })
    .catch((error) => {
        console.log(error)
    });

    getDownloadURL(ref2)
    .then((url) => {
        setUrl2(url);
    })
    .catch((error) => {
        console.log(error)
    });

    getDownloadURL(ref3)
    .then((url) => {
        setUrl3(url);
    })
    .catch((error) => {
        console.log(error)
    });

    getDownloadURL(ref4)
    .then((url) => {
        setUrl4(url);
    })
    .catch((error) => {
        console.log(error)
    });

    return (
        <div id="members">
            <img id="img-logo-other" src={logo} alt="Logo" />

            <div id="members-content">
                <div id="member-summary">
                    The Team
                </div>
                <div className="member-card" id="1">
                    <iframe src={Url1} type="image/jpeg"></iframe>
                </div>
                <div className="member-card" id="2">
                    <iframe src={Url2} type="image/jpeg"></iframe>
                </div>
                <div className="member-card" id="3">
                    <iframe src={Url3} type="image/jpeg"></iframe>
                </div>
                <div className="member-card" id="4">
                    <iframe src={Url4} type="image/jpeg"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Members;