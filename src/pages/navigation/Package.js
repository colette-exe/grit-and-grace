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
                    <h2>Theme: There is Inclusion in Embracing Uniqueness and Diversity</h2>
                
                    <div className="lists">
                        <h3>Learning Goals:</h3>
                        <ol>
                            <li>To value people equally</li>
                            <li>To develop a sense of inclusion and belongingness.</li>
                        </ol>
                    </div>
                    <br/>
                    <div id="package-h">
                        <h2>Intended Curriculum</h2>
                        <h4>K12-Curriculum</h4>
                    </div>
                    <br />
                    
                    <h3>Target Learners</h3>
                    <p>
                    The target learners of this learning package are in the stage where they are developing their ability to apply different comprehension skills based on the ideas they have read in the text. Their vocabulary continues to expand as they read the more complex narrative and expository texts (Morin, 2022). They can easily identify the use of similes, metaphors, and other essential literary devices while still learning to understand and use more complex ones such as symbolism, imagery and satire. The texts they read and how they are viewed are treated so that multiple viewpoints are accommodated with greater depth. Based on the excerpt from the book Direct Instruction Reading by Carnine et al. (2004) discussing Chall's stages of reading development, our learners can be described as readers under the 4th or the Multiple Viewpoint stage. Steinman, et al. (2006) stated that readers under this stage could integrate what they learned in previous stages and interrelate the available knowledge from different points of view to be able to make inferences.
                    </p>

                    <br/>
                    <h3>The Theme and its Rationale</h3>
                    <em>Option 1 - Beauty in Diversity and Inclusion (SDG 16)<br/>Theme: There is Inclusion in Embracing Uniqueness and Diversity</em>
                    <p>
                        It is a fact that in every class, students are diverse in different aspects such as personality, capabilities, gender, and culture.  In extreme cases, the lack of understanding of these differences may become one of the main grounds for bullying and dissonance among school students. Previous researchers found that students are likely to attribute the victims’ differences as the cause of bullying (Thornberg & Knutsen, 2011).  Espelage (2018), as mentioned by Cuesta., et al. (2022), also added that people who are different in terms of sexual orientation, gender, race, etc., are prone to be victimized. With the presence of social media, these situations can now be easily magnified through bashing and cancel culture. 
                        The millennials and Gen Z are the most victimized, and our target learners are in. According to Cook (2022), 59% of parents believe their children ages 14-18 are bullied. He also added that school and social media sites were included in the top three locations where the victims reported bullying happened. Through the lessons under our unifying theme, the students will be given an avenue to ponder and be open to different points of view, ideas, and values outside of what is already being molded in them and reflect on how they would act upon certain situations appropriately. The topics and texts under this theme are hoped to be instruments for our students to realize that they belong and can be advocates in making an inclusive society where everyone can participate without discrimination.
                    </p>

                    <br />
                    <h3>The Rationale of the Topic Sequence</h3>
                    <p>
                        Four topics were important in creating a specific face of the theme. These topics were classified into four major components sequenced from specific to broad. The topics’ logical progression was designed to allow the students to understand certain concepts and accumulate learnings needed as a prerequisite for the succeeding topics.
                        <br /><br />
                        <span id="bold-text">Topic 1</span> provides the students’ foundation for learning about diversity. It focuses on providing texts that would help students understand their unique backgrounds, personalities, and abilities.
                        <br /><br />
                        <span id="bold-text">Topic 2</span> allows the students to understand what inclusion looks like in the basic unit of society. The texts under this topic will help the students view themselves as persons who are valuable and reliable members of the family.
                        <br /><br />
                        <span id="bold-text">Topic 3</span> includes texts about diversity and inclusion in school and community. They aim to clarify everyone’s equal right to learn and grow in school and the community.
                        <br /><br />
                        <span id="bold-text">Topic 4</span> guides the students to accept and embrace everyone’s differences as they interact with all the members of society. They will be able to picture and experience being in an environment that provides equal opportunities to participate and engage in a wide array of social activities.
                        <br /><br />
                        <p>Through all of these topics, the students need to internalize that no matter how well we know and understand ourselves, there is the presence of family, school, and community, and peace and harmony within the society must prevail. Diversity will not be an issue and Inclusion will always be the prevailing culture if we truly accept that we can all live peacefully no matter our differences.
                        </p>
                        <br /><br />
                        
                        <h3 className="lists">Text Selection Criteria</h3>
                        <ul>
                            <li>Reading Age Level - The chosen text, its vocabulary, story structures and content are age-appropriate to Filipino SHS students between 16-19 years old.</li>
                            <li>Language – The chosen texts are written in either English or Filipino language.</li>
                            <li>Length -  4 days</li>
                        </ul>
                    </p>
                </div>
            </div>
            
        )
    }
}

export default Package;