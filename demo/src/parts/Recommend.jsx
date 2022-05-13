import React, {useState} from 'react';
import { connect } from 'react-redux';
import Mycomment from '../components/Mycomment';
import {NavLink} from 'react-router-dom';

function Recommend(props) {
    const [top,setTop]=useState("linetop");
    const [rew,setRew]=useState("Harri Potter və Od Qədəhi seriyanın dördüncü kitabıdır. Harri Hoqvartsa qayıdır ki, onun beynində Voldemortla bağlı kabuslar görünür. Bu il Hogwartsda maraqlı bir hadisə var, amma bu əyləncədən daha təhlükəli olacaqmı?");
    const [pic,setPic]=useState("https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780807282595_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D");
    const [back,setBack]=useState("backbtn");
    const [back1,setBack1]=useState("");
    const [back2,setBack2]=useState("");
    const [ii,Setii]=useState(24);
    const mycolor=(e)=>{
        setRew("");
        setPic("");
        let dd=e.currentTarget.getAttribute('rew');
        Setii(Number(dd));
        if (Number(dd)===24) {
            setTop("");
            setBack("backbtn");
            setBack1("");
            setBack2("");
            setTop("linetop")
        }
        else if(Number(dd)===32){
            setTop("");
            setBack("");
            setBack1("backbtn");
            setBack2("");
            setTop("linemove");
        }
        else{
            setTop("");
            setBack("");
            setBack1("");
            setBack2("backbtn");
            setTop("linemove1");
        }
        console.log(dd);
        let find=props.books.find((a)=>a.id==dd);
        console.log(find);
        setRew(find.about1);
        setPic(find.image);
    }
  return <div className='recommend'>
      <h1>Tövsiyə olunanlar</h1>
      <div className='myrec'>
          <div className='rec1'>
              <div className='recline'>
                  <div className={top}></div>
              </div>
              <div className='buttonsrec'>
                  <div className='btnrec'><button className={`mybtnd ${back}`} rew={24} onClick={mycolor}>Həftənin tövsiyə olunan kitabı-1</button></div>
                  <div className='btnrec'><button className={`mybtnd ${back1}`} rew={32} onClick={mycolor}>Həftənin tövsiyə olunan kitabı-2</button></div>
                  <div className='btnrec'><button className={`mybtnd ${back2}`} rew={33} onClick={mycolor}>Həftənin tövsiyə olunan kitabı-3</button></div>
              </div>
          </div>
          <div className='rec2'>
              <div className='recw'><h2>{rew}</h2></div>
              <div className='recpic'>
               <NavLink to={`/details/${ii}`}> <img src={pic} /></NavLink>
              </div>
          </div>
      </div>
  </div>;
}

let t=(s)=>s;
export default connect(t)(Recommend);
