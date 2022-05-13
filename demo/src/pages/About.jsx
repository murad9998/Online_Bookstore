import React from 'react';
import Menu from '../partpart/Menu';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { connect } from 'react-redux';
import Mypromo from '../components/Mypromo';
import Onlydes from "../parts/Onlydes";
import Mainbest from "../parts/Mainbest";
import Overall3 from '../components/Overall3';
import Recommend from "../parts/Recommend";
import Footer from "../parts/Footer";

function About(props) {
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
  return <div className='myabout'>
      <Menu/>
      <div className='abouthead'>
        <div className='abouth1'>
          <div className='abtimg'><img src="https://www.seekpng.com/png/full/139-1392795_img-twitter-icon-grey-circle.png" /></div>
          <div className='abth2'><h2>Ən çox satılanlar</h2></div>
          <div className='abth4'><h4>Müxtəlif ölkələrdə ən çox satılan və bəyənilən kitabları Chapter-dən əldə edə bilərsiniz</h4></div>
        </div>
        <div className='abouth1'>
          <div className='abtimg'><img src="https://www.onwebchat.com/chatWidgetImages/uploaded/4809/webchat.png" /></div>
          <div className='abth2'><h2>Sizin seçimləriniz</h2></div>
          <div className='abth4'><h4>Hər həftə alıcılar tərəfindən ən çox alınan kitabları saytımız vasitəsilə tapa bilərsiniz</h4></div>
        </div>
        <div className='abouth1'>
          <div className='abtimg'><img src="https://ccinfo.unc.edu/wp-content/uploads/sites/219/2018/01/open-book.png" /></div>
          <div className='abth2'><h2>Bioqrafiyalar</h2></div>
          <div className='abth4'><h4>Dünyanın hər tərəfində tanınan məşhur insanlarının və siyasətçilərin həyat hekayələrini öyrənmək üçün əla fürsətdir</h4></div>
        </div>
        <div className='abouth1'>
          <div className='abtimg'><img src="https://play-lh.googleusercontent.com/0zfb0kY5A1VDXKcZdT_DNKdymmRq6s9IEr3_k210KkgvGEJ_7Bn1I9RJoVtmyRztQik" /></div>
          <div className='abth2'><h2>Manga</h2></div>
          <div className='abth4'><h4>Asiya mədəniyyəti ilə yaxından maraqlananlar Manga' ları əldə etməklə əfsanəvi obrazları daha yaxından tanıya bilərlər</h4></div>
        </div>
      </div>
      <div className='aboutmid'>
        <div className='midw'>
          <div className='midh3'><h3>Fəaliyyət dövrü</h3></div>
          <div className='midh2'><h2>2017 ci ildən bəri sizlərlə birlikdəyik</h2></div>
          <div className='midh3h3'><h3>Chapter 2017 ci ildən fəaliyyətdədir. 5 il ərzində hər gün Bakı və Sumqayıt ofislərimizi ziyarət edən müştərilərin sayı 2000 ni keçmişdir. Bütün kitabları 5 dildə əldə etmək şansı ölkənin müxtəlif regionlarından sifarişlərin sayını artırır</h3> </div>
          <div className='wimgmid'><img src="https://clipart.info/images/ccovers/1559831118smoke-png-smoking-transparent-background-3.png" /></div>
        </div>
        <div className='midimg'>
          <div className='midimg1'><img src="https://www.siamdevelopment.com/wp-content/uploads/2020/07/building.png" /></div>
          <div className='midimg2'><img src="https://www.onlygfx.com/wp-content/uploads/2020/07/dust-overlay-5.png"  /></div>
          {/* <div className='midimg3'><img src="" /></div> */}
        </div>
      </div>
      <div className='abotmid'>
        <div className='midimg'>
          <div className='midimg1'><img src="https://abottmax.com/wp-content/uploads/2020/05/scrapss.png" /></div>
          <div className='midimg2'><img src="https://thypix.com/wp-content/uploads/2022/03/blood-png-transparent-background-m.png"  /></div>
          {/* <div className='midimg3'><img src="" /></div> */}
        </div>
        <div className='midw'>
          <div className='midh3'><h3>Bizi necə tapmaq olar?</h3></div>
          <div className='midh2'><h2>Bakı və Sumqayıt ofislərimizi tapmaq artıq daha asandır</h2></div>
          <div className='midh3h3'><h3>Google Map vasitəsilə "Chapter kitab evi" axtarışı etsəniz hər iki ofisimizin harada yerləşdiyini rahatlıqla tapa bilərsiniz.Bundan əlavə yuxarıda göstərilən əlaqə nömrələri ilə əlaqə saxlayıb istənilən məlumatı almaq mümkündür</h3> </div>
          <div className='wimgmid'><img src="https://www.pngmart.com/files/3/Smoke-PNG-HD.png" /></div>
        </div>
      </div>
      <div className='promo'>
        <div className='propmetit'><h1>Promo puzzle'lar</h1></div>
        <div className='promoslider'>
        <Slider {...settings}>
          {props.promo.map((a)=><Mypromo key={a.id} item={a}/>)}
        </Slider>
        </div>
      </div>
      <Onlydes/>
      <Mainbest/>
      <Recommend/>
      <Footer/>
  </div>;
}

let t=(s)=>s;
export default connect(t)(About);
