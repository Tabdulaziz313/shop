import React from 'react';
import { NavLink } from 'react-router-dom';

import "./style.scss";
const index = () => {
   return (
      <div className="nav">
         <div className="nav__logo">
            <h3>  <NavLink to='/' className='link'>Venturis</NavLink></h3>
         </div>
         <ul className="nav__ul">
            <li className="nav__ul--li"><NavLink to='/' className='nav__ul--li-link'>Bosh sahifa</NavLink></li>
            <li className="nav__ul--li"><NavLink to='/product' className='nav__ul--li-link'>Maxsulotlar</NavLink></li>
            <li className="nav__ul--li"><NavLink to='/aboutus' className='nav__ul--li-link'>Biz Haqimizda</NavLink></li>
            <li className="nav__ul--li"><NavLink to='/contact' className='nav__ul--li-link'>Cantact</NavLink></li>
         </ul>
         <div className="nav__card">
            <button>Kirish</button>
            <button>Royxatdan O'tish</button>
            <button><NavLink to='./cart' className='link'>Savatcha</NavLink> </button>
         </div>
      </div>
   );
};

export default index;