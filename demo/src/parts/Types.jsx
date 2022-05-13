import React from "react";
import { NavLink } from "react-router-dom";

// Navlarda id olacaq

function Types() {
  return (
    <div className="allt">
      <div className="maint">
       <NavLink to='/kateqoriya'> <div className="mainimg">
          <img src="https://demo.joomlabuff.com/bookstore/images/home-1-ebook.jpg" />
            <div className="check"></div>
          <div className="mainw">
            <h4>Kateqoriya</h4>
            <h1>Elektron Kitablar</h1>
            <div className="wa">
              <div>
                <h4>İndi al</h4>
              </div>
              <div>
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div></NavLink>
        <NavLink to='/kateqoriya1'> <div className="mainimg">
          <img src="https://demo.joomlabuff.com/bookstore/images/home-1-text-book.jpg" />
          <div className="check"></div>
          <div className="mainw">
            <h4>Kateqoriya</h4>
            <h1>Audio Kitablar</h1>
            <div className="wa">
              <div>
                <h4>İndi al</h4>
              </div>
              <div>
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div></NavLink>
        <NavLink to='/kateqoriya2'> <div className="mainimg">
          <img src="https://demo.joomlabuff.com/bookstore/images/home-1-offer.jpg" />
          <div className="check"></div>
          <div className="mainw">
            <h4>Kateqoriya</h4>
            <h1>Xüsusi Endirim</h1>
            <div className="wa">
              <div>
                <h4>İndi al</h4>
              </div>
              <div>
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div></NavLink>
      </div>
    </div>
  );
}

export default Types;
