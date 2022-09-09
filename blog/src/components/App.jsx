import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from "./Header/Header";
import Home from "./LayoutHome/Home";
import Post from "./LayoutPost/Post";
import Navigation from "./Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/posts/:post" element={<Post/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;