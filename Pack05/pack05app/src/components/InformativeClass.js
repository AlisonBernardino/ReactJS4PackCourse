import React, {useState} from 'react'
import GlobalNotations from './GlobalNotations'

export default function InformativeClass() {
    const [description,setDescription]=useState(GlobalNotations.schoolDescription)
    const saveDescription=()=>{
        GlobalNotations.schoolDescription = description;
    }

    const showDescription=()=>{
        alert(GlobalNotations.schoolDescription)
    }
    
    return (
        <>
            <h2>School information</h2>
            <p>{'Title: ' + GlobalNotations.schoolName}</p>
            <p>{'"' + GlobalNotations.schoolSlogan + '"'}</p>
            <p>{'City: ' + GlobalNotations.schoolCity}</p>
            <p>{'Email: ' + GlobalNotations.schoolEmail}</p>
            <p>{'Founded in ' + GlobalNotations.foundationYear + ', '
                + GlobalNotations.foundationMonth + ' ' + GlobalNotations.foundationDay}</p>
            <input type="text" size='105' value={description} onChange={(descriptionElement)=>setDescription(descriptionElement.target.value)}/>
            <br/>
            <button onClick={()=>saveDescription()}>Save description</button>
            <br/>
            <button onClick={()=>showDescription()}>Show description</button>
        </>
    )
}