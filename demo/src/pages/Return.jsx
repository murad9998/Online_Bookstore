import React from 'react';
import Menu from '../partpart/Menu';
import Mainbest from "../parts/Mainbest";
import Gift from "../parts/Gift";
import Onlydes from "../parts/Onlydes";
import Overall3 from '../components/Overall3';
import Footer from "../parts/Footer";
import { connect } from "react-redux";

function Return(props) {
  return <div className='returnit'>
      <Menu/>
      <div className='returnmid'>
      <div className='returntit'><h2>Geri qaytarma və dəyişdirilmə</h2></div>
      <div className='returntext'>
        <h4>Chapter-dən online və ya digər formada alınan malların dəyişdirilməsi/geri qaytarılması qaydaları aşağıdakı kimidir:</h4>
      </div>
      <div className='returntext'>
        <h4>1. Geri qaytarılması qadağan olunan mallar istisna olmaqla bütün mallar Azərbaycan Respublikasının İstehlakçıların hüquqlarının müdafiəsi haqqında qanunun 15-ci maddəsində qeyd edildiyi şərtlə 14 gün ərzində geri qaytarıla bilər.</h4>
      </div>
      <div className='returntext'>
        <h4>2. Mal təhvil alınan zaman mütləq şəkildə fiziki xüsusiyyətləri, funksionallıqları yoxlanmalıdır, əgər hər hansı irad varsa yerində çatdırılmanı edən əməkdaşımıza bildirilməlidir.</h4>
      </div>
      <div className='returntext'>
        <h4>3. Geri qaytarılma və dəyişdirilmə ancaq istehsal xətasına görə olan qüsurdursa və ya bu qüsur təhvil təslim zamanı ortaya çıxmışdırsa bu zaman geri qaytarma/dəyişdirmə icra edilir.</h4>
      </div>
      </div>
      <div className='retdes'>
        <div className='rdesimg'><img src="https://texnomart.az/wp-content/uploads/2021/11/Catdirilma-new-01-01.svg" /></div>
        <div className='rdestxt'>
          <div className='txtdes1'><h2>Sürətli çatdırılma</h2></div>
          <div className='txtdes2'><h3>Bütün ölkәyә çatdırılma edirik</h3></div>
        </div>
        <div className='retline'></div>
        <div className='rdesimg'><img src="https://texnomart.az/wp-content/uploads/2021/11/Zemanet-01.svg" /></div>
        <div className='rdestxt'>
          <div className='txtdes1'><h2>Zəmanət</h2></div>
          <div className='txtdes2'><h3>Saytda olan bütün mәhsullara zəmanət</h3></div>
        </div>
        <div className='retline'></div>
        <div className='rdesimg'><img src="https://texnomart.az/wp-content/uploads/2021/11/Tehlukesiz-01.svg" /></div>
        <div className='rdestxt'>
          <div className='txtdes1'><h2>100% Təhlükəsiz</h2></div>
          <div className='txtdes2'><h3>Ödəniş</h3></div>
        </div>
        <div className='retline'></div>
        <div className='rdesimg'><img src="https://texnomart.az/wp-content/uploads/2021/11/24-saat-xidmet-01.svg" /></div>
        <div className='rdestxt'>
          <div className='txtdes1'><h2>24/7</h2></div>
          <div className='txtdes2'><h3>Xidmət</h3></div>
        </div>
      </div>
      <Mainbest/>
      <Gift/>
      {props.promo.map((a)=><Overall3 key={a.id} item={a}/>)}
      <Onlydes/>
      <Footer/>
  </div>;
}

let t=(s)=>s;
export default connect(t)(Return);
