import React from 'react'

export default function StudentAvailableTime(props){
    return(
        <div>
            <label> Time availability {props.period}</label>
            <br/>
            <input type="text" name={props.timeName} value={props.time} onChange={(timeElement)=>props.setTime(timeElement)}></input>
            <br/>
        </div>
    )
}