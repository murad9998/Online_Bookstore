import React from "react";
import { NavLink } from "react-router-dom";

function Gift() {
  return (
    <div className="gift">
      <div className="giftw">
        <div className="gifth1">
          <h1>3 kitab arasından 1 -ni 50% dək endirimlə əldə etmək şansı</h1>
        </div>
        <div className="gifth3"><h3>Şansını sına</h3></div>
        <NavLink to='/mygift'><div className="giftbtn">Səhifəyə daxil ol</div></NavLink>
      </div>
    </div>
  );
}

export default Gift;
