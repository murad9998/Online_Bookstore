import React from 'react';
import { NavLink } from "react-router-dom";
import ReactStars from 'react-stars';
import { connect } from "react-redux";


function Book(props) {
  let find=props.basket.find((a)=>a.id==props.item.id);
  // console.log(props.basket);
  const addtobasket=()=>{
    if(!find){
      props.dispatch({type:"ADDTOBASKET",value:props.item})
    }
    else{
      props.dispatch({type:"REMOVEFROMBASKET",value:props.item})
    }
  }
  const ratingChanged = (newRating) => {
    console.log(newRating)
  }
  return <div className='mmsld'>
      
      <NavLink to={`/details/${props.item.id}`}> <div className='sldimg'><img src={props.item.image} /></div></NavLink>
      <div className='stars'>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={20}
          value={props.item.star}
          color2={'#ffd700'}
          edit={false}
          
        />
      </div>
      <div className='basketm'>
        <div><h4>Səbətə əlavə et</h4></div>
        <div><i onClick={addtobasket} className={`fas fa-shopping-cart  ${!find?"rrd":"rrr"}`}></i></div>
      </div>
          <div className='bookname'><h4>{props.item.name}</h4></div>
          <div className='prc'>$ {props.item.price}</div>
          <NavLink to={`/details/${props.item.id}`}> <div className='lupa'><i className="fas fa-search"></i></div></NavLink>
      
  </div>;
}

let t=(s)=>s;
export default connect(t)(Book);
