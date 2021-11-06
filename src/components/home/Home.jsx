import './Home.scss';
const Home = () => {
   return (
      <div className="home">
         <div className="content">
            <h5 className="content__sub-heading">SO, YOU WANT TO TRAVEL TO</h5>
            <h1 className="content__heading">SPACE</h1>
            <p className="content__desc content-desc">
               Let’s face it; if you want to go to space, you might as well
               genuinely go to outer space and not hover kind of on the edge of
               it. Well sit back, and relax because we’ll give you a truly out
               of this world experience!
            </p>
         </div>

         <div className="home__btn">
            <button>explore</button>
         </div>
      </div>
   );
};

export default Home;
