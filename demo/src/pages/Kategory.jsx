import React from "react";
import { connect } from "react-redux";
import Book from "../components/Book";
import Menu from "../partpart/Menu";
import { NavLink } from "react-router-dom";
import Overall from "../components/Overall";
import Overall2 from "../components/Overall2";
import Recommend from "../parts/Recommend";
import Gift from "../parts/Gift";
import News from "../parts/News";
import Onlydes from "../parts/Onlydes";
import Footer from "../parts/Footer";

function Kategory(props) {
  return (
    <div className="kategor">
      <Menu />
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
          {props.ebook.map((a) => (
            <Overall2 key={a.id} item={a} />
          ))}
        </div>
      </div>
      <div className="addbezx">
        <div className="bezxh1"><h1>B&amp;N Üzvlüyü</h1></div>
      <div className="katadd">
        <div><h3>Barnes &amp; Noble Üzvü olun və Eksklüziv Üzv İmtiyazlarından həzz alın.</h3></div>
      </div>
      </div>
      <div className="drs">
        <div className="drisk">
          <div className="driskimg"><img src="https://dispatch.barnesandnoble.com/content/dam/ccr/h/membership/ICON-COUPON.svg"/></div>
          <div className="drtitle"><h3>Eksklüziv Mağazadaxili və Onlayn Təkliflər</h3></div>
          <div className="drabout"><h4>Siz il ərzində onlayn və mağazalarda etibarlı olan yalnız Üzvlər üçün təkliflər alacaqsınız.</h4></div>
        </div>
        <div className="drisk">
          <div className="driskimg"><img src="https://dispatch.barnesandnoble.com/content/dam/ccr/h/membership/ICON-SHIPPING.svg"/></div>
          <div className="drtitle"><h3>Pulsuz çatdırılma</h3></div>
          <div className="drabout"><h4>Bütün sifarişlərdə pulsuz çatdırılma—minimum alış tələb olunmur</h4></div>
        </div>
        <div className="drisk">
          <div className="driskimg"><img src="https://dispatch.barnesandnoble.com/content/dam/ccr/h/membership/ICON-HARDCOVER.svg"/></div>
          <div className="drtitle"><h3>Mağazada cildli ən çox satılan kitablara 40% endirim</h3></div>
          <div className="drabout"><h4>Mağazadaxili xüsusi qiymətlər sizə bugünkü ən çox satılanları nəzərdən keçirməyə və ev kitabxananızı daha ucuz qiymətə qurmağa imkan verir!</h4></div>
        </div>
        <div className="drisk">
          <div className="driskimg"><img src="https://dispatch.barnesandnoble.com/content/dam/ccr/h/membership/ICON-PIGGY.svg"/></div>
          <div className="drtitle"><h3>Mağazada 10% endirim</h3></div>
          <div className="drabout"><h4>B&amp;N-də sevdiyiniz hər şey ən aşağı qiymətə 10% endirimlə zəng çalacaq, o cümlədən jurnallar və kafe əşyaları.</h4></div>
        </div>
        <div className="drisk">
          <div className="driskimg"><img src="https://dispatch.barnesandnoble.com/content/dam/ccr/h/membership/hand-key_icon.svg"/></div>
          <div className="drtitle"><h3>Erkən Giriş</h3></div>
          <div className="drabout"><h4>Xüsusi endirimli qiymətlərlə alış-veriş edin və hər kəsdən əvvəl tədbirlərə yazın!</h4></div>
        </div>
        <div className="drisk">
          <div className="driskimg"><img src="https://dispatch.barnesandnoble.com/content/dam/ccr/h/membership/birthday-icon.svg"/></div>
          <div className="drtitle"><h3>Xüsusi Ad Günü Təklifi</h3></div>
          <div className="drabout"><h4>Bizdən sizə kiçik bir şey üçün e-poçtunuzu yoxlayın.</h4></div>
        </div>
      </div>
      <Recommend/>
      <Gift/>
      <News/>
      <Onlydes/>
      <Footer/>
    </div>
  );
}

let t = (s) => s;
export default connect(t)(Kategory);
