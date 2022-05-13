import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { connect } from 'react-redux';
import Harrybook from '../components/Harrybook'

function Harry(props) {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      };
  return (
    <div className="harry">
      <div className="superhr">
        <div className="harryimg">
          <img src="https://www.harrypotterhogwartsmystery.com/wp-content/uploads/2018/11/1200x525_PK-lockup_web.jpg" />
          <div className="glass"><img src="https://wallpaperaccess.com/full/5429639.jpg"  /></div>
          <div className="asa"><img src="https://i0.wp.com/bunlardanistiyorum.com/wp-content/uploads/2020/09/Noble-Collection-Harry-Potter-He_78390_3.jpg?fit=500%2C750&ssl=1" /></div>
        </div>
        <div className="harrybook">
        <Slider {...settings}>
      {props.books.filter((b)=>(b.id>20 && b.id<28) || b.id==22).map((a)=> <Harrybook key={a.id} item={a}/>)}
    </Slider>
        </div>
      </div>
    </div>
  );
}

let t=(s)=>s;
export default connect(t)(Harry);
