import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './Header.scss';

import { navItems } from '../../constants';

const Header = () => {
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
         <ul className="nav">
            {navItems.map((item, index) => (
               <li key={index} className="nav__item">
                  <CustomLink to={item.path}>
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
