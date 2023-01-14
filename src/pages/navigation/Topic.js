import React, { useState } from "react";
import { getDownloadURL, ref } from 'firebase/storage'
import storage from '../../firebase-config'
import './Topic.css'


function Topic(props) {
    const fileName = props.data + ".pdf";
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
        <div id="topic">
            <h1> {props.data} </h1>
            <iframe width="50%" height="800px" src={Url} type="application/pdf"></iframe>
        </div>
    )
}

export default Topic;