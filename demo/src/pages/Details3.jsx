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
              <h3 onClick={addtofavs} className={`${!find2?"rrb":"rrr"}`}>Sevimlil??r?? ??lav?? edin</h3>
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
              <h3  onClick={addtobasket} className={`${!find?"rrb":"rrr"}`}>S??b??t?? ??lav?? edin</h3>
            </div>
          </div>
        </div>
        <div className="detailtext">
          <div className="detatexttit"><h1>{item.title}</h1></div>
          <div className="detatextaut"><h3>{`${item.author} t??r??find??n`}</h3></div>
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
          <div className="gozsox">{`${Number(item.discount)? `??? ${(item.price-item.discount).toFixed(2)} $ endirim il??`:item.discount}`}</div>
          </div>
          
          <div className="detaddw"><NavLink to='/shipping'><h3>??? Da????nma ????rtl??ri haqda ??yr??n</h3></NavLink></div>
          <div className="detaddw"><NavLink to='/price'><h3>??? ??d??ni?? ??sullar?? v?? ????rtl??ri haqda ??yr??n</h3></NavLink></div>
        </div>
      </div>
      <div className="detabouts">
        <div className="detabt1"><h3>{item.about1}</h3></div>
        <div className="detabt2"><h5>{item.about2}</h5></div>
      </div>
     
      <Mainbest/>
      <div className="mirtdes">
        <div className="mirtdestit"><h1>T??rifl??r</h1></div>
        <div className="mirtdesmain">
          <div className="mirtbesdi">
            <div className="dahabes"><h2>Audio kitablar</h2></div>
            <div className="mirtline"></div>
            <div className="mirttext"><h4>Audio kitab ucadan oxunan m??tnin s??zb??s??z v?? ya q??sald??lm???? qeydidir. Onlar ??n??n??vi kitablara ??lveri??li alternativdir v?? g??rm?? qabiliyy??ti z??if olanlar ??????n m??h??m mediad??r. S??sli kitablar 1930-cu ill??rd??n b??ri ??lil insanlar ??????n ilk tam metrajl?? yaz??lar??n ortaya ????xd?????? vaxtdan b??ri uzun bir yol ke??mi??dir. Onlar 1950-ci ill??rd?? geni?? ictimaiyy??t?? t??qdim edildi, lakin 1970-ci ill??r?? q??d??r kaset lentl??rinin burax??lmas?? il?? populyarl??q, x??sus??n d?? avtomobil s??r??rk??n s??rni??inl??r aras??nda y??ks??lm??y?? ba??lad??. Bu g??n biz audio kitablara qulaq asmaq ??????n art??q h??cmli qeyd formatlar??ndan istifad?? etmirik. Minl??rl?? fayl ??????n yer olan yeni r??q??msal cihazlar siz?? kitabxanan?? g??zdirm??y?? v?? audionu birba??a onlayn y??kl??m??y?? v?? ya yay??mlama??a imkan verir. mp3 fayllar?? kimi populyar audio formatlar?? r??q??msal cihazlar??n ??ks??riyy??tind?? oynay??r.</h4></div>
          </div>
          <div className="mirtbesdi">
            <div className="dahabes"><h2>Elektron kitablar</h2></div>
            <div className="mirtline"></div>
            <div className="mirttext"><h4>Elektron kitab (v?? ya elektron kitab) ??ap edilmi?? kitab??n r??q??msal formatda versiyas??d??r. Onlar daha ucuzdur v?? daha tez n????r olunur v?? buna g??r?? d?? ??d??biyyat??n d??vriyy??si ??????n daha rahat bir yol t??qdim edir. 1970-ci ill??rd?? ??nternet r??q??msal m??tnl??ri payla??maq v?? onlar?? ekranda v?? y??kl??m??y?? haz??r etm??k ??????n b??y??k bir add??m atd??. 1990-c?? ill??rin sonunda na??irl??r ??ap olunmu?? h??mkarlar?? il?? yana???? r??q??msal versiyalar?? da t??qdim etm??y?? ba??lad??lar. Elektron kitablar ad??t??n m????hur Kindle kimi e-oxucudan istifad?? etm??kl?? oxunur, baxmayaraq ki, ??ks??r r??q??msal cihazlar bu g??n istifad?? edil??n ??n ??ox yay??lm???? format olan EPUB-lar?? oxuya bilir. B??zi cihazlar h??tta dan??????lan s??z?? dinl??m??y?? v?? eyni zamanda oxuma??a imkan verir. </h4></div>
          </div>
          <div className="mirtbesdi">
            <div className="dahabes"><h2>Podkast</h2></div>
            <div className="mirtline"></div>
            <div className="mirttext"><h4>Podkast ad??t??n mobil cihaz??n??zda proqram vasit??sil?? abun?? oldu??unuz m????yy??n m??vzu v?? ya m??vzu ??traf??nda ??saslanan audio yaz??d??r. 2000-ci ild??, "podkast" termini ortaya ????xmazdan ??vv??l, RSS lentl??ri audio v?? video fayllar?? d??st??kl??m??y?? ba??lad??, ????nki d??nyada ilk d??f?? t??l??b olunan t??klifl??r t??qdim edildi. Yaln??z 2004-c?? ild?? ???podkastinq??? termini ilk d??f?? ortaya ????xd?? v?? kommersiya aspekti h??yata ke??irildi. Media orqanlar?? median?? istehlak etm??k ??????n ??n son tendensiyan?? tez bir zamanda se??di v?? dinl??yicil??rin?? podcast se??imini t??qdim etm??y?? t??l??sdil??r. N??vb??ti il ????????n ??ox abun????ini c??lb etm??k yar?????? r??smi olaraq ba??lad?????? ??????n Apple iTunes platformas??na podkastlar?? t??qdim etdi. Bu g??n daha populyar podkast seriyalar??ndan b??zil??ri radio ??oular??, ruhland??r??c?? s??hb??tl??r v?? dil ??yr??nm??dir. </h4></div>
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