import React from "react";
import Homepage from "./navigation/Homepage";
import Members from "./navigation/Members";
import Package from "./navigation/Package";
import LessonPlan from "./navigation/LessonPlan";
import Conclusion from "./navigation/Conclusion";
import References from "./navigation/References";
import Disclaimer from "./navigation/Disclaimer";

class Body extends React.Component {
    render() {
        const path = this.props.data[0]

        // homepage
        if (path === "" || path === "home") {
            return (
                <Homepage id="middle" />
            )
        }
        else {
            // members
            if (path === "members") {
                return (
                    <Members />
                )
            }
            else if (path === "learning-package") {
                return (
                    <Package />
                )
            }
            else if (path === "lesson-plan") {
                return (
                    <LessonPlan />
                )
            }
            else if (path === "conclusions") {
                return (
                    <Conclusion />
                )
            }
            else if (path === "references") {
                return (
                    <References />
                )
            }
            else if (path === "disclaimer") {
                return (
                    <Disclaimer />
                )
            }
            return (
                <p>{path}</p>
            )
        }
    }
}

export default Body;