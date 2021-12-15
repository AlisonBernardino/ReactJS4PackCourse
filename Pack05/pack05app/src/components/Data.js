import React from 'react'

export default function Data(props){
    let benefit01 = 15;
    let benefit02 = 10;
    return(
        <section>
            <p style={{color:'#f00', fontSize:'20px'}}>Nickname = {props.userNickname} </p>
            <p>Fullname = {props.userFullName} </p>
            <p>Course = {props.userCourse} </p>
            <p>Semester = {props.userSemester} </p>
            <p>Extra area 1 = {props.extraArea001}</p>
            <p>Extra area 2 = {props.extraArea002}</p>
            <p>Bonus message = {props.bonusMessage()}</p>
            <p>Benefits sum = {benefit01 + ' (Benefit A) + ' + benefit02 + ' (Benefit B) = ' + props.sumBenefits(benefit01,benefit02)}</p>
        </section>
    )
}