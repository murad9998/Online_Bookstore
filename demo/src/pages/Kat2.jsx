import React from 'react';
import { connect } from "react-redux";
import Menu from "../partpart/Menu";
import { NavLink } from "react-router-dom";
import Overall from "../components/Overall";
import Quotes from "../parts/Quotes";
import Mainbest from "../parts/Mainbest";
import Manga from "../parts/Manga";
import Onlydes from "../parts/Onlydes";
import Footer from "../parts/Footer";

function Kat2(props) {
  return (
    <div className='kategor3'>
      <Menu/>
      <div className='forindex'>
      <div className='xusendimg'><img src="https://static.insales-cdn.com/images/collections/1/6705/1792561/icon_discount.png" /></div>
      <div className='indexalt'>
      <div className='indextit'><h1>Xüsusi Endirimlər</h1></div>
      <div className='indexline'></div>
      <div className='indextext'><h4>Hər həftə seçilmiş kitablara gələn endirimlərdən elə indi yaralan.Kitabların üzərinə klikliyərək ilk qiymətlərin nə qədər olduğuna baxa bilərsiniz</h4></div>
      </div>
      </div>
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
          {props.books.filter((b)=>b.id>=21 && b.id<=33).map((a) => (
            <Overall key={a.id} item={a} />
          ))}
        </div>
      </div>
      <Mainbest/>
      <Quotes/>
      <div className='reasonbl'>
        <div className='reasontit'><h1>Rəqəmsal kitablardan istifadə etmək üçün 12 əla səbəb</h1></div>
      <div className='reasond'>
        <div className='reasonmain'>
          <div className='bixtix'>
          <div className='reason1main'><h3><span>1</span>Rahatlıq</h3></div>
          <div className='reason2main'><h4>İstənilən vaxt, istənilən yerdə, onlayn və ya oflayn dinləyin. Səsi birbaşa brauzerinizdə yayımlayın və ya əlaqə kəsildikdə yükləyin və oxuyun.</h4></div>
          </div>
          <div className='bixtix'>
          <div className='reason1main'><h3><span>2</span>Mobil</h3></div>
          <div className='reason2main'><h4>Mobil, planşet və ya masaüstünüzdə qulaq asın. Audio fayl formatları bütün cihazlarda dəstəklənir və səsləndirilir.</h4></div>
          </div>
          <div className='bixtix'>
          <div className='reason1main'><h3><span>3</span>Təhsil</h3></div>
          <div className='reason2main'><h4>Dinləyərək öyrənin və təcrübəli oxucu olun. Dil öyrənməyinizə kömək etmək üçün doğma danışanlara müraciət edin.</h4></div>
          </div>
          <div className='bixtix'>
          <div className='reason1main'><h3><span>4</span>İngilis dili öyrənmək</h3></div>
          <div className='reason2main'><h4>Tələffüzünüzü təkmilləşdirin, lüğətinizi genişləndirin və hədəf dilinizdə dinləmə bacarıqlarınızı yaxşılaşdırın</h4></div>
          </div>
          <div className='bixtix'>
          <div className='reason1main'><h3><span>5</span>Uyğunlaşa bilən</h3></div>
          <div className='reason2main'><h4>Mükəmməl dinləmə təcrübəsi yaratmaq üçün bəyəndiyiniz rəvayətçini tapın, oxutma sürətini dəyişdirin və səs səviyyəsini tənzimləyin.</h4></div>
          </div>
          <div className='bixtix'>
          <div className='reason1main'><h3><span>6</span>Paylaşma</h3></div>
          <div className='reason2main'><h4>İşlər həmişə birlikdə daha yaxşıdır. Sevimli rəqəmsal kitablarınızı paylaşın və dostlarınız və ailənizlə dinləyin.</h4></div>
          </div>
        </div>
        <div className='reasonmain'>
          <div className='bixtix'>
          <div className='reason1main'><h3><span>7</span>Portativ</h3></div>
          <div className='reason2main'><h4>Harada olursunuzsa olun, bütün kitabxananızı özünüzlə aparın və ona mobil, planşet və ya e-oxu cihazınızda daxil olun. Səyahət üçün idealdır.</h4></div>
          </div>
          <div className='bixtix'>
          <div className='reason1main'><h3><span>8</span>Müxtəliflik</h3></div>
          <div className='reason2main'><h4>Bütün janrları əhatə edən bir sıra onlayn kitabxanalardan minlərlə kitab və ya podkastlara onlayn daxil olun.</h4></div>
          </div>
          <div className='bixtix'>
          <div className='reason1main'><h3><span>9</span>Elektron oxucular</h3></div>
          <div className='reason2main'><h4>Xüsusiyyətlərlə dolu elektron oxuculara wifi, arxa işıqlandırma və çoxdilli dəstək üçün lüğətlər daxildir. Şriftin ölçüsünü dəyişdirin, audio əlavə edin və hətta rəqəmsal qeydlər edin.</h4></div>
          </div>
          <div className='bixtix'>
          <div className='reason1main'><h3><span>10</span>Dərslər</h3></div>
          <div className='reason2main'><h4>Söz ehtiyatınızı genişləndirin və qrammatikanızı təkmilləşdirin. Anlayışınızı yoxlamaq üçün qiymətli elektron kitablardan istifadə edin və ya eyni zamanda audio kitabı oxuyub dinləyin.</h4></div>
          </div>
          <div className='bixtix'>
          <div className='reason1main'><h3><span>11</span>Ətraf mühit</h3></div>
          <div className='reason2main'><h4>Rəqəmsal kitablar yaşıl rəngdədir. Nə kağız, nə nəqliyyat xərcləri, nə də tullantılar.</h4></div>
          </div>
          <div className='bixtix'>
          <div className='reason1main'><h3><span>12</span>Klassiklər pulsuzdur!</h3></div>
          <div className='reason2main'><h4>Minlərlə klassik kitab ictimai sahədə pulsuzdur. Chapter pulsuz podkastlarla birlikdə bu kitablara asanlıqla daxil olmaq üçün platforma təqdim edir.</h4></div>
          </div>
        </div>
      </div>
      </div>
      <Manga/>
      <Onlydes/>
      <Footer/>
    </div>
  )
}

let t=(s)=>s;
export default connect(t)(Kat2)