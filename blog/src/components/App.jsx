import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./LayoutHome/Home";
import Post from "./LayoutPost/Post";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/posts/:slug" element={<Post/>}/>
          <Route path="*" element={<NotFound/>} />
          {/* TODO <Route path="/posts/:slug" element={<Post/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
