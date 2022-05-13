import React from 'react';
import {useParams} from "react-router-dom";
import { connect } from "react-redux";
import Menu from "../partpart/Menu";
import Mainbest from '../parts/Mainbest';
import Quotes from "../parts/Quotes";
import Mainaudio from "../parts/Mainaudio";
import Onlydes from "../parts/Onlydes";
import Footer from "../parts/Footer";

function Facts(props) {
  let {id}=useParams();
  let item=props.news.find((a)=>a.id==id);
  return <div className='facdes'>
     <Menu/>
     <div className='funimg'><img src="https://tezzbuzz.com/static/c1e/client/90354/migrated_original/abd5aec4d673141e0b26f5655084cfc8.jpg" /></div>
     <div className='facname'><h1>{item.title}</h1></div>
     <div className='fcline'></div>
     <div className='facmain'>
       <div className='imgii'><img src={item.image} /></div>
       <div className='flxtxt'>
         <div className='ffxx1'><h3>{`${item.about} ${item.about1}`}</h3></div>
         <div className='ffxx2'><h3>{`${item.about2}`}</h3></div>
       </div>
     </div>
     <Mainbest/>
     <Quotes/>
     <Mainaudio/>
     <Onlydes/>
     <Footer/>
  </div>;
}

let t=(s)=>s;
export default connect(t)(Facts);
