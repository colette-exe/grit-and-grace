import React from "react";
import Topic from './Topic';
import './LessonPlanContent.css';

var topic_no = ""
class LessonPlanContent extends React.Component {
    render() {
        const type = this.props.data
        topic_no = type;
        if (type === "overview") {
            return (
                <div id='overview'>
                    <h1>Overview</h1>
                    <p>The lesson plans were designed based on the format of Integrated Literature-Skills (LINKS) and are achievable for a total of three to four hours of lessons. The teachers made texts and activities to realize the learning goals: (1) value people equally and (2) develop a sense of inclusion and belongingness. The topic in the first lesson plan is about understanding one’s uniqueness. The rest were selected and structured to understand how diversity and inclusion look in a family, school, community, and society. </p>
                    <br />
                    <div className="lists">
                        <h2>The Topics:</h2>
                        <ul>
                            <li><span className="bold-text larger-text">Topic 1:</span> I am Unique<br/>
                            <div className="larger-width">
                                <span className="bold-text">Objectives:</span><br /><br/>
                                    <span className="bold-text">A. Expressive Objectives</span><br />
                                    <ol>
                                        <li>Discuss how one can accept his flaws and imperfections.</li>
                                        <li>Explain a personal statement/quotation about self-love.</li>
                                    </ol>
                                    <br />
                                    <span className="bold-text">B. Instructional Objectives:</span> Reading Comprehension<br/>
                                    <ol>
                                        <li>Use context clues to infer the meaning of words, phrases and sentences.</li>
                                        <li>Construct a simple but meaningful poster on self-awareness.</li>
                                    </ol>
                                    <br/>
                                </div>
                            </li>
                            <hr></hr>
                            <li><span className="bold-text larger-text">Topic 2:</span> I Belong to a Family
                            <div className="larger-width">
                                <span className="bold-text">Objectives:</span><br /><br/>
                                    <span><span className="bold-text">A. Content Standard:</span><br />
                                    The learner will be able to understand and appreciate the elements and context of 21st Century Philippine Literature from the regions</span>
                                    <br /><br/>
                                    <span className="bold-text">B. Performance Standard:</span><br />
                                    <span className="bold-text">C. Learning Competencies Codes and Objectives:</span><br/>
                                    <ol>
                                        <li><em>Instructional Objectives (EN12Lit-Id-26; EN12Lit-Ie-27)</em>
                                            <ol>
                                                <li>Identify the lines in the song which use literal and figurative language.</li>
                                                <li>.Infer literary meaning based on the literal and figurative language used in the song.</li>
                                            </ol>
                                        </li>
                                        <li><em>Expressive Objectives (EN12Lit-Ie-31.1)</em>
                                            <ol>
                                                <li>.Express what it means to belong to a family through a creative adaptation of a song using multimedia.</li>
                                            </ol>
                                        </li>
                                    </ol>
                                    <br/>
                                </div>
                            </li>
                            <hr></hr>
                            <li><span className="bold-text larger-text">Topic 3:</span> I am a member of School and Community<br />
                            <div className="larger-width">
                                <span className="bold-text">Objectives:</span><br /><br/>
                                    <span className="bold-text">A. Expressive:</span><br />
                                    <ol>
                                        <li>Understand and explain the value of tolerance.</li>
                                    </ol>
                                    <br />
                                    <span className="bold-text">B. Instructional (Literature)</span> Reading Comprehension<br/>
                                    <ol>
                                        <li>Use context clues in decoding the meaning of unfamiliar words</li>
                                        <li>Select important details from the text</li>
                                        <li>Select important details from the text</li>
                                        <li>To explore authorial techniques used in the text</li>
                                    </ol>
                                    <br />
                                    <span className="bold-text">C. Skills Development</span><br/>
                                    <ol>
                                        <li>To write a position paper.</li>
                                    </ol>
                                    <br/>
                                </div>
                            </li>
                            <hr></hr>
                            <li><span className="bold-text larger-text">Topic 4:</span> I Welcome our Differences in a Living Society<br />
                            <div className="larger-width">
                                <span className="bold-text">Objectives:</span><br /><br/>
                                    <span className="bold-text">A. Expressive Objectives</span><br />
                                    <ol>
                                        <li>Understand and appreciate how one can live a peaceful and harmonious life in a society with Hope, Faith, and Love.</li>
                                    </ol>
                                    <br />
                                    <span className="bold-text">B. Instructional Objectives:</span><br/>
                                    <ol>
                                        <li>Define literary context</li>
                                        <li>Determine the author's purpose for writing the text.</li>
                                    </ol>
                                    <br/>
                                    <span className="bold-text">C. Skill Development:</span> Writing a Basic Reflection Paper<br/>
                                    <ol>
                                        <li>Craft a simple, written analysis of the poem through a reflection paper.</li>
                                    </ol>
                                    <br/>
                                </div>
                            </li>
                            <hr></hr>
                        </ul>
                    </div>

                    <br />
                    <div className="texts">
                        <h2>The Texts:</h2>
                            <p><span className="bold-text">This Is Me:</span> written by Benj Pasek and Justin Paul and performed by Keala Settle from “The Greatest Showman” movie. The song teaches us to embrace our flaws, accept our weaknesses and never be shy to show who we really are. It shows how people who were criticized and mocked for their uniqueness stood firm and became proud of themselves. </p><br/>
                            <p><span className="bold-text">Anak:</span> written and sung by Freddie Aguilar which became notable because of the enlightening message it portrays for parents and children. It expresses family values and the unconditional love of the parents from the day their child was born. The last part of the song shows the parents’ acceptance despite their child’s defiance which leaves a message that the family that we belong to will always accept us no matter what the circumstances are.</p><br/>
                            <p><span className="bold-text">Dead Men's Path:</span> written by Chinua Achebe (Nigerian Novelist). A young educator has been tasked to improve Ndume Central School, a place infamous for conventional and outdated practices. The conflict between contemporary Christianity and traditional African practices is depicted in this story.</p><br />
                            <p><span className="bold-text">Three Words of Strength:</span> written by Friedrich von Schiller. Schiller was able to wrap up in his poem, “Three Words of Strength,” the things we need to have in our hearts:  hope, faith, and love.  He showed, using strong metaphors, how the answers to our problems start in our hearts.  All in all, according to him, the greatest calling we can have, is to be of help to our community.</p><br />
                    </div>
                    <br/>
                </div>
            )
        }
        return (
            <Topic data={topic_no} />
        )
    }
}
export default LessonPlanContent;