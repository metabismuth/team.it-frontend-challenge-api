import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";

const NotFound = () => {
  return (<>
    <Header/>
    <Navigation/>
    <div className="NotFound">
      <h1>404</h1>
      <p>Could not find the page you requested!</p>
      <p>Sorry!</p>
    </div>
  </>);
}

export default NotFound;
