import React,{useState} from 'react';
import { connect } from "react-redux";
import Menu from "../partpart/Menu";
import { NavLink } from "react-router-dom";
import Overall from "../components/Overall";
import Overall2 from '../components/Overall2';
import Overall3 from '../components/Overall3';
import Mainaudio from "../parts/Mainaudio";
import Gift from "../parts/Gift";
import Recommend from "../parts/Recommend";
import Onlydes from "../parts/Onlydes";
import Mypromo from '../components/Mypromo';
import Footer from "../parts/Footer";

function Search(props) {
    const [search,setSearch]=useState("");
    
  return (
    <div className='kategor2'>
      <Menu/>
      <div className='bosb'>
        <div className='inputfrst'><input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Kitabın adını , müəllifi , kitab növünü , tarixi daxil etməklə axtarış edə bilərsiniz' /></div>
      </div>
      {search.trim()==""? <div>
        
      <Gift/>
      <Recommend/>
      <Onlydes/>
      <Footer/>
      </div>:<div>
      <div className="kateqrisk">
        {/* <div className="katli">
          <ul className="katul">
            <li>
              <NavLink to="/kateqoriya1">Audio kitablar</NavLink>
            </li>
            <li>
              <NavLink to="/kateqoriya2">Xüsusi Endirimlər</NavLink>
            </li>
            <li>
              <NavLink to="textbook">Ənənəvi kitablar</NavLink>
            </li>
            <li>
              <NavLink to="/bestseller">Ən çox satılanlar</NavLink>
            </li>
            <li>
              <NavLink to="/manga">Manga</NavLink>
            </li>
            <li>
              <NavLink to="/shelp">Self-Help</NavLink>
            </li>
            <li>
              <NavLink to="/biog">Biografiya</NavLink>
            </li>
            <li>
              <NavLink to="/autobiog">Autobiqrafiya</NavLink>
            </li>
            <li>
              <NavLink to="/fiction">Bədii kitablar</NavLink>
            </li>
            <li>
              <NavLink to="/nonfic">Qeyri-bədii kitablar</NavLink>
            </li>
          </ul>
          <ul className="katul2">
            <li>
              <NavLink to="/shipping">Çatdırılma</NavLink>
            </li>
            <li>
              <NavLink to="/security">Təhlükəsizlik</NavLink>
            </li>
            <li>
              <NavLink to='/price'>Qiymətlər</NavLink>
            </li>
            <li>
              <NavLink to='/return'>Geri qaytarılma</NavLink>
            </li>
          </ul>
          <ul className="katul3">
            <li><NavLink to='/shelp'>Self-Help</NavLink></li>
            <li><NavLink to='/biog'>Bioqrafiya</NavLink></li>
            <li><NavLink to='/autobiog'>AutoBioqrafiya</NavLink></li>
          </ul>
          <div className="ebadd">
            <div className="addes">
              <div className="addesimg"><img className="animatd" src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png" /></div>
              <div className="addesh3"><h3>Fikirləriniz</h3></div>
            </div>
            <div className="addes">
              <div className="addesimg"><img className="animatd" src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png" /></div>
              <div className="addesh3"><h3>Qalereya</h3></div>
            </div>
            <div className="addes">
              <div className="addesimg"><img className="animatd" src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png" /></div>
              <div className="addesh3"><h3>Sitatlar</h3></div>
            </div>
            <div className="addes">
              <div className="addesimg"><img className="animatd" src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png" /></div>
              <div className="addesh3"><h3>Audio</h3></div>
            </div>
            <div className="addes">
              <div className="addesimg"><img className="animatd" src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png" /></div>
              <div className="addesh3"><h3>Linklər</h3></div>
            </div>
          </div>
        </div> */}
        <div className="ebook">
          {props.books.filter(tt=>tt.name.toLowerCase().includes(search.trim().toLowerCase()) || tt.date.toLowerCase().includes(search.trim().toLowerCase()) || tt.author.toLowerCase().includes(search.trim().toLowerCase()) || tt.type.toLowerCase().includes(search.trim().toLowerCase())).map((a) =>
            <Overall key={a.id} item={a} />
          )}
          {props.ebook.filter(tt=>tt.name.toLowerCase().includes(search.trim().toLowerCase()) || tt.date.toLowerCase().includes(search.trim().toLowerCase()) || tt.author.toLowerCase().includes(search.trim().toLowerCase()) || tt.type.toLowerCase().includes(search.trim().toLowerCase())).map((a) =>
            <Overall2 key={a.id} item={a} />
          )}
          {props.promo.filter(tt=>tt.title.toLowerCase().includes(search.trim().toLowerCase()) || tt.author.toLowerCase().includes(search.trim().toLowerCase())).map((a) =>
            <Overall3 key={a.id} item={a} />
          )}
        </div>
      </div>
      <Gift/>
      <Recommend/>
      <Onlydes/>
      <Footer/>
      </div>}
      
    </div>
  )
}

let t=(s)=>s;
export default connect(t)(Search);