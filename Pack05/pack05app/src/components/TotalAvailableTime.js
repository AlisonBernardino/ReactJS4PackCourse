import React from 'react';

export default function TotalAvailableTime(props){
    return(
        <div>
            <p> Total studies availability (In hours): {props.timeSum}</p>
            <h4>{props.timeSum >= 8 ? "Qualified = Sufficient available time" : "Disqualified: Insufficient available time"}</h4>
        </div>   
    )
}