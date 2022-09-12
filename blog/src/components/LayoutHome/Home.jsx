import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import HomeFeed from "./HomeFeed";
import "./Home.sass";

const Home = () => {
  return (<>
    <Header/>
    <Navigation/>
    <div className="Home">
      <div id="info">
        <p>Welcome to the Pumpkin Patch blog!</p>
      </div>
      <HomeFeed />
    </div>
  </>);
}

export default Home;
