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
        this.visitStatusChangerBinding = this.changeVisitStatus.bind(this)
    }

    changeVisitStatus() {
        this.setState({ isAvailableToVisit: !this.state.isAvailableToVisit })
    }

    // Handling "State" hook inside class components 
    changeStudyStatus() {
        this.setState(
            (state)=>(
                {isAvailableToStudy:!state.isAvailableToStudy}
            )
        )
    }

    increaseVisitTax(){
        this.setState(
            (state,props)=>(
                {visitCost:state.visitCost + props.valueFactor}
            )
        )
    }

    reduceVisitTax(){
        this.setState(
            (state)=>(
                {visitCost:state.visitCost-2}
            )
        )
        if(this.state.visitCost < 0){
            this.setState(
                (state)=>{
                    {state.visitCost = 0}
                }
            )
        }
    }

    // Components lifecycle
    componentDidMount(){
        console.log('Creation test - All set!')
    }

    componentDidUpdate(){
        console.log('Update test - All set!')
    }

    componentDidUnmount(){
        console.log('Removal test - All set!')
    }

    render() {
        return (
            <div>
                <h2> Our campus </h2>
                <p> Name: {this.campusName}</p>
                <p> Code: {this.state.campusCode}</p>
                <p> Is availabe to visit? Answer = {this.state.isAvailableToVisit ? 'Yes' : 'No'}</p>
                <p> Is availabe for studies? Answer = {this.state.isAvailableToStudy ? 'Yes' : 'No'}</p>
                <p> Visit cost = US${this.state.visitCost} dollars</p>
                <h4> Administration controls: </h4>
                <h5> To control campus access: </h5>
                <button onClick={this.visitStatusChangerBinding}>{this.state.isAvailableToVisit ? 'Turn OFF for visits' : 'Turn ON for visits'}</button>
                <br />
                <button onClick={() => this.changeStudyStatus()}>{this.state.isAvailableToStudy ? 'Turn OFF for studies' : 'Turn ON for studies'}</button>
                <br/>
                <h5> To control visit tax: </h5>
                <button onClick={() => this.increaseVisitTax()}>
                    Add +US$2,00
                </button>
                <br/>
                <button onClick={() => this.reduceVisitTax()}>
                    Remove -US$2,00
                </button>
                <br/>
                <p> Component data removal button</p>
            </div>
        )
    }
}