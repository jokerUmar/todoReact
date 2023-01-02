import React,{useState} from 'react'
import "./pagination.css"
import _, { set , slice , take } from 'lodash';

function Pagination({ pageCount ,activePage , setActivePage }) {

    let pageArr = _.range(1,pageCount+1)

    let handlePlusPage =() =>{
        if (activePage != pageCount) {
            setActivePage(activePage+1)
        }
    }
    let handleMinusPage =() =>{
        if (activePage != 1) {
            setActivePage(activePage-1)
            
        }
    }

return (
<div className="pagination">
    <button onClick={handleMinusPage}>&laquo;</button>
    {
        pageArr.length ? pageArr.map(e =>{
            return <button key={e} onClick={()=>{setActivePage(e)}}>{e}</button> 
        }) : ""
    }
    <button onClick={handlePlusPage} >&raquo;</button>
</div>
)
}

export default Pagination
