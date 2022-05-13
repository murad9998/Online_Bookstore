import React from "react";
import { connect } from "react-redux";
import Menu from "../partpart/Menu";
import { NavLink } from "react-router-dom";
import Overall from "../components/Overall";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Mainbest from "../parts/Mainbest";
import Recommend from "../parts/Recommend";
import Footer from "../parts/Footer";
import Onlydes from "../parts/Onlydes";
import News from "../parts/News";

function Textbook(props) {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    cssEase: "linear",
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
  };
  return (
    <div className="textgy">
      <Menu />
      <Slider {...settings}>
        <div className="besdisen">
          <div>
            <h1>Kitablara toxunmaqla onları hiss edin</h1>
          </div>
        </div>
        <div className="besdisen2">
          <div>
            <h1>
              Sərfəli qiymətlərlə ənənəvi formatda olan kitabları əldə etmək
              fürsəti
            </h1>
          </div>
        </div>
      </Slider>
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
              <NavLink to="/price">Qiymətlər</NavLink>
            </li>
            <li>
              <NavLink to="/return">Geri qaytarılma</NavLink>
            </li>
          </ul>
          <ul className="katul3">
            <li>
              <NavLink to="/shelp">Self-Help</NavLink>
            </li>
            <li>
              <NavLink to="/biog">Bioqrafiya</NavLink>
            </li>
            <li><NavLink to='/kateqoriya'>Elektron kitablar</NavLink></li>
          </ul>
          <div className="ebadd">
            <div className="addes">
              <div className="addesimg">
                <img className="animatd"  src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png" />
              </div>
              <div className="addesh3">
                <h3>Fikirləriniz</h3>
              </div>
            </div>
            <div className="addes">
              <div className="addesimg">
                <img className="animatd"  src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png" />
              </div>
              <div className="addesh3">
                <h3>Qalereya</h3>
              </div>
            </div>
            <div className="addes">
              <div className="addesimg">
                <img  className="animatd" src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png" />
              </div>
              <div className="addesh3">
                <h3>Sitatlar</h3>
              </div>
            </div>
            <div className="addes">
              <div className="addesimg">
                <img className="animatd"  src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png" />
              </div>
              <div className="addesh3">
                <h3>Audio</h3>
              </div>
            </div>
            <div className="addes">
              <div className="addesimg">
                <img className="animatd" src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png" />
              </div>
              <div className="addesh3">
                <h3>Linklər</h3>
              </div>
            </div>
          </div>
        </div> */}
        <div className="ebook">
          {props.books
            .filter((b) => b.id >= 1 && b.id <= 10)
            .map((a) => (
              <Overall key={a.id} item={a} />
            ))}
        </div>
      </div>
      <div className="leaf">
        <div className="leaf1">
          <div className="leafline">
            
              <div className="leaf1h1">
                <h1>Bədii</h1>
              </div>
              <div className="leaf1h3">
               <h3> Bədii kitablar sizə mütaliədən asılılığı göstərir.Savadlı uşaq
                böyütməyin zəmanətli yolu onlara oxumağın xoş əyləncə olduğunu
                göstərməkdir.</h3>
              </div>
           
            <div className="leafbtn">
              <NavLink to="/fiction">
                <h2>Kitablara bax</h2>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="leaf1">
          <div className="leafline">
           
              <div className="leaf1h1">
                <h1>Bioqrafiya</h1>
              </div>
              <div className="leaf1h3">
                <h3>
                  Bioqrafiya, məşhur birinin (siyasətçi, rejissor, yazıçı və s.)
                  yaşamı ilə bağlı yazılmış əsərlərə verilən addır.
                  Avtobioqrafiya isə məşhur birinin öz həyatını qələmə alması
                  deməkdir.
                </h3>
              </div>
            
            <div className="leafbtn">
              <NavLink to="/biog">
                <h2>Kitablara bax</h2>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="leaf1">
          <div className="leafline">
            
              <div className="leaf1h1">
                <h1>Self-help</h1>
              </div>
              <div className="leaf1h3">
                <h3>Şəxsi inkişaf, kapitalist müasir dünya iqtisadiyyatlarının inkişaf etdiyi cəmiyyətlərdə ortaya çıxan bütün mədəni hərəkatı və onun genişlənmə məhsullarını əhatə edən, fərdlərin öz iqtisadi, sosial və ya psixoloji problemlərinə öz həll yollarını tapmaq imkanı verən bir ifadədir.</h3>
              </div>
            
            <div className="leafbtn">
              <NavLink to="/shelp">
                <h2>Kitablara bax</h2>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      
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
      
      <Onlydes/>
      <Footer/>
    </div>
  );
}

let t = (s) => s;
export default connect(t)(Textbook);
