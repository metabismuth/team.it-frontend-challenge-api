import Navigation from "../Navigation/Navigation";
import HomeFeed from "./HomeFeed";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <Navigation/>
      This is the homepage!
      <HomeFeed/>
    </div>
  );
}

export default Home;
