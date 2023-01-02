import React,{useState, useContext} from 'react'
import "./section-lists.css"
import ListItem from '../ListItem/ListItem'
import Pagination from '../pagination/Pagination'
import { useLocation } from 'react-router-dom'

function SectionLIsts({nameData , PlanData }) {


const pageSize = 8 ;

let pageCount = Math.ceil(nameData.arr.length / pageSize)
let startIndex = 0 ;
let lastIndex = 8;
startIndex = lastIndex * nameData.activePage - lastIndex
lastIndex = nameData.activePage*lastIndex
let sliceArr = nameData.arr.slice(startIndex , lastIndex)






return (
<div className='section-list'>
    <div className="container">
        <ul>
            {
            sliceArr.map((e , idx) =>{
            return <ListItem key={e.id} idx={idx} arrayData={e} arr={nameData.arr} setArr={nameData.setArr} />
            })
            }
        </ul>

        <Pagination pageCount={pageCount} activePage={nameData.activePage} setActivePage={nameData.setActivePage} />

    </div>
</div>
)
}

export default SectionLIsts