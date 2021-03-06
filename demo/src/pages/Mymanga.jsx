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
        <div className='matext'><h1>Manqa haqq??nda ??trafl?? m??lumat ??ld?? edin</h1></div>
        <div className='matext1'><h3>??? Manqa Yaponiyadan v?? ya Yapon ??slublu komiksl??rd??n t??sirl??nmi?? komik kitablar v?? qrafik romanlar ??slubudur. S??hif??l??r a??-qara r??ngd?? oldu??u halda ??z qab?????? ??ox vaxt r??ngli v?? canl?? olur. ??g??r manqa il?? yeni tan????s??n??zsa, manqa il?? anime aras??ndak?? f??rqin n?? oldu??unu maraqland??ra bil??rsiniz. Anime Yaponiyadan g??l??n, tez-tez r??ngar??ng qrafika v?? h??r??k??tli s??jetl?? dolu ??ll?? ????kilmi?? animasiya t??rzidir. Bir ??ox m????hur manqa seriyalar?? anime seriyalar??na uy??unla??d??r??l??b. H??m manqa komiksl??ri, h??m d?? anime m??xt??lif janrlarda m??vcuddur. Populyar janrlara fantaziya, mac??ra, romantika, triller v?? sirr daxildir. Minl??rl?? manqa kitab?? il?? fantaziya d??nyas??na qa????n. Yeni burax??l????lardan tutmu?? bestsellerl??r?? q??d??r h??r??k??tli Yapon v?? Yapon dilind??n ilhamlanm???? qrafik romanlar u??aqlar, yeniyetm??l??r v?? b??y??kl??r aras??nda hitdir. D??rhal oxumaq ??????n manqa axtar??rs??n??z? R??q??msal manqan?? smartfon, plan??et v?? ya NOOK cihaz??n??za endirin v?? bu g??n oxuma??a ba??lay??n!</h3></div>
      </div>
      <Mainbest/>
      <Recommend/>
      <Onlydes/>
      <Footer/>
  </div>;
}

export default Mymanga;
