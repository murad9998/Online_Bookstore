import React from 'react';
import { connect } from "react-redux";
import Menu from "../partpart/Menu";
import { NavLink } from "react-router-dom";
import Overall from "../components/Overall";
import Harry from "../parts/Harry";
import Mainbest from "../parts/Mainbest";
import Author from "../parts/Author";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Mypromo from '../components/Mypromo';
import Onlydes from "../parts/Onlydes";
import Footer from "../parts/Footer";

function Bestseller(props) {
  var settings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 1000,
    autoplay:true,
    cssEase:"linear",
    slidesToShow: 5,
    slidesToScroll: 3,
  };
  return <div className='gybest'>
      <Menu/>
      {/* <div className='bestblack'>
        <div><img src="https://www.psdstamps.com/wp-content/uploads/2020/04/grunge-best-seller-label-png.png" /></div>
      </div> */}
      <div className='diyangrx'>
      <div className="kateqrisk">
        {/* <div className="katli">
          <ul className="katul">
            <li>
              <NavLink to="/kateqoriya1">Audio kitablar</NavLink>
            </li>
            <li>
              <NavLink to="/kateqoriya2">Xüsusi Endirimlər</NavLink>
            </li>
            <li>
              <NavLink to="textbook">Ənənəvi kitablar</NavLink>
            </li>
            <li>
              <NavLink to="/bestseller">Ən çox satılanlar</NavLink>
            </li>
            <li>
              <NavLink to="/manga">Manga</NavLink>
            </li>
            <li>
              <NavLink to="/shelp">Self-Help</NavLink>
            </li>
            <li>
              <NavLink to="/biog">Biografiya</NavLink>
            </li>
            <li><NavLink to='/kateqoriya'>Elektron kitablar</NavLink></li>
            <li>
              <NavLink to="/fiction">Bədii kitablar</NavLink>
            </li>
            <li>
              <NavLink to="/nonfic">Qeyri-bədii kitablar</NavLink>
            </li>
          </ul>
          <ul className="katul2">
            <li>
              <NavLink to="/shipping">Çatdırılma</NavLink>
            </li>
            <li>
              <NavLink to="/security">Təhlükəsizlik</NavLink>
            </li>
            <li>
              <NavLink to='/price'>Qiymətlər</NavLink>
            </li>
            <li>
              <NavLink to='/return'>Geri qaytarılma</NavLink>
            </li>
          </ul>
          <ul className="katul3">
            <li><NavLink to='/shelp'>Self-Help</NavLink></li>
            <li><NavLink to='/biog'>Bioqrafiya</NavLink></li>
            <li><NavLink to='/kateqoriya'>Elektron kitablar</NavLink></li>
          </ul>
          <div className="ebadd">
            <div className="addes">
              <div className="addesimg"><img className="animatd" src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png" /></div>
              <div className="addesh3"><h3>Fikirləriniz</h3></div>
            </div>
            <div className="addes">
              <div className="addesimg"><img className="animatd" src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png" /></div>
              <div className="addesh3"><h3>Qalereya</h3></div>
            </div>
            <div className="addes">
              <div className="addesimg"><img className="animatd" src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png" /></div>
              <div className="addesh3"><h3>Sitatlar</h3></div>
            </div>
            <div className="addes">
              <div className="addesimg"><img className="animatd" src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png" /></div>
              <div className="addesh3"><h3>Audio</h3></div>
            </div>
            <div className="addes">
              <div className="addesimg"><img className="animatd" src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png" /></div>
              <div className="addesh3"><h3>Linklər</h3></div>
            </div>
          </div>
        </div> */}
        <div className="ebook">
          {props.books.filter((b)=>b.id>=14 && b.id<=26).map((a) => (
            <Overall key={a.id} item={a} />
          ))}
        </div>
      </div>
      </div>
      <Harry/>
      <Mainbest/>
      <Author/>
      <div className='promo'>
        <div className='propmetit'><h1>Promo puzzle'lar</h1></div>
        <div className='promoslider'>
        <Slider {...settings}>
          {props.promo.map((a)=><Mypromo key={a.id} item={a}/>)}
        </Slider>
        </div>
      </div>
      <Onlydes/>
      <Footer/>
  </div>;
}

let t=(s)=>s;
export default connect(t)(Bestseller);
