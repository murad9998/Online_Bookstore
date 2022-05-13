import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { connect } from 'react-redux';
import Book from '../components/Book'
function Best(props) {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
      };
  return <div className='trck'>
      <div className='bestt'>
          <div className='besth'><h2>Ən çox satılanlar</h2></div>
          <div className='bestline'></div>
      </div>
      <div className='mainsld'>
    <Slider {...settings}>
      {props.books.filter((b)=>(b.id>9 && b.id<14) ||(b.id>28 && b.id<33)).map((a)=> <Book key={a.id} item={a}/>)}
    </Slider>
    </div>
  </div>;
}

let t=(s)=>s;
export default connect(t)(Best);
