import React from 'react';
import Menu from "../partpart/Menu";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Mainbest from "../parts/Mainbest";
import Book from '../components/Book';
import Mypromo from '../components/Mypromo';
import Onlydes from "../parts/Onlydes";
import Footer from "../parts/Footer";
import { connect } from 'react-redux';
function Price(props) {
  var sttings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 1000,
    autoplay:true,
    cssEase:"linear",
    slidesToShow: 5,
    slidesToScroll: 3,
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
  };
  var setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay:true,
    speed:500,
    cssEase: "linear",
    arrows: true,
    slidesToScroll: 1,
    
  };
  return <div className='pricemine'>
      <div className='pricedes'>
      <Menu/>
      {/* <Slider {...settings}>
        <div className='priceimg'><img src="https://www.sheridancollege.ca/-/media/images/experience/trafalgar/student-life/trafalgar_library_shelves.jpg?w=1024&hash=4D562F553D56473795F9928DC86DAF9A" /></div>
        <div className='priceimg'><img src="https://upload.wikimedia.org/wikipedia/commons/7/72/NYC_-_New_York_City_Library_-_1723.jpg" /></div>
        <div className='priceimg'><img src="https://static01.nyt.com/images/2020/05/12/books/review/12BOOKSTORES1/merlin_172364913_443839dc-690e-4e72-b494-025781d6a2f3-mobileMasterAt3x.jpg" /></div>
        <div className='priceimg'><img src="https://media.wired.com/photos/5ea306a39d94950008221206/master/pass/Cul-bookstore-1220322748.jpg" /></div>
        <div className='priceimg'><img src="https://www.icsi-eu.org/sites/default/files/2020-07/reunion.jpg" /></div>
      </Slider> */}
      </div>
      <div className='pricedes'></div>
      <div className='pricemid'>
        <div className='wwidth'>
        <div className='prcmidh2'><h3>80% məhsuldan 30% dək endirimlərdən yararlanmaq şansı</h3></div>
        <div className='prcbig'><h2>Haryy Potter,Manga və digər dünyaca məşhur əsərləri endirimlə əldə edə bilərsiniz. Kreditlə almaq istəyənlər üçün ilk dəfə olaraq xüsusi qrup kitablar üçün bu şansdan yararlanın.</h2></div>
        <div className='prcmidh2'><h3>Kredit haqda təhlükəsizlik bölməsindən ətraflı məlumat ala bilərsiniz</h3></div>
        </div>
      </div>
      <div className='trck'>
      <div className='bestt'>
          <div className='besth'><h2>Məhsulların üzərinə klikliyərək endirimlər haqda məlumat ala bilərsiniz</h2></div>
          <div className='bestline'></div>
      </div>
      <div className='mainsld'>
    <Slider {...setting}>
      {props.books.filter((b)=>(b.id>1 && b.id<4) ||(b.id>17 && b.id<24)).map((a)=> <Book key={a.id} item={a}/>)}
    </Slider>
    </div>
  </div>;
  <Mainbest/>
  <div className='promo'>
        <div className='propmetit'><h1>Promo puzzle'lar</h1></div>
        <div className='promoslider'>
        <Slider {...sttings}>
          {props.promo.map((a)=><Mypromo key={a.id} item={a}/>)}
        </Slider>
        </div>
      </div>
      <Onlydes/>
      <Footer/>
  </div>;
}

let t=(s)=>s;
export default connect(t)(Price);
