import React, {useState} from 'react';
import './App.css'

export default function App(){
    const [age,setAge]=useState(1)

    return(
        <>
        <p>Idade do usuário (User age): {age} </p>
        <button onClick={()=>setAge(age+1)}>Adicionar</button>
        </>
    )
}