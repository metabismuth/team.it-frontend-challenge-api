import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "../LayoutHome/Home";
import Post from "../LayoutPost/Post";
import "./App.css";

function App() {
  return (
    <div className="App"> 
      <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/post/:postId" element={<Post/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
