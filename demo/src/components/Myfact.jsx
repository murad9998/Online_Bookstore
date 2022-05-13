import React from 'react';
import { NavLink } from "react-router-dom";

function Myfact(props) {
  return <div className='myfact'>
      <div className='factimg'>
          <div className='fimg1'><img src={props.item.image} /></div>
          <NavLink  to={`/facts/${props.item.id}`}><div className='factlupa'><i className="fas fa-search"></i></div></NavLink>
      </div>
      <div className='facthead'>
          <div className='fhe1'>
              <div className='fhe12'><i className="far fa-user-circle"></i></div>
              <div className='fhe13'><h3>{props.item.author}</h3></div>
          </div>
          <div className='fhe1'>
              <div className='fhe12'><i className="fas fa-calendar-week"></i></div>
              <div className='fhe13'><h3>{props.item.date}</h3></div>
          </div>
      </div>
     
     <div className='facttit'><h2>{props.item.title}</h2></div>
      <div className='facttext'><p>{props.item.about}</p></div>
      <div className='factbtn'><NavLink to={`/facts/${props.item.id}`}><button>Daha çox öyrən</button></NavLink></div>
  </div>;
}

export default Myfact;
