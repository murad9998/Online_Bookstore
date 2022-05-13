import React from 'react';

function Mydesignp(props) {
  return <div className='desm'>
      <div className='desimg'><img className='yoxla' src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61bccc32324768537e1acea2_Rectangle%20116.svg"  />
      <div className='desani'><img className='animated' src="https://assets-global.website-files.com/611743a37f13525e975fd53f/61b66b0bc6044e3c547cc4f0_6172ffeedb935a78c414f25c_Group%201234%20(2)%20(1)%20(1).png" /></div>
      </div>
      <div className='destit'><h2>{props.item.title}</h2></div>
      <div className='desabout'><h3>{props.item.about}</h3></div>
  </div>;
}

export default Mydesignp;
