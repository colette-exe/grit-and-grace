import React, { useState } from "react";
import { getDownloadURL, ref } from 'firebase/storage'
import storage from '../../firebase-config'
import './Conclusion.css';

function Conclusion() {
    const fileName = "Conclusion & Recommendation.pdf"
    const fileRef = ref(storage, fileName);

    const [Url, setUrl] = useState('');
    getDownloadURL(fileRef)
        .then((url) => {
            setUrl(url);
        })
        .catch((error) => {
            console.log(error);
        });
    return (
        <div id="conclusion">
            <h1>Conclusions and Recommendations</h1>
            <iframe width="80%" height="600px" src={Url} type="application/pdf"></iframe>
        </div>
    )
}

export default Conclusion;