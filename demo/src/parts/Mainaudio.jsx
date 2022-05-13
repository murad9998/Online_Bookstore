import React from 'react';
import Book from '../components/Book';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { connect } from 'react-redux';

function Mainaudio(props) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return <div className='myaudio'>
    <div className='fori'>
    <div className='dist'><h1>Audio kitablar</h1></div>
    <div><i className="fas fa-headphones-alt"></i></div>
    </div>
    {/* <div className='wline'></div> */}
      <div className='audwr'>
        <div className='audym'>
        <Slider {...settings}>
      {props.books.filter((b)=>(b.id>13 && b.id<21)).map((a)=> <Book key={a.id} item={a}/>)}
        </Slider>
        </div>
          <div className='audyz'>
              <div className='auw1'><img src="https://demo.joomlabuff.com/bookstore/images/products/books/book23.png" /></div>
              <div className='auw2'><img src="https://www.onlygfx.com/wp-content/uploads/2020/07/dust-overlay-5.png"  /></div>
              <div className='auw3'><img src="https://demo.joomlabuff.com/bookstore/images/products/books/book19.png"  /></div>
          </div>
      </div>
  </div>;
}

let t=(s)=>s;
export default connect(t)(Mainaudio);
