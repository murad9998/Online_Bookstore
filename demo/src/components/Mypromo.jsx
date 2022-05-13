import React from 'react'
import { NavLink } from "react-router-dom";

function Mypromo(props) {
  return (
    <div className='propmdes'>
        <NavLink to={`/details3/${props.item.id}`}><div className='proimg'><img src={props.item.image}  /></div></NavLink>
        <div className='protit'><h3>{props.item.title}</h3></div>
    </div>
  )
}

export default Mypromo