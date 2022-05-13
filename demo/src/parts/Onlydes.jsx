import React from 'react';
import Mydesignp from '../components/Mydesignp';
import { connect } from 'react-redux';

function Onlydes(props) {
  return <div className='onlydes'>
      <div className='destitle'><h1>Niyə görə bizi seçməlisiniz ?</h1></div>
      <div className='desline'></div>
      <div className='desmain'>
        {props.design.map((a)=><Mydesignp key={a.id} item={a}/>)}
      </div>
  </div>;
}

let t=(s)=>s;
export default connect(t)(Onlydes);
