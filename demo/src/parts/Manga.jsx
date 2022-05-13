import React from 'react';
import { NavLink } from "react-router-dom";

function Manga() {
  return <div >
     <NavLink to='/manga'> <div className='manga'>
         <div className='manimg'><img src="https://dispatch.barnesandnoble.com/content/dam/ccr/boutique/manga/Header1_Manga.jpg"  /></div>
      <div className='alpha'>
          <div className='fta'><img src="https://dispatch.barnesandnoble.com/content/dam/ccr/boutique/manga/anime/v2/img_1.png"  /></div>
          <div className='sca'><img src="https://dispatch.barnesandnoble.com/content/dam/ccr/boutique/manga/anime/v2/img_0.png"  /></div>
          <div className='tra'><img src="https://dispatch.barnesandnoble.com/content/dam/ccr/boutique/manga/anime/v2/img_2.png"  /></div>
      </div>
      </div>
      </NavLink>
  </div>;
}

export default Manga;
