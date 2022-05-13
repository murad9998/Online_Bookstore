import React, { useState } from "react";
import { connect } from "react-redux";
import Menu from "../partpart/Menu";
import { NavLink } from "react-router-dom";
import Harry from "../parts/Harry";
import News from "../parts/News";
import Onlydes from "../parts/Onlydes";
import Footer from "../parts/Footer";

function Mygift(props) {
  const [klass, Setklass] = useState("");
  const [able, Setable] = useState(false);
  const [num, Setnum] = useState(2);
  const [kk,Setkk]=useState("pricee")
  const klikbtn1 = () => {
    Setnum(2);
    Setkk("disdis");
    Setable(true);
  };
  const klikbtn2 = () => {
    Setnum(5);
    Setkk("disdis");
    Setable(true);
  };
  const klikbtn3 = () => {
    Setnum(39);
    Setkk("disdis");
    Setable(true);
  };
  return (
    <div className="giftst">
      <Menu />
      <div className="clickbau">
        <h1>
          Aşağıda göstərilən "kliklə" hissəsinə klikliyərək 3 ədəd kitab
          şansından yararlanın. Seçəcəyiniz kitabı 50% dək endirimlə əldə etmək
          fürsətiniz var.
        </h1>
      </div>
      <div className="sadece">
        <h3>Sadəcə 1 şansınız var</h3>
      </div>
      <div className="klikflex">
        <div className="buttonchc">
          <button className={klass} disabled={able} onClick={klikbtn1}>
            <h3>Kliklə-1</h3>
          </button>
        </div>
        <div className="buttonchc">
          <button className={klass} disabled={able} onClick={klikbtn2}>
            <h3>Kliklə-2</h3>
          </button>
        </div>
        <div className="buttonchc">
          <button className={klass} disabled={able} onClick={klikbtn3}>
            <h3>Kliklə-3</h3>
          </button>
        </div>
      </div>
      <div>
        <div className={kk}>
        <div className="priceeimg">
          <img src={props.books.find((a) => a.id === num).image} />
        </div>
        <div className="menaflex">
        <div className="enmena">
            <h1>{`İlk qiymət - ${props.books.find((a) => a.id === num).price} $`}</h1>
          </div>
          <div className="enmena">
            <h1>{`Endirim ilə - ${props.books.find((a) => a.id === num).dicscount} $`}</h1>
          </div>
          <div className="priceename">
            <h2>{props.books.find((a) => a.id === num).name}</h2>
          </div>
          <div className="pricedir">
            <h1>
              {`${(
                100 -
                (props.books.find((a) => a.id === num).dicscount /
                  props.books.find((a) => a.id === num).price) *
                  100 +
                10
              ).toFixed(2)} % hədiyyə endirimi ilə`}
            </h1>
          </div>
          <div className="oooprice"><h1>{`${(props.books.find((a) => a.id === num).dicscount*(100-(
                100 -
                (props.books.find((a) => a.id === num).dicscount /
                  props.books.find((a) => a.id === num).price) *
                  100 +
                10
              )).toFixed(2)/100).toFixed(2)} $`}</h1></div>
        </div>
      </div>
      </div>
      <Harry/>
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
      <News/>
      <Onlydes/>
      <Footer/>
    </div>
  );
}

let t = (s) => s;
export default connect(t)(Mygift);
