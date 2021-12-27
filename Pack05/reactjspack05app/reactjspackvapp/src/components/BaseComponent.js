import React from "react";

export default class BaseComponent extends React.Component{
    constructor(props){
        // To allow props use
        super(props)

        // Constructor instructions

        // To use State hook
        this.state={
            codingCourse: 'Java BackEnd',
            coursePrice: 2500,
            isCourseActive:true,
            courseParcelPrice:this.props.courseParcel
        }
        // To handle a variable = 
        // this.courseReputation = this.props.backEndCourseReputation
    }

    // Method to handle "state" hook
    activateOrDeactivateCourse(){
        this.setState(
            (state)=>(
                {isCourseActive:!state.isCourseActive}
            )
        )
    }

    // Component lifecycle handling
    componentDidMount(){
        console.log('Base component data created succesfully')
    }

    componentDidUpdate(){
        console.log('Base component data updated successfully')
    }

    componentWillUnmount(){
        console.log('Base component data removed succesfully')
    }

    // "Render" method
    render(){
        return(
            <>
                <h2> Course objectives </h2>
                {/* Binded method call */}
                <button onClick={this.activationLever}>Turn ON/OFF</button>

                {/* Using the button without binding */}
                {/* <button onClick={()=>this.activateOrDeactivateCourse}>Turn ON/OFF</button> */}
            </>
        )
    }
}