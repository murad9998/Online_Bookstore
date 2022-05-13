import React from 'react';
import { NavLink } from "react-router-dom";
import Menu from '../partpart/Menu';
import Mainbest from '../parts/Mainbest';
import Recommend from '../parts/Recommend';
import Onlydes from '../parts/Onlydes';
import Footer from '../parts/Footer';

function Mymanga() {
  return <div>
      <Menu/>
      <div className='mangabegimg'><img src="https://blog.britishmuseum.org/wp-content/uploads/2019/01/ONE-PIECE-blog-composite.jpg" /></div>
      <div className='mangaline'>
        <div className='mangalimg'><NavLink to='/details/31'><img src="https://dispatch.barnesandnoble.com/content/dam/ccr/boutique/manga/v2/Series06_Manga_2x.jpg" /></NavLink></div>
        <div className='mangalimg'><NavLink to='/details/32'><img src="https://dispatch.barnesandnoble.com/content/dam/ccr/boutique/manga/v2/Series03_Manga_2x.jpg"/></NavLink></div>
        <div className='mangalimg'><NavLink to='/details/33'><img src="https://dispatch.barnesandnoble.com/content/dam/ccr/boutique/manga/v2/Series_Jujutsu_Manga_2x.jpg" /></NavLink></div>
        <div className='mangalimg'><NavLink to='/details/34'><img src="https://dispatch.barnesandnoble.com/content/dam/ccr/boutique/manga/v2/Series_Promised_Manga_2x.jpg" /></NavLink></div>
        <div className='mangalimg'><NavLink to='/details/35'><img src="https://dispatch.barnesandnoble.com/content/dam/ccr/boutique/manga/v2/Series_Haikyu_Manga_2x.jpg" /></NavLink></div>
        <div className='mangalimg'><NavLink to='/details/36'><img src="https://dispatch.barnesandnoble.com/content/dam/ccr/boutique/manga/v2/Series_Toilet_Manga_2x.jpg" /></NavLink></div>
        <div className='mangalimg'><NavLink to='/details/37'><img src="https://dispatch.barnesandnoble.com/content/dam/ccr/boutique/manga/v2/Series01_Manga_2x.jpg" /></NavLink></div>
        <div className='mangalimg'><NavLink to='/details/38'><img src="https://dispatch.barnesandnoble.com/content/dam/ccr/boutique/manga/v2/Series_Chainsaw_Manga_2x.jpg" /></NavLink></div>
        <div className='mangalimg'><NavLink to='/details/39'><img src="https://dispatch.barnesandnoble.com/content/dam/ccr/boutique/manga/v2/Series12_Manga_2x.jpg" /></NavLink></div>
        <div className='mangalimg'><NavLink to='/details/40'><img src="https://dispatch.barnesandnoble.com/content/dam/ccr/boutique/manga/v2/Series02_Manga_2x.jpg" /></NavLink></div>
      </div>
      <div className='mangaabout'>
        <div className='matext'><h1>Manqa haqqında ətraflı məlumat əldə edin</h1></div>
        <div className='matext1'><h3>• Manqa Yaponiyadan və ya Yapon üslublu komikslərdən təsirlənmiş komik kitablar və qrafik romanlar üslubudur. Səhifələr ağ-qara rəngdə olduğu halda üz qabığı çox vaxt rəngli və canlı olur. Əgər manqa ilə yeni tanışsınızsa, manqa ilə anime arasındakı fərqin nə olduğunu maraqlandıra bilərsiniz. Anime Yaponiyadan gələn, tez-tez rəngarəng qrafika və hərəkətli süjetlə dolu əllə çəkilmiş animasiya tərzidir. Bir çox məşhur manqa seriyaları anime seriyalarına uyğunlaşdırılıb. Həm manqa komiksləri, həm də anime müxtəlif janrlarda mövcuddur. Populyar janrlara fantaziya, macəra, romantika, triller və sirr daxildir. Minlərlə manqa kitabı ilə fantaziya dünyasına qaçın. Yeni buraxılışlardan tutmuş bestsellerlərə qədər hərəkətli Yapon və Yapon dilindən ilhamlanmış qrafik romanlar uşaqlar, yeniyetmələr və böyüklər arasında hitdir. Dərhal oxumaq üçün manqa axtarırsınız? Rəqəmsal manqanı smartfon, planşet və ya NOOK cihazınıza endirin və bu gün oxumağa başlayın!</h3></div>
      </div>
      <Mainbest/>
      <Recommend/>
      <Onlydes/>
      <Footer/>
  </div>;
}

export default Mymanga;
