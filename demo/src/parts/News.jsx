import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Myfact from '../components/Myfact';
import { connect } from 'react-redux'; 
function News(props) {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        autoplay:true,
        cssEase:"linear",
        slidesToScroll: 1,
      };
  return <div className='news'>
      <div className='newstitle'><h1>Maraqlı Məlumatlar</h1></div>
      <div className='newsline'></div>
      <div className='newsmain'>
          <div className='newsmean'>
          <Slider {...settings}>
            {props.news.filter((a)=>a.id>=45 && a.id<=50).map((b)=><Myfact key={b.id} item={b}/>)}
          </Slider>
          </div>
      </div>
  </div>;
}

let t=(s)=>s;
export default connect(t)(News);
