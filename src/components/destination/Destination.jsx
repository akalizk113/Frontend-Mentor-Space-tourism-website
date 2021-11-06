import { useState } from 'react';

import { destinations } from '../../constants';
import './Destination.scss';

const Destination = () => {
   const [activeElement, setActiveElement] = useState(destinations[0]);

   return (
      <div className="destination">
         <h1 className="content-heading">
            <span>01</span>
            Pick your destination
         </h1>

         <div className="content">
            <img
               className="content__img"
               src={activeElement.images.png}
               alt={activeElement.name}
            />
            <div className="content__content">
               <ul className="nav">
                  {destinations.map((destination, index) => (
                     <li
                        className={
                           activeElement.name === destination.name
                              ? 'nav__item active'
                              : 'nav__item'
                        }
                        key={index}
                        onClick={() => setActiveElement(destination)}
                     >
                        {destination.name}
                     </li>
                  ))}
               </ul>
               <h1 className="content__heading">{activeElement.name}</h1>
               <p className="content__desc content-desc">
                  {activeElement.description}
               </p>
               <div className="content__info info">
                  <div className="info__item">
                     <span className="info__name">AVG. DISTANCE</span>
                     <span className="info__info">
                        {activeElement.distance}
                     </span>
                  </div>
                  <div className="info__item">
                     <span className="info__name">Est. travel time</span>
                     <span className="info__info">{activeElement.travel}</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Destination;
