// Class components theme
import React from 'react'

class CourseTopicsClass extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <div>
                    <h2> About the course - {this.props.location}</h2>
                    <h3> FrontEnd course: </h3>
                    <ul>
                        <li>
                            HTML structure
                        </li>
                        <li>
                            CSS styles
                        </li>
                        <li>
                            JavaScript fundamentals
                        </li>
                        <li>
                            ReactJS essentials
                        </li>
                        <li>
                            API use
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}

export default CourseTopicsClass