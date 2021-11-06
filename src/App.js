import { Header, Home, Destination, Crew, Technology } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.scss';

function App() {
   return (
      <Router>
         <div className="App container">
            <Header />
            <Routes>
               <Route path="/" exact element={<Home />}></Route>
               <Route path="/destination" element={<Destination />} />
               <Route path="/crew" element={<Crew />} />
               <Route path="technology" element={<Technology />} />
            </Routes>
         </div>
      </Router>
   );
}

export default App;
