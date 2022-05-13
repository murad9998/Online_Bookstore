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
  return <div className='trick'>
      
      <div className='mainsld'>
    <Slider {...settings}>
      {props.books.filter((b)=>b.id<9).map((a)=> <Book key={a.id} item={a}/>)}
    </Slider>
    </div>
  </div>;
}

let t=(s)=>s;
export default connect(t)(Best);
