import './App.css';
import {Route,Routes,useLocation} from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Price from './pages/Price';
import Return from './pages/Return';
import Shipping from './pages/Shipping';
import Security from './pages/Security';
import Kategory from './pages/Kategory';
import Typesxs from './parts/Typesxs';
import Audio from './pages/Audio';
import Bestseller from './pages/Bestseller';
import Textbook from './pages/Textbook';
import Mymanga from './pages/Mymanga';
import Mygift from './pages/Mygift';
import Facts from './pages/Facts';
import Basketm from './pages/Basketm';
import Fiction from './pages/Fiction';
import Nonfict from './pages/Nonfict';
import Biog from './pages/Biog';
import Autobiog from './pages/Autobiog';
import Search from './pages/Search';
import Selfh from './pages/Selfh';
import Details from './pages/Details';
import Kat1 from './pages/Kat1';
import Kat2 from './pages/Kat2';
import Details2 from './pages/Details2';
import Details3 from './pages/Details3';
import Favor from './pages/Favor';
import { useEffect } from 'react';



function App() {
  const {pathname}=useLocation();
  useEffect(()=>{
    window.scrollTo(0,0);
  },[pathname]);
  return (
    <div className="App">
      {/* < Header /> */}
      <Routes>
        <Route path='/' element={<Header />}/>
        <Route path="/about" element={<About />}/>
        <Route path='/shipping' element={<Shipping/>}/>
        <Route path='/security' element={<Security/>}/>
        <Route path='/price' element={<Price/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/return' element={<Return/>}/>
        <Route path='/kateqoriya' element={<Kategory/>}/>
        <Route path='/kateqoriya1' element={<Kat1/>}/>
        <Route path='/kateqoriya2' element={<Kat2/>}/>
        <Route path='/bestseller' element={<Bestseller/>}/>
        <Route path='/textbook' element={<Textbook/>}/>
        <Route path='/audio' element={<Audio/>}/>
        <Route path='/manga' element={<Mymanga/>}/>
        <Route path='/mygift' element={<Mygift/>}/>
        <Route path='/favor' element={<Favor/>}/>
        <Route path='/facts/:id' element={<Facts/>}/>
        <Route path='/basket' element={<Basketm/>}/>
        <Route path='/fiction' element={<Fiction/>}/>
        <Route path='/nonfic' element={<Nonfict/>}/>
        <Route path='/shelp' element={<Selfh/>}/>
        <Route path='/biog' element={<Biog/>}/>
        <Route path='/autobiog' element={<Autobiog/>}/>
        <Route path='/details/:id' element={<Details/>}/>
        <Route path='/details2/:id' element={<Details2/>}/>
        <Route path='/details3/:id' element={<Details3/>}/>
      </Routes>
    </div>
  );
}

export default App;
