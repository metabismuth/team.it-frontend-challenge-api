import HomeFeed from "./HomeFeed";
import "./Home.sass";

const Home = () => {
  return (
    <div className="Home">
      <div id="info">
        <p>Welcome to my keysmash blog.</p>
      </div>
      <HomeFeed/>
    </div>
  );
}

export default Home;
