import React from 'react';
import { NavLink } from "react-router-dom";

function Author() {
  return <div className='snll'>
      <div className='addt'>
          <div>
          <div className='addh1'><h1>Həftənin yazıçısı</h1></div>
          <div className='extline'></div>
          </div>
      </div>
      <div className='author'>
    <div className='book1'>
        <NavLink to='/details/74'><div className='b1img'><img src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780143110439_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D" /></div></NavLink>
        <div className='b1best'><h3>Ən çox satılanlar</h3></div>
        <div className='b1h2'><h2>A Gentleman in Moscow</h2></div>
        <div className='b1price'><h3>$120</h3></div>
    </div>
    <div className='book1'>
    <NavLink to='/details/75'><div className='b1img'><img src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780735222359_p0_v5%5D&call=url%5Bfile:common/decodeProduct.chain%5D" /></div></NavLink>
        <div className='b1best'><h3>Ən çox satılanlar</h3></div>
        <div className='b1h2'><h2>The Lincoln Highway</h2></div>
        <div className='b1price'><h3>$100</h3></div>
    </div>
    <div className='atimg'><img src="https://api.time.com/wp-content/uploads/2021/09/amor-towles-portrait.jpg"  /></div>
    <div className='aboutah'>
        <div className='ahname'><h2> Amor Towles  - müəllif</h2></div>
        <div className='ahquote'><h3>"Əgər nə vaxtsa şübhə edirsinizsə, unutmayın ki, böyüklərdən fərqli olaraq uşaqlar xoşbəxt olmaq istəyirlər. Beləliklə, onlar hələ də ən sadə şeylərdən ən böyük həzz almaq qabiliyyətinə malikdirlər."</h3></div>
        <div className='ahaward'><h2>- Yazıçının mükafatları</h2></div>
        <div className='awardimg'>
            <div className='aw1'>
                <div className='aw11'><img src="https://filmdaily.co/wp-content/uploads/2020/01/cwa-1-award.jpg"  /></div>
                <div className='aw11'><img src="https://www.chantireviews.com/wp-content/uploads/2019/06/Journey-First-Place-Category-Winner.png"  /></div>
                <div className='aw11'><img src="https://carolsanford.com/wp-content/uploads/2018/04/Beverly_Hills_hi_res.png"  /></div>
            </div>
            <div className='aw1'>
                <div className='aw11'><img src="https://static.wixstatic.com/media/798888_a5a6be389e564aff8e6f156343ff3160~mv2.png/v1/fill/w_3155,h_3072,al_c/Spectrum-Budding-Writers'-Award.png"  /></div>
                <div className='aw11'><img src="https://www.writersandartists.co.uk/sites/default/files/2021-03/Page%20Turner%20Awards%20round%20logo%20black.png"  /></div>
                <div className='aw11'><img src="https://www.pencraftaward.com/images/pencraft_award_logo_2022.png"  /></div>
            </div>
        </div>
    </div>
    </div>
  </div>;
}

export default Author;
