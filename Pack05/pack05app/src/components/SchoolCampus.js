// Using State on class components
import React from 'react'

export default class SchoolCampus extends React.Component {
    constructor(props) {
        super(props)
        this.campusName = "Green aurora"
        this.state = {
            isAvailableToVisit: true,
            isAvailableToStudy: true,
            visitCost: 30,
            campusCode: "A01",
        }
    }

    changeVisitStatus() {
        if (this.state.isAvailableToVisit == true) {
            this.state.isAvailableToVisit = false;
        }else{
            this.state.isAvailableToVisit = true;
        }
    }

    changeStudyStatus() {
        if(this.state.isAvailableToStudy == true){
            this.state.isAvailableToStudy = false;
        }else{
            this.state.isAvailableToStudy = true;
        }
    }

    render() {
        return (
            <div>
                <h2> Our campus </h2>
                <p> Name: {this.campusName}</p>
                <p> Code: {this.state.campusCode}</p>
                <p> Is availabe to visit? Answer = {this.state.isAvailableToVisit ? 'Yes' : 'No'}</p>
                <p> Is availabe to study? Answer = {this.state.isAvailableToStudy ? 'Yes' : 'No'}</p>
                <p> Visit cost = US${this.state.visitCost} dollars</p>
                <br/>
                <p> Administration controls: </p>
                <br/>
                
            </div>
        )
    }
}