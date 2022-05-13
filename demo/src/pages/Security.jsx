import React,{useState} from "react";
import Menu from "../partpart/Menu";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Mainbest from "../parts/Mainbest";
import News from "../parts/News";
import Onlydes from "../parts/Onlydes";
import Footer from "../parts/Footer";

function Security() {

  const [num,SetNum]=useState("Aylıq ödəniləcək məbləğ");
  const [inp,SetInp]=useState(0);
  const[inp2,Setinp2]=useState("");
  const daxil=(e)=>{
    Setinp2(e.target.value);
  }  
  const hesabla=(e)=>{
    SetInp(e.target.value);
  }
  const hesab=()=>{
    if(Number(inp2) && Number(inp2)>=0){
      if(inp==3 || inp==6 || inp==12 || inp==18){
        SetNum(Number(inp2)/inp+Number(inp2)*0.03)
      }
      else{
        SetNum("Göstərilən müddət üçün kredit mümkün deyil !")
      }
    }
    else{
      SetNum("Zəhmət olmasa düzgün ədəd daxil edin !");
    }
  }


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
  };

  return (
    <div className="security">
      <Menu />
      <div className="securslider">
        <Slider {...settings}>
          <div className="securimg">
            <img src="https://www.kapitalbank.az/assets/static/img/content/elements/svg/Logo--main.svg" />
          </div>
          <div className="securimg">
            <img src="https://birkart.az/assets/images/img/cards/umico.png" />
          </div>
          <div className="securimg">
            <img src="https://www.yelo.az/site/templates/images/yelo-share.jpg" />
          </div>
          <div className="securimg">
            <img src="https://abb-bank.az/img/abb-30.svg?v=84" />
          </div>
          <div className="securimg">
            <img src="https://www.bankofbaku.com/site/templates/img/logo3.png" />
          </div>
          <div className="securimg">
            <img src="https://www.accessbank.az/bitrix/templates/publicV2/images/logos/AccessBank-logo.svg" />
          </div>
          <div className="securimg">
            <img src="https://unibank.az/assets/images/orange.png" />
          </div>
        </Slider>
      </div>
      <div className="aboutmid">
        <div className="midw">
          <div className="midh3">
            <h3>Ödəmə seçimləri</h3>
          </div>
          <div className="midh2">
            <h2>Kreditlə ödəmə imkanı !</h2>
          </div>
          <div className="midh3h3">
            <h3>
              Chapter iki fərqli ödəniş variantını təklif edir: kredit kartı və
              debet kartı. Kredit və debet kartları ilə ödənişlər oxşar şəkildə
              həyata keçirilir. Bu bölmədə biz Chapter-da debet kartı ilə necə
              ödəməyi addım-addım izah edəcəyik.
            </h3>{" "}
          </div>
          <div className="wimgmid">
            <img src="https://www.expressbank.az/images/12.9_siteSlider.png" />
          </div>
        </div>
        <div className="midimg">
          <div className="midimg1">
            <img src="https://pngimg.com/uploads/bank/bank_PNG10.png" />
          </div>
        </div>
      </div>
      <div className="qode">
        <div className="qode1">
          <div className="qodeline"></div>
          <div className="qodetit">
            <h1>Qode Interactive</h1>
          </div>
          <div className="qodeline"></div>
        </div>
        <div className="qode2">
          <div className="qodeimg"><img src="https://pbs.twimg.com/profile_images/1131149662457610242/AtaeyjSd_400x400.png"  /></div>
          <div className="qodetext"><h3>Bu Məxfilik Siyasəti Kipr qanunlarına (bundan sonra: QODE) daxil edilmiş və mövcud olan QODE LTD tərəfindən təqdim edilmişdir. QODE qodeinteractive.com, qodethemes.com, elated-themes.com, select-themes.com, edge-themes.com, mikado-themes.com daxil olmaqla, lakin bununla məhdudlaşmayaraq bir sıra vebsayt və platformaların yeganə sahibidir. , və QODE tərəfindən hazırlanmış WordPress veb sayt mövzularının önizləmələrini ehtiva edən bir sıra demo veb-saytlar. Bu Məxfilik Siyasətinin məqsədləri üçün “Platforma” termini birlikdə QODE-yə məxsus bütün veb-saytlara və platformalara və onların bütün məzmununa, mövzularına, kodlarına və s. aiddir. Bu Məxfilik Siyasəti bu Məxfilik Siyasətinin nümayiş olunduğu bütün QODE Platformalarına şamil edilir. Bu Məxfilik Siyasəti QODE-nin təqdim etdiyiniz şəxsi məlumatları necə topladığını, istifadə etdiyini, paylaşdığını və qoruduğunu təsvir edir.</h3></div>
        </div>
      </div>
      {/* <div className="credit">
        <div className="crline3"></div>
        <div className="credittit"><h2>Almaq istədiyiniz malların qiymətini daxil edin və kredit imkanlarına əsasən hər ay nə qədər ödəməli olacağınızı hesablayın !</h2></div>
        
        <div className="crline1"></div>
        <div className="crline2"></div>
        <div className="creditinput"><input onChange={daxil} type="text" placeholder="Məbləğ" /></div>
        <div className="forflex">
        <div className="creditrange"><input className="yyyx" onChange={hesabla} type="range" min={0} max={18} /></div>
        <div className="creditinx"><h2>{inp}</h2></div>
        </div>
        <div className="ff2">
        <div><button onClick={hesab}>Hesabla</button></div>
        <div className="creditson"><h1>{Number(num)? `${Number(num).toFixed(2)} manat`: num}</h1></div>
        </div>
        <div className="crline"></div>
      </div> */}
      <Mainbest/>
      <News/>
      <Onlydes/>
      <Footer/>
      
    </div>
  );
}

export default Security;
