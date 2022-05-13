import React from 'react'
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className='footer'>
        <div className='sksk'><img className='animatd' src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png" /></div>
        <div className='footmain'>
        <div className='footpart1'>
            <div className='fp1h2'><h2>Bölmələr</h2></div>
            <div className='fp1h4'>
                <NavLink to='/bestseller'><h4>Ən çox satılanlar</h4></NavLink>
                <NavLink to='/audio'><h4>Audio kitablar</h4></NavLink>
                <NavLink to='/textbook'><h4>Ənənəvi kitablar</h4></NavLink>
                <NavLink to='/security'><h4>Təhlükəsizlik</h4></NavLink>
                <NavLink to='/shipping'><h4>Çatdırılma</h4></NavLink>
                <NavLink to='/about'><h4>Haqqımızda</h4></NavLink>
            </div>
        </div>
        <div className='footpart2'>
            <div className='fp1h2'><h2>Əlaqə</h2></div>
            <div className='fp1h4'>
                <h4>Chapter ilə bağlı hər şeylə əlaqə saxlayın, sosial mediada bizi izləyin və yeni promosyonlar haqqında məlumat əldə edin</h4>
            </div>
            <div className='is'>
            <div className='deni'><img className='animatd' src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png" /><h5>instagram</h5></div>
            <div className='deni'><img className='animatd' src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png" /><h5>telegram</h5></div>
            <div className='deni'><img className='animatd' src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png" /><h5>twitter</h5></div>
            <div className='deni'><img className='animatd' src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png" /><h5>google+</h5></div>

            </div>
        </div>
        <div className='footpart3'>
            <div className='fp1h2'><h2>Xəbərlər və Yeniliklər</h2></div>
            <div className='fp1h4'><h4>Saytımıza abunə olsanız çox şad olarıq! Siz də sevəcəksiniz.</h4></div>
           <div className='for input'>
           <div className='linew'>
           <div className='fp3input'><input type='text' disabled placeholder='Abunə olun'/></div>
           <div className='inputline'></div>
           </div>
           </div>
        </div>
        <div className='social'>
            <div className='socialtit'><h2>Sosial Şəbəkə</h2></div>
            <div className='socialpics'>
                <div className='picssize'><img src="https://s2982.pcdn.co/wp-content/uploads/2021/09/bookstore-shelves-hero-image.jpg.optimal.jpg" /><div className='bfr'><div><h5>instagram</h5></div></div></div>
                <div className='picssize'><img src="https://www.icaiconf.org/wp-content/uploads/2018/07/barcelona-city-wallpaper1.jpg" /><div className='bfr'><div><h5>instagram</h5></div></div></div>
                <div className='picssize'><img src="https://i0.wp.com/epthinktank.eu/wp-content/uploads/2017/09/eprs-aag-608700-celebrating-european-day-of-languages-final.jpg?fit=1000%2C750&ssl=1" /><div className='bfr'><div><h5>instagram</h5></div></div></div>
                <div className='picssize'><img src="https://images.ctfassets.net/cnu0m8re1exe/7bvBF6E4WXVLLIsH88lXcC/5a3b7483a82fb30248e7d1c7856be6ec/20-things-color.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill" /><div className='bfr'><div><h5>instagram</h5></div></div></div>
                <div className='picssize'><img src="https://www.cloudlinkeduk.com/wp-content/uploads/2016/04/17.jpg" /><div className='bfr'><div><h5>instagram</h5></div></div></div>
                <div className='picssize'><img src="https://thumbs.dreamstime.com/b/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg" /><div className='bfr'><div><h5>instagram</h5></div></div></div>
            </div>
        </div>
        </div>
        <div className='footest'>
            <div className='estw'>
                <h2>© 2017 QODE INTERACTIVE, BÜTÜN HÜQUQLAR TƏRƏFİMİZDƏN QORUNUR</h2>
                
            </div>
        </div>
    </div>
  )
}

export default Footer