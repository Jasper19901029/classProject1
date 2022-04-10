import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Homepages from "./pages/Homepages";
import About from "./pages/About";
//  react-router-dom version 6.0.2
import { Routes, Route } from "react-router-dom";
import "./styles/style.css";
/**react-router-dom version 5
 * version 5 使用Switch
 * Route 內要寫exact , 確保網址完全一樣才會進入
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Homepages />
        </Route>
        <Route path="/" exact>
          <About />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}
*/

//  react-router-dom version 6.0.2
// 最新版是將pages 寫在element 內, 不用加exact
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Homepages />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
