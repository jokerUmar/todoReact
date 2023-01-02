import React from 'react'
import "./name.css"
import Header from "../../components/header/Header"
import SectionLists from "../../components/sectionLists/SectionLIsts"
import { useContext } from 'react'
import { NameContext } from '../../context/NameContext'

function Name() {

    let {arr , activePage , setActivePage , setArr } = useContext(NameContext)

    let nameData =  {arr , activePage , setActivePage , setArr }

  return (
    <div className='name'>
        <Header/>
        <SectionLists nameData={nameData} />
    </div>
  )
}

export default Name