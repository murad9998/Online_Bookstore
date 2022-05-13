import React from 'react';
import ReactStars from "react-stars";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

function Overall3(props) {
  let find=props.basket.find((a)=>a.id==props.item.id);
  let find2=props.favs.find((bd)=>bd.id==props.item.id);
  const addtobasket=()=>{
    if(!find){
      props.dispatch({type:"ADDTOBASKET",value:props.item})
    }
    else{
      props.dispatch({type:"REMOVEFROMBASKET",value:props.item})
    }
  }
  const addtofavs=()=>{
    if(!find2){
      props.dispatch({type:"ADDTOFAVS",value:props.item})
    }
    else{
      props.dispatch({type:"REMOVEFROMFAVS",value:props.item})
    }
  }
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
  return (
    <div className='eblist'>
        <div className="ebimg">
        <NavLink to={`/details3/${props.item.id}`}><img src={props.item.image} /></NavLink>
      </div>
      <div className="ebrsk">
        <div className="stars">
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={20}
            value={props.item.star}
            color2={"#ffd700"}
            edit={false}
          />
        </div>
        <div className="besss">
        <div className="ebauthor">{props.item.name}</div>
        <div><i  onClick={addtobasket} className={`fas fa-shopping-cart ${!find?"rre":"rrg"}`}></i></div>
        <div onClick={addtofavs}  className='dwi'>
              <img
                className={`animatd ${!find2?"":"bat"}`}
                src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png"
              />
            </div>
        </div>
        <div className="auname">{props.item.author}</div>
        <div className="elek">Puzzle</div>
        <div>{Number(props.item.dicscount)?`$ ${props.item.dicscount}`:`$ ${props.item.price}`}</div>
        <div className="ebabout1">{props.item.about1}</div>
      </div>
      
    </div>
  )
}

let t=(s)=>s;
export default connect(t)(Overall3);