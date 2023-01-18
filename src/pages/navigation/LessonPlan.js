import React from "react";
import './LessonPlan.css'
import LessonPlanContent from "./LessonPlanContent";
import image from "../../images/lesson-plans-img.png"

class LessonPlan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "overview"
        }
        this.overview = this.overview.bind(this)
        this.topic_1 = this.topic_1.bind(this)
        this.topic_2 = this.topic_2.bind(this)
        this.topic_3 = this.topic_3.bind(this)
        this.topic_4 = this.topic_4.bind(this)
    }

    overview() {
        this.setState({ type: "overview"})
    }

    topic_1() {
        this.setState({ type: "Topic 1" })
    }

    topic_2() {
        this.setState({ type: "Topic 2" })
    }

    topic_3() {
        this.setState({ type: "Topic 3" })
    }

    topic_4() {
        this.setState({ type: "Topic 4" })
    }

    render() {
        return (
            <div id="lesson-plan">
                <div id="lesson-plan-header">
                    <img id="lesson-plan-img" src={ image } alt="Lesson Plan Page Banner"/>
                    {/* buttons */}
                    <div id="buttons">
                        <button onClick={this.overview}>Lesson Plan Overview</button>
                        <button onClick={this.topic_1}>Topic 1</button>
                        <button onClick={this.topic_2}>Topic 2</button>
                        <button onClick={this.topic_3}>Topic 3</button>
                        <button onClick={this.topic_4}>Topic 4</button>
                    </div>
                </div>

                
                {/* contents */}
                <div id="lesson-plan-content">
                    <LessonPlanContent data={this.state.type} />
                </div>
            </div>
        )
    }
}

export default LessonPlan;