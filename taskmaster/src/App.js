import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./CSS/style.css"

import Header from "./components/StaticUI/header";
import Navbar from "./components/StaticUI/navbar";
import Footer from "./components/StaticUI/footer";

import Home from "./components/home";
import List from "./components/list";
import Detail from "./components/detail";
import Create from "./components/create";


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <BrowserRouter><Routes>
          <Route exact path="/" element={<Home />}/>;
          <Route exact path="/list" element={<List />}/>;
          <Route exact path="/detail" element={<Detail />}/>;
          <Route exact path="/create" element={<Create />}/>;
      </Routes>
      </BrowserRouter>
      
      <Footer />
    </div>
  );
}

export default App;
