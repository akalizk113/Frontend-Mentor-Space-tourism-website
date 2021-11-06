import dataModule from '../assets/data.json';

const navItems = [
   {
      label: 'home',
      path: '/',
   },
   {
      label: 'destination',
      path: '/destination',
   },
   {
      label: 'crew',
      path: '/crew',
   },
   {
      label: 'technology',
      path: '/technology',
   },
];

const destinations = dataModule.destinations;
const crews = dataModule.crew;
const technologys = dataModule.technology;

export { navItems, destinations, crews, technologys };
