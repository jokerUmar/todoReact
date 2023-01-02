import React,{useState} from 'react'
import "./listItem.css"

function ListItem({idx , arrayData , arr , setArr }) {

    const [checked, setChecked] = useState(false);

    let e = arrayData

    let handleCheck = () =>{
         e.isCompleted = !e.isCompleted
         setChecked(e.isCompleted)
    }
    

    let handleEdit = (id) =>{
        let editText = prompt("textni kiriting")
        let findEdit = arr.find(edit => edit.id === id)
        findEdit.title = editText 
        setArr([...arr])
    }

    let handleDelete = (id) =>{
        let deleteFilter = arr.filter(del => del.id !== id)
        setArr([...deleteFilter])
    }


return (
<>
    <li className={checked ?  "bg-danger" : "bg-white" } id="section-item" >
        <div className='section-item_data'>
            <article><span className='name-id'>id:</span>{e.id}<span></span></article>
        </div>

        <div className='section-item_data'>
            <p className="name">{e.title}</p>
            <input type="checkbox" defaultChecked={e.isCompleted} onClick={handleCheck} id='toggle' />
        </div>

        <div className='section-item_btn'>
            <button className='section-item_btn__edit' onClick={()=>handleEdit(e.id)}>edit</button>
            <button className='section-item_btn__delete' onClick={()=>handleDelete(e.id)}>delete</button>
        </div>
    </li>
</>
)
}

export default ListItem