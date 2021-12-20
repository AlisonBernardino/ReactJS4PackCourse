import React,{useState} from 'react'
import RedLight from './images/RedLed.png'
import GreenLight from './images/GreenLed.png'

export default function RedGreenLed(props) {

    const[login,setLogin]=useState(false)

    // const loggedInMessage = () => {
    //     return 'You are ONLINE!'
    // }

    // const loggedOutMessage = () => {
    //     return 'You are OFFLINE!'
    // }

    return (
        <>
            <img style={{ width: '43px' }} src={props.isGreen ? GreenLight : RedLight} />
            <button onClick={() => props.setGreen(!props.isGreen)}>{props.isGreen ? 'LOGOUT' : 'LOGIN'}</button>
            {/* <p>{login?loggedInMessage():loggedOutMessage()}</p> */}
        </>
    )
}

