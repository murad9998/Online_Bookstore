import React,{useState} from 'react';
import Menu from '../partpart/Menu';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { connect } from 'react-redux';
import Book from '../components/Book';
import Mainaudio from "../parts/Mainaudio";
import Footer from '../parts/Footer'
import Onlydes from '../parts/Onlydes'

function Shipping(props) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const [num,Setnum]=useState("");
  const [son,Setson]=useState(0);
  const [classs,Setclasss]=useState("sonh2");
  const change=(e)=>{
    Setnum("");
    Setnum(e.target.value);
  }
  const hesab=()=>{
    Setclasss("sonnn")
    if(Number(num)){
      if(Number(num)<30){
        Setson(0);
      }
      else{
        Setson((num-30)*0.1);
      }
    }
    else{
      Setson("Ədəd daxil edin !")
    }
  }
  return <div className='shipping'>
      <Menu/>
      <div className='shipimgs'>
        <div className='shipimg1'><img src="https://www.stamps.com/assets/images/usps/international-shipping/ship-around-the-world@2x.png" /></div>
      <div className='shipimg'><img src="https://shoppingu.today/wp-content/uploads/2018/01/shipping.jpg" /></div>
      <div className='shipimg1'><img src="https://s3-eu-central-1.amazonaws.com/eurosender-blog/wp-content/uploads/2021/10/07130438/Worldwide-courier-I.png" /></div>
      </div>
      <div className='shpwrd'>
      <div className='shipword'><h2>Chapter Azərbaycan qanunvericiyili ilə qadağan olunmamış yüklərin ölkə daxilində təhlükəsiz və sürətli çatdırılmasını təmin edir.Müştərilərinə xarici ölkələrdən olan göndərişlərinin ölkənin istənilən bölgəsində ən qısa zamanda çatdırılmasının 2024 cü ilə qədər reallaşdırılması planlaşdırılır.</h2></div>
      <div className='shipword2'><h2> Chapter müştərilərinə eyni zamanda xüsusi kuryer xidməti də təklif edir.  Ölkədaxili olaraq təklif edilən bu xidmətdən istifadə edənlərə xüsusi təhkim olunmuş peşəkar kuryerlər vasitəsilə bağlamaların birbaşa, tam təhlükəsiz və qısa zamanda çatdırılmasına zəmanət verilir.</h2></div>
      <div className='shipword'><h2> Şirkətimiz, həmçinin, kütləvi poçt göndərişlərinin qısa müddətdə ölkənin bütün bölgələrinə çatdırılmasını təmin edir. Kütləvi göndərişləri olan korparativ müştərilər üçün xüsusi tariflər təqdim olunur.</h2></div>
      </div>
      <div className='vrr'></div>
      <div className='chance'>
        <div className='chanceh1'><h1>'30 km' şansından indi yararlan</h1></div>
        <div className='chancep'><h3>Google Maps dən istifadə edərək ofisimizdən ünvana qədər məsafəni tapıb daxil edin. 30 km dən sonrakı hər 1 km üçün 0.1 manat ödəniş edilməlidir</h3></div>
        <div className='chanceinp'>
            <div><input onChange={change} type="text" placeholder='Məsafə "km ilə"' /></div>
            <div className='chancebtn'><button onClick={hesab}><h3>Hesabla</h3></button></div>
            <div className={classs}><h2>{Number(son)? `${son.toFixed(2)} manat` : son}</h2></div>
        </div>
      </div>
      <div className='trck'>
      <div className='bestt'>
          <div className='besth'><h2>Tövsiyə olunan kitablar</h2></div>
          <div className='bestline'></div>
      </div>
      <div className='mainsld'>
    <Slider {...settings}>
      {props.books.filter((b)=>(b.id>6 && b.id<14) ||(b.id>24 && b.id<30)).map((a)=> <Book key={a.id} item={a}/>)}
    </Slider>
    </div>
  </div>;
  <Mainaudio />
  <Onlydes/>
  <Footer/>
  </div>;
}

let t=(s)=>s;
export default connect(t)(Shipping);
