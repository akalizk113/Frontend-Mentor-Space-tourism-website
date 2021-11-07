import { Link, useMatch, useResolvedPath } from 'react-router-dom';

import { useState } from 'react';
import './Header.scss';

import { navItems } from '../../constants';

const Header = () => {
   const [checked, setChecked] = useState(false);
   return (
      <header className="header">
         <svg
            className="header__logo"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
         >
            <g fill="none" fillRule="evenodd">
               <circle cx="24" cy="24" r="24" fill="#FFF" />
               <path
                  fill="#0B0D17"
                  d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
               />
            </g>
         </svg>

         <input
            type="checkbox"
            id="nav-mobile-checkbox"
            name="nav-mobile-checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
         />
         <label htmlFor="nav-mobile-checkbox">
            <svg
               className="nav-moblie-close-icon"
               xmlns="http://www.w3.org/2000/svg"
               width="20"
               height="21"
            >
               <g fill="#D0D6F9" fillRule="evenodd">
                  <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                  <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
               </g>
            </svg>

            <svg
               className="nav-moblie-menu-icon"
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="21"
            >
               <g fill="#D0D6F9" fillRule="evenodd">
                  <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
               </g>
            </svg>
         </label>

         <ul className="nav">
            {navItems.map((item, index) => (
               <li key={index} className="nav__item">
                  <CustomLink onClick={() => setChecked(false)} to={item.path}>
                     <span>{index < 10 ? '0' + index : index}</span>
                     {item.label}
                  </CustomLink>
               </li>
            ))}
         </ul>
      </header>
   );
};

const CustomLink = ({ children, to, ...props }) => {
   const resolved = useResolvedPath(to);
   const match = useMatch({ path: resolved.pathname, end: true });
   return (
      <Link
         {...props}
         className={match ? 'nav__link active' : 'nav__link'}
         to={to}
      >
         {children}
      </Link>
   );
};

export default Header;
