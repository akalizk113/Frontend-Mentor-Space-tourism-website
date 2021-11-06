import { useState } from 'react';

import './Technology.scss';

import { technologys } from '../../constants';

const Technology = () => {
   console.log(document.documentElement.offsetWidth);
   const [activeTech, setActiveTech] = useState(technologys[0]);
   return (
      <div className="technology">
         <div className="content">
            <h1 className="content-heading">
               <span>03</span>
               SPACE LAUNCH 101
            </h1>
            <nav className="content__control">
               {technologys.map((tech, index) => (
                  <div
                     key={index}
                     className={
                        tech === activeTech
                           ? 'content__control-item active'
                           : 'content__control-item'
                     }
                     onClick={() => setActiveTech(tech)}
                  >
                     {index + 1}
                  </div>
               ))}
            </nav>
            <div className="tech">
               <h2 className="tech__title">THE TERMINOLOGY…</h2>
               <h1 className="tech__name">{activeTech.name}</h1>
               <p className="tech__desc content-desc">
                  {activeTech.description}
               </p>
            </div>
         </div>

         <img
            className="technology-img"
            src={
               document.documentElement.offsetWidth < 1440
                  ? activeTech.images.landscape
                  : activeTech.images.portrait
            }
            alt={activeTech.name}
         />
      </div>
   );
};

export default Technology;
