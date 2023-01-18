import React, { useState } from "react";
import { getDownloadURL, ref } from 'firebase/storage'
import storage from '../../firebase-config'
import './Conclusion.css';

function Conclusion() {
    // const fileName = "Conclusion & Recommendation.pdf"
    const fileName = "Grit and Grace Conc and Recomm.mp4";
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
            <iframe width="80%" height="600px" src={Url} type="video/mp4" allowFullScreen="true"></iframe>
            <br />
            <div id="content">
            <br /><br />
                <h2>Conclusion</h2>
                <h4>Theme: There is Inclusion in Embracing Uniqueness and Diversity</h4>
                <p>
                    LINKS Lesson Plan enables the learners to have a deeper analysis of a literary piece through the different activities provided by the teachers to further enhance the students’ reading skills.
                    <br/><br/>
It slowly scaffolds into the existing literature through activities that ensure that the learners will have the skills needed to do so.  It introduces learning subtly, leveling up each time until the learner is already ready to understand the literary material.  Ultimately, the learner will be left with the skill needed for future activities and competencies.
                </p>
                <br /><br />
                <h2>Recommendations</h2>
                <p>
                Considering their differences, it is essential to give learners the learning experience that suits them.  Going faster serves learners that need enrichment and slower for those who require intervention.  Each learning experience's success depends on how teachers execute a Lesson Plan and how well these lessons are designed to address the learners' needs.  It is recommended to create lessons that understand learners' needs and preferences.
                </p>
                <br /><br />
            </div>
        </div>
    )
}

export default Conclusion;