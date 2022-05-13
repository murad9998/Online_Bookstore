import React from 'react';
import { NavLink } from "react-router-dom";

function Typesxs() {

  return <div className='sxs'>
      <div className='sxsm'>
      <NavLink to='/bestseller'><div className='sxs1'><div className='ne'><div> Ən çox satılanlar</div></div></div></NavLink>
      <NavLink to='/textbook'><div className='sxs1'><div className='en'><div> Ənənəvi kitablar</div></div></div></NavLink>
      <NavLink to='/kateqoriya1'><div className='sxs1'><div className='ene'><div> Audio kitablar</div></div></div></NavLink>
      </div>
  </div>;
}

export default Typesxs;
