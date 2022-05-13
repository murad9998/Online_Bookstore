import React,{useState} from 'react';
import { connect } from 'react-redux';
import Myquote from '../components/Myquote';

function Quotes(props) {

    const [myq,setMyq]=useState("Kitablar sivilizasiyanın nümunəsidir. Kitabsız ədəbiyyat, tarix itər. Həyati incəliklər olan lirika, psixoloji və elmi biliklər mənasız olar.");
    const [myname,setMyname]=useState("Henri Devid Toro");

    const getQuote=(e)=>{
        setMyq("");
        setMyname("");
        let dd=e.currentTarget.getAttribute('myid');
        let find=props.sitat.find((ss)=>ss.name==dd);
        console.log(find);
        setMyq(find.sitatm);
        setMyname(find.name)
    }
  return <div className='quote'>
      <div className='sitat'>
          <div className='qs'><h3>' {myq}'</h3></div>
          <div className='qname'><h2>{myname}</h2></div>
      </div>
      <div className='qimg'>
          {props.sitat.map((a)=><div onMouseOver={(e) =>getQuote(e)} myid={a.name} key={a.id}><Myquote  a={a} /></div>)}
      </div>
      
  </div>;
}

const t=(s)=>s;
export default connect(t)(Quotes);
