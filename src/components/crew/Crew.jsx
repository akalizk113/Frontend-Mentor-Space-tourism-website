import { useState } from 'react';

import './Crew.scss';

import { crews } from '../../constants';

const Crew = () => {
   const [activeCrew, setActiveCrew] = useState(crews[0]);
   return (
      <div className="crew">
         <div className="crew__content">
            <h1 className="content-heading">
               <span>02</span>
               Meet your crew
            </h1>
            <div className="crew__info">
               <h2 className="crew__role">{activeCrew.role}</h2>
               <h1 className="crew__name">{activeCrew.name}</h1>
               <div className="crew__bio content-desc">{activeCrew.bio}</div>
            </div>

            <ul className="crew__control">
               {crews.map((crew, index) => (
                  <li
                     key={index}
                     className={
                        crew === activeCrew
                           ? 'crew__control-item active'
                           : 'crew__control-item'
                     }
                     onClick={() => setActiveCrew(crew)}
                  ></li>
               ))}
            </ul>
         </div>
         <img src={activeCrew.images.png} alt="" className="crew__img" />
      </div>
   );
};

export default Crew;
