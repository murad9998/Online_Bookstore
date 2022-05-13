import React from 'react';
import {useParams} from "react-router-dom";
import { connect } from "react-redux";
import Menu from "../partpart/Menu";
import ReactStars from "react-stars";
import { NavLink } from "react-router-dom";
import Mainbest from "../parts/Mainbest";
import Manga from "../parts/Manga";
import Recommend from "../parts/Recommend";
import Gift from "../parts/Gift";
import Onlydes from "../parts/Onlydes";
import Footer from "../parts/Footer";

function Details3(props) {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      };
        let {id}=useParams();
      let item=props.promo.find((a)=>a.id==id);
      let find=props.basket.find((bb)=>bb.id==item.id);
      let find2=props.favs.find((bd)=>bd.id==item.id);
      console.log(props.basket);
      const addtobasket=()=>{
        if(!find){
          props.dispatch({type:"ADDTOBASKET",value:item})
        }
        else{
          props.dispatch({type:"REMOVEFROMBASKET",value:item})
        }
      }
      const addtofavs=()=>{
        if(!find2){
          props.dispatch({type:"ADDTOFAVS",value:item})
        }
        else{
          props.dispatch({type:"REMOVEFROMFAVS",value:item})
        }
      }
  return (
    <div className='yaldetails'>
        <Menu/>
              <div className="detailmain">
        <div className="detailimgwish">
          <div className="wishline">
            <div className="detailsimgg">
              <img src={item.image} />
            </div>
          </div>
          <div className="wishimg">
            <div className="dwishimg">
              <img
                className="animatd"
                src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png"
              />
            </div>
            <div className="wishword">
              <h3 onClick={addtofavs} className={`${!find2?"rrb":"rrr"}`}>Sevimlilərə əlavə edin</h3>
            </div>
          </div>
          <div className="wishimg">
            <div className="dwishimg">
              <img
                className="animatd"
                src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png"
              />
            </div>
            <div className="wishword">
              <h3  onClick={addtobasket} className={`${!find?"rrb":"rrr"}`}>Səbətə əlavə edin</h3>
            </div>
          </div>
        </div>
        <div className="detailtext">
          <div className="detatexttit"><h1>{item.title}</h1></div>
          <div className="detatextaut"><h3>{`${item.author} tərəfindən`}</h3></div>
          <div className="starflex">
            <div className="tupstars">
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={20}
                value={item.star}
                color2={"#ffd700"}
                edit={false}
              />
            </div>
            <div className="startext">{`(${item.star})`}</div>
          </div>
          <div className="mecbline"></div>
          <div className="dettype"><h2>Puzzle</h2></div>
          <div className="detdate"><h4>{item.date}</h4></div>
          <div className="priceflex">
          <div className="detprice">{`$ ${Number(item.discount)?item.discount:item.price}`}</div>
          <div className="gozsox">{`${Number(item.discount)? `• ${(item.price-item.discount).toFixed(2)} $ endirim ilə`:item.discount}`}</div>
          </div>
          
          <div className="detaddw"><NavLink to='/shipping'><h3>○ Daşınma şərtləri haqda öyrən</h3></NavLink></div>
          <div className="detaddw"><NavLink to='/price'><h3>○ Ödəniş üsulları və şərtləri haqda öyrən</h3></NavLink></div>
        </div>
      </div>
      <div className="detabouts">
        <div className="detabt1"><h3>{item.about1}</h3></div>
        <div className="detabt2"><h5>{item.about2}</h5></div>
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
            <div className="mirttext"><h4>Podkast adətən mobil cihazınızda proqram vasitəsilə abunə olduğunuz müəyyən mövzu və ya mövzu ətrafında əsaslanan audio yazıdır. 2000-ci ildə, "podkast" termini ortaya çıxmazdan əvvəl, RSS lentləri audio və video faylları dəstəkləməyə başladı, çünki dünyada ilk dəfə tələb olunan təkliflər təqdim edildi. Yalnız 2004-cü ildə “podkastinq” termini ilk dəfə ortaya çıxdı və kommersiya aspekti həyata keçirildi. Media orqanları medianı istehlak etmək üçün ən son tendensiyanı tez bir zamanda seçdi və dinləyicilərinə podcast seçimini təqdim etməyə tələsdilər. Növbəti il ​​ən çox abunəçini cəlb etmək yarışı rəsmi olaraq başladığı üçün Apple iTunes platformasına podkastları təqdim etdi. Bu gün daha populyar podkast seriyalarından bəziləri radio şouları, ruhlandırıcı söhbətlər və dil öyrənmədir. </h4></div>
          </div>
        </div>
      </div>
      {/* <Recommend/> */}
      <Gift/>
      <Onlydes/>
      <Footer/>
    </div>
  )
}

let t=(s)=>s;
export default connect(t)(Details3);