import React from "react";
import Headers from "./headers.jpeg";
import { NavLink } from "react-router-dom";
import Types from "../parts/Types";
import Typesxs from "../parts/Typesxs";
import Best from "../parts/Best";
import Quotes from "../parts/Quotes";
import Mainbest from "../parts/Mainbest";
import Manga from "../parts/Manga";
import Author from "../parts/Author";
import Harry from "../parts/Harry";
import Mainaudio from "../parts/Mainaudio";
import Recommend from "../parts/Recommend";
import { connect } from "react-redux";
import Overall3 from "./Overall3";
import Gift from "../parts/Gift";
import News from "../parts/News";
import Onlydes from "../parts/Onlydes";
import Footer from "../parts/Footer";
function Header(props) {
  return (
    <div className="head">
      {/* <div className="kiki">
        <div className="biric">
          <div className="sozluk"><NavLink to='/basket'><h3>Səbət</h3></NavLink></div>
          <div className="fill"><img className="animatd" src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png" /></div>
          <div></div>
        </div>
        <div className="biric">
          <div className="sozluk"><NavLink to='/favor'><h3>Sevimlilər</h3></NavLink></div>
          <div className="fill"><img className="animatd" src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png" /></div>
          <div></div>
        </div>
        <div className="biric">
          <div className="sozluk"><NavLink to='/search'><h3>Axtarış et</h3></NavLink></div>
          <div className="fill"><img className="animatd" src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png" /></div>
          <div></div>
        </div>
        </div> */}
      <div className="header">
        <div className="head1">
          <div className="head11">
            <div className="img1">
              <div className="one">
                <img src="https://i.pinimg.com/originals/ba/bb/e0/babbe0787a3442fb14e79845ed482c90.jpg" />
              </div>
              <div className="two">
                <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sci-fi-fantasy-kindle-novel-cover-design-template-2ca3ea73938d43cf5f9f32e2f3cb05da_screen.jpg?ts=1636983194" />
              </div>
            </div>
            <div className="img2">
              <div className="one1">
                <img src="https://www.onlygfx.com/wp-content/uploads/2018/08/8-tree-drawing-1.png" />
              </div>
            </div>
          </div>
          <div className="head12">
            <div className="img11">
              <div className="one12">
                <img src="https://img.cppng.com/download/2020-06/21604-1-smartphone-transparent-background.png" />
              </div>
              <div className="two2">
                <img src="https://www.sprhouston.com/wp-content/uploads/2021/08/apple-7-1.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="head2">
          <div className="image1">
            <div className="image11">
              <img src="https://freepngimg.com/thumb/apple/80149-angle-airpods-tap-apple-free-png-hq-thumb.png" />
            </div>
            <div className="image12">
              <img src="https://snipstock.com/assets/cdn/png/d74046fe167f15761202d4508aa0435e.png" />
            </div>
          </div>
          <div className="image2">
            <img src="https://www.pngmart.com/files/4/Design-Transparent-PNG.png" />
          </div>
          <div className="write1">
            <p>Bu hələ ilk fəsildir</p>
          </div>
          <div className="write2">
            <NavLink to="/">
              <h1>Chapter</h1>
            </NavLink>
          </div>
          <div className="write3">
            <p>
              Kitablarla birliktə sıfırdan başlanğıc əldə etmək üçün əla
              fürsətdir. Bu hələ ilk fəsildir
            </p>
          </div>
          <div className="nav1">
            <NavLink to="/about">Haqqımızda Öyrən</NavLink>
          </div>
          <div className="image3">
            <img src="https://avatanplus.com/files/resources/original/5692b6538ddaf1522d18367d.png" />
          </div>
          <div className="add">
            <img src="https://i.pinimg.com/736x/38/37/1d/38371dfdbaf0406b634864a6c9d21713.jpg" />
          </div>
        </div>
        <div className="head3">
          <div className="image31">
            <img src="https://www.pngkit.com/png/full/825-8255093_designer-awesome-creative-director-portfolios.png" />
          </div>
          <div className="image32">
            <div className="frst">
              <img src="https://demo.joomlabuff.com/bookstore/images/products/books/book1.png" />
            </div>
            <div className="scnd">
              <img src="https://demo.joomlabuff.com/bookstore/images/products/books/book14.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="part2">
        <div className="part21">
          <div className="bir">
            <div className="mya">
              <NavLink to="/shipping">
                <i className="fab fa-telegram-plane"></i>
              </NavLink>
            </div>
            <div className="written">
              <h3>Pulsuz çatdırılma</h3>
              <p>30 km məsafəyədək ödənişsiz çatdırırıq</p>
            </div>
          </div>
          <div className="bir">
            <div className="mya">
              <NavLink to="/security">
                <i className="fas fa-money-check-alt"></i>
              </NavLink>
            </div>
            <div className="written">
              <h3>Kartla ödəniş</h3>
              <p>100% təhlükəsiz sistem</p>
            </div>
          </div>
          <div className="bir">
            <div className="mya">
              <NavLink to="price">
                <i className="fas fa-hand-holding-usd"></i>
              </NavLink>
            </div>
            <div className="written">
              <h3>Ən sərfəli qiymətlər</h3>
              <p>Endirim həftəsini qaçırma</p>
            </div>
          </div>
          <div className="bir">
            <div className="mya">
              <NavLink to="/return">
                <i className="fas fa-undo-alt"></i>
              </NavLink>
            </div>
            <div className="written">
              <h3>Geri qaytarma şansı</h3>
              <p>30 gün ərzində</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bigwrite">
        <div className="mcb">
          <div className="pw">
            <h5> Hər janra uyğun və 5 dildə əsərlər</h5>
          </div>
          <div className="h1w">
            <h1> Chapter seçimlərin sayını artırır</h1>
          </div>
          <div className="pbw">
            <p>
              Azərbaycan,İngilis,Rus,Alman və İspan dilində əsərlər müəllifin öz
              dilindən oxumağ imkanı verir.İşçilərimiz sizə axtardığınız kitabı
              tapmaqda hərtərəfli şəkildə yardımçı olacaqdır
            </p>
          </div>
        </div>
      </div>
      <Types />
      <Typesxs />
      <Best />
      <Quotes />
      <Mainbest />
      <Manga />
      <Author />
      <Harry />
      <Mainaudio />
      <Recommend />
      {/* <div className="puzpuz">
        <div className="jsa"><h1>Puzzle-lar</h1></div>
        {props.promo.map((a)=><Overall3 key={a.id} item={a}/>)}
        </div> */}
      <Gift />
      <News />
      <Onlydes />
      <Footer />
    </div>
  );
}

let t=(s)=>s;
export default connect(t)(Header);
