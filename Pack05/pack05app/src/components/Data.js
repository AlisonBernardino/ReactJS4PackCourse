import React from 'react'

export default function Data(props){
    return(
        <section>
            <p>Nickname = {props.userNickname} </p>
            <p>Fullname = {props.userFullName} </p>
            <p>Course = {props.userCourse} </p>
            <p>Semester = {props.userSemester} </p>
            <p>Extra area 1 = {props.extraArea001}</p>
            <p>Extra area 2 = {props.extraArea002}</p>
        </section>
    )
}