import React from "react";
import Menu from "../partpart/Menu";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Overall from "../components/Overall";
import Overall2 from '../components/Overall2';
import Overall3 from '../components/Overall3';
import Harry from "../parts/Harry";
import Manga from "../parts/Manga";
import Mainbest from "../parts/Mainbest";
import Onlydes from "../parts/Onlydes";
import Footer from "../parts/Footer";

function Nonfict(props) {
  return (
    <div className="nonficb">
      <Menu />
      {/* <div className="zorimgt"><img src="https://p18cdn4static.sharpschool.com/UserFiles/Servers/Server_231941/Image/7th%20Grade%20Team/3rd%20Grade%20Team/WORDLE_FOR_LANGUAGE_ARTS.png"/></div> */}
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
          {props.books.filter((t)=>t.id==18 || t.id==6 || t.id==19 || t.id==28 || t.id==29 || t.id==30 || t.id==74 || t.id==75 || t.id==76).map((a) => (
            <Overall key={a.id} item={a} />
          ))}
           {props.ebook.filter((t)=>t.id==64).map((a) => (
            <Overall2 key={a.id} item={a} />
          ))}
        </div>
      </div>
      <Mainbest/>
      <div className="mirtdes">
        <div className="mirtdestit"><h1>Təriflər</h1></div>
        <div className="mirtdesmain">
          <div className="mirtbesdi">
            <div className="dahabes"><h2>Audio kitablar</h2></div>
            <div className="mirtline"></div>
            <div className="mirttext"><h4>Audio kitab ucadan oxunan mətnin sözbəsöz və ya qısaldılmış qeydidir. Onlar ənənəvi kitablara əlverişli alternativdir və görmə qabiliyyəti zəif olanlar üçün mühüm mediadır. Səsli kitablar 1930-cu illərdən bəri əlil insanlar üçün ilk tam metrajlı yazıların ortaya çıxdığı vaxtdan bəri uzun bir yol keçmişdir. Onlar 1950-ci illərdə geniş ictimaiyyətə təqdim edildi, lakin 1970-ci illərə qədər kaset lentlərinin buraxılması ilə populyarlıq, xüsusən də avtomobil sürərkən sərnişinlər arasında yüksəlməyə başladı. Bu gün biz audio kitablara qulaq asmaq üçün artıq həcmli qeyd formatlarından istifadə etmirik. Minlərlə fayl üçün yer olan yeni rəqəmsal cihazlar sizə kitabxananı gəzdirməyə və audionu birbaşa onlayn yükləməyə və ya yayımlamağa imkan verir. mp3 faylları kimi populyar audio formatları rəqəmsal cihazların əksəriyyətində oynayır.</h4></div>
          </div>
          <div className="mirtbesdi">
            <div className="dahabes"><h2>Elektron kitablar</h2></div>
            <div className="mirtline"></div>
            <div className="mirttext"><h4>Elektron kitab (və ya elektron kitab) çap edilmiş kitabın rəqəmsal formatda versiyasıdır. Onlar daha ucuzdur və daha tez nəşr olunur və buna görə də ədəbiyyatın dövriyyəsi üçün daha rahat bir yol təqdim edir. 1970-ci illərdə İnternet rəqəmsal mətnləri paylaşmaq və onları ekranda və yükləməyə hazır etmək üçün böyük bir addım atdı. 1990-cı illərin sonunda naşirlər çap olunmuş həmkarları ilə yanaşı rəqəmsal versiyaları da təqdim etməyə başladılar. Elektron kitablar adətən məşhur Kindle kimi e-oxucudan istifadə etməklə oxunur, baxmayaraq ki, əksər rəqəmsal cihazlar bu gün istifadə edilən ən çox yayılmış format olan EPUB-ları oxuya bilir. Bəzi cihazlar hətta danışılan sözü dinləməyə və eyni zamanda oxumağa imkan verir. </h4></div>
          </div>
          <div className="mirtbesdi">
            <div className="dahabes"><h2>Podkast</h2></div>
            <div className="mirtline"></div>
            <div className="mirttext"><h4>Podkast adətən mobil cihazınızda proqram vasitəsilə abunə olduğunuz müəyyən mövzu və ya mövzu ətrafında əsaslanan audio yazıdır. 2000-ci ildə, "podkast" termini ortaya çıxmazdan əvvəl, RSS lentləri audio və video faylları dəstəkləməyə başladı, çünki dünyada ilk dəfə tələb olunan təkliflər təqdim edildi. Yalnız 2004-cü ildə “podkastinq” termini ilk dəfə ortaya çıxdı və kommersiya aspekti həyata keçirildi. Media orqanları medianı istehlak etmək üçün ən son tendensiyanı tez bir zamanda seçdi və dinləyicilərinə podcast seçimini təqdim etməyə tələsdilər. Növbəti il ​​ən çox abunəçini cəlb etmək yarışı rəsmi olaraq başladığı üçün Apple iTunes platformasına podkastları təqdim etdi. Bu gün daha populyar podkast seriyalarından bəziləri radio şouları, ruhlandırıcı söhbətlər və dil öyrənmədir.</h4></div>
          </div>
        </div>
      </div>
      <Onlydes/>
      <Footer/>
    </div>

  );
}

let t=(s)=>s;
export default connect(t)(Nonfict);
