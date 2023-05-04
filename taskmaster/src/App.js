import { Route, Routes } from 'react-router-dom';
import React from 'react';
import "./CSS/style.css"

import Header from "./components/StaticUI/header";
import Navbar from "./components/StaticUI/navbar";
import Footer from "./components/StaticUI/footer";

import Home from "./components/home";
import List from "./components/list";
import Detail from "./components/detail";
import Create from "./components/create";

import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";

import { history } from './components/Helpers/History';
import { AuthContextProvider } from './components/Context/AuthContext';
import ProtectedRoutes from './components/Helpers/ProtectedRoutes';
import Preferences from "./components/UserSpecific/Preferences";

import CreateDB from './components/DBSTUFF/createDB';





function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <AuthContextProvider>
        <Routes history={history}>
          <Route exact path="/init" element={<CreateDB />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/list" element={<List />} />
          <Route exact path="/detail" element={<Detail />} />
          <Route exact path="/create" element={<Create />} />
          <Route path="/login" element={<Login destination="login" />} />
          <Route path="/signup" element={<Signup destination="signup" />} />
          <Route path="/preferences"
            element={<ProtectedRoutes><Preferences destination="preferences" /></ProtectedRoutes>}
          />
        </Routes>
      </AuthContextProvider>
      <Footer />
    </div>
  );
}

export default App;
