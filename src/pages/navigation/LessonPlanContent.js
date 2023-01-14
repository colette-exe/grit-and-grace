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
                </div>
            )
        }
        return (
            <Topic data={topic_no} />
        )
    }
}
export default LessonPlanContent;