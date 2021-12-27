import React from 'react'
import BlueLight from './images/BlueButton.png';
import YellowLight from './images/YellowButton.png';

export default function BlueYellowButton(props){

    return(
        <>
            <img style={{width:'44px'}} src={props.turnedOn?BlueLight:YellowLight}/>
            <button onClick={()=>props.setTurnedOn(!props.turnedOn)}>{props.turnedOn?'YELLOW':'BLUE'}</button>
        </>
    )
}