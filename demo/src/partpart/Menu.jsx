import React from "react";
import { NavLink } from "react-router-dom";
{
  /* <li><NavLink to=''><h3></h3></NavLink></li> */
}

function Menu() {
  return (
    <>
      <header>
        <div className="menu2">
          {/* <div className='menumain'>
                
            <div className='den'><img className='animatd' src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png" /></div>
            
                <div className='menupic'>
                    <NavLink to='/'><img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/08/landing-slider-top-img-9.png" /></NavLink>
                </div>
                <div className='formline'>
                <div className='menuline'></div>
                <div className='menutit'><NavLink to='/'><h1>Chapter</h1></NavLink></div>
                <div className='menuline'></div>
                </div>
                <div className='menul'>
                    <ul>
                        <div className='li1'>
                        <li> <div className='deni'></div><NavLink to='/'><h3>Ana səhifə</h3></NavLink></li>
                        <li><div className='deni'></div><NavLink to='/about'><h3>Haqqımızda</h3></NavLink></li>
                        <li><div className='deni'></div><NavLink to='/basket'><h3>Səbət</h3></NavLink></li>
                        <li><div className='deni'></div><NavLink to='/favor'><h3>Sevimlilər</h3></NavLink></li>
                        <li><div className='deni'></div><NavLink to='/search'><h3>Axtarış</h3></NavLink></li>
                        </div>
                        <div className='li3'>
                        <li><div className='deni'></div><NavLink to='/shipping'><h3>Çatdırılma</h3></NavLink></li>
                        
                        <li><div className='deni'></div><NavLink to='/security'><h3>Təhlükəsizlik</h3></NavLink></li>
                        
                        <li><div className='deni'></div><NavLink to='/price'><h3>Qiymətlər</h3></NavLink></li>
                        
                        <li><div className='deni'></div><NavLink to='/return'><h3>Geri qaytarılma</h3></NavLink></li>
                        
                        <li><div className='deni'></div><NavLink to='/kateqoriya'><h3>Xüsusi Endirimlər</h3></NavLink></li>
                        </div>
                        <div className='li2'>
                        <li><div className='deni'><img className='animatd' src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png" /></div><NavLink to='/bestseller'><h3>Ən çox satılanlar</h3></NavLink></li>
                        <li><div className='deni'><img className='animatd' src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png" /></div><NavLink to='/textbook'><h3>Ənənəvi kitablar</h3></NavLink></li>
                        <li><div className='deni'><img className='animatd' src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png" /></div><NavLink to='/kateqoriya1'><h3>Audio kitablar</h3></NavLink></li>
                        
                        <li><div className='deni'><img className='animatd' src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png" /></div><NavLink to='/fiction'><h3>Bədii ədəbiyyat</h3></NavLink></li>
                        <li><div className='deni'><img className='animatd' src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png" /></div><NavLink to='/nonfic'><h3>Qeyri-bədii ədəbiyyat</h3></NavLink></li>
                        </div>
                        <div className='li4'>
                        <li><div className='deni'><img className='animatd' src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png" /></div><NavLink to='/kateqoriya'><h3>Elektron kitablar</h3></NavLink></li>
                            <li><div className='deni'><img className='animatd' src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png" /></div><NavLink to='/shelp'><h3>Self-Help kitablar</h3></NavLink></li>
                            <li><div className='deni'><img className='animatd' src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png" /></div><NavLink to='/biog'><h3>Bioqrafiyalar</h3></NavLink></li>
                            <li><div className='deni'><img className='animatd' src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png" /></div><NavLink to='/manga'><h3>Manga</h3></NavLink></li>
                            
                        </div>
                    </ul>
                </div>
            </div> */}
          <div className="menuwhite">
            <div className="afterw">
              <div className="menuaxtar">
                <div className="deni2">
                  <img
                    className="animatd"
                    src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png"
                  />
                </div>
                <NavLink to="/search">
                  <h3>Axtarış</h3>
                </NavLink>
              </div>
              <div className="menuaxtar">
                <div className="deni2">
                  <img
                    className="animatd"
                    src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png"
                  />
                </div>
                <NavLink to="/kateqoriya2">
                  <h3>Xüsusi endirimlər</h3>
                </NavLink>
              </div>
            </div>
            <div className="menu2pic">
              <div className="menu2picm">
                <NavLink to="/">
                  <img src="https://www.pngmart.com/files/4/Design-Transparent-PNG.png" />
                </NavLink>
              </div>
              <div className="menutit2">
                <NavLink to="/">
                  <h1>Chapter</h1>
                </NavLink>
              </div>
            </div>
            <div className="menu2fb">
              <div className="menufb">
                <div className="deni2">
                  <img
                    className="animatd"
                    src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png"
                  />
                </div>
                <NavLink to="/basket">
                  <h3>Səbət</h3>
                </NavLink>
              </div>
              <div className="menufb">
                <div className="deni2">
                  <img
                    className="animatd"
                    src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png"
                  />
                </div>
                <NavLink to="/favor">
                  <h3>Sevimlilər</h3>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </header>{" "}
      <div className="menu2sec">
        <ul className="secul">
          <li>
            <NavLink className="bsml" to="/">
              <h3 className="forw">Ana səhifə</h3>
            </NavLink>
          </li>
          <li>
            <a className="bsml">
              <div className="menu2line"></div>
            </a>
          </li>
          <li>
            <NavLink className="bsml" to="/about">
              <h3 className="forw">Haqqımızda</h3>
            </NavLink>
          </li>
          <li>
            <a className="bsml">
              <div className="menu2line"></div>
            </a>
          </li>
          <li className="notcor">
            <a className="bsml">
              <h3 className="forw">Səhifələr</h3>
            </a>
            <ul className="nonew">
              <li>
                <NavLink to="/shipping">
                  <h3>Çatdırılma</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to="/security">
                  <h3>Təhlükəsizlik</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to="/price">
                  <h3>Qiymətlər</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to="/return">
                  <h3>Geri qaytarılma</h3>
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <a className="bsml">
              <div className="menu2line"></div>
            </a>
          </li>
          <li className="notcor">
            <a className="bsml">
              <h3 className="forw">Kateqoriyalar</h3>
            </a>
            <ul className="nonew">
              <li>
                <NavLink to="/bestseller">
                  <h3>Ən çox satılanlar</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to="/kateqoriya1">
                  <h3>Audio kitablar</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to="/textbook">
                  <h3>Ənənəvi kitablar</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to="/kateqoriya">
                  <h3>Elektron kitablar</h3>
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <a className="bsml">
              <div className="menu2line"></div>
            </a>
          </li>
          <li className="notcor">
            <NavLink className="bsml" to="/fiction">
              <h3 className="forw">Bədii ədəbiyyat</h3>
            </NavLink>
            <ul className="nonew">
              <li>
                <NavLink to="/manga">
                  <h3>Manga</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to="/kateqoriya">
                  <h3>Fantastik</h3>
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <a className="bsml">
              <div className="menu2line"></div>
            </a>
          </li>
          <li className="notcor">
            <NavLink className="bsml" to="/nonfic">
              <h3 className="forw">Qeyri-bədii ədəbiyyat</h3>
            </NavLink>
            <ul className="nonew">
              <li>
                <NavLink to="/shelp">
                  <h3>Self-Help kitablar</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to="/biog">
                  <h3>Bioqrafiyalar</h3>
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Menu;
