import React from 'react'

export default function FrontEndDescription(props) {
    return (
        <>
            <h3> Front end developers are computer
                programmers who specialize in website
                design. Front end developer duties
                include determining the structure and
                design of web pages, striking a balance
                between functional and aesthetic design,
                and ensuring web design is optimized for
                smartphones.</h3>
            {props.children}
            {/* It can be called as an array. Example: */}
            {/* {props.children[0]} */}
            <p> {props.website}</p>
        </>
    )
}