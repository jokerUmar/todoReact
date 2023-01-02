import React,{useRef, useState, useContext} from 'react'
import "./header.css"
import { NameContext } from '../../context/NameContext';
import { useLocation } from 'react-router-dom';

function Header() {

    let location = useLocation()


let {arr , setArr  } = useContext(NameContext)    

let elTitle = useRef()

let handleForm = (e) =>{
    e.preventDefault()

    let newObj = {
        id: arr.at(-1) ?  arr.at(-1).id+1 : 1  ,
        title : elTitle.current.value , 
        isCompleted : false,        
    }

    if (location.pathname == "/") {
        setArr([...arr ,  newObj])
    }
    
    elTitle.current.value = ""
}

    
return (
<>
    <div className="header">
        <div className="container">
            <h1 className="header-title">Overview</h1>
            <form className="header-form"  onSubmit={handleForm}>
                <input ref={elTitle} required className="header-input" type="text" placeholder="name" />
                <button>add</button>
            </form>
        </div>
    </div>
</>
)
}

export default Header