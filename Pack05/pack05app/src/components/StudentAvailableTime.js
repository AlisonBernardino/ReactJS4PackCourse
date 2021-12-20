import React from 'react'

export default function StudentAvailableTime(props){
    return(
        <div>
            <label> Morning availability {props.period}</label>
            <br/>
            <input type="text" value={props.time} onChange={(timeElement)=>props.setTime(timeElement.target.value)}></input>
            <br/>
        </div>
    )
}