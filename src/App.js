import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Productlist from "./components/Productlist";
import Checkoutapp from "./components/Checkoutapp";
import Shopingbasket from "./components/Shopingbasket";
import React from "react";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={
          <React.Fragment>
            <Banner/>
            <Productlist/>
          </React.Fragment>
        }/>
        <Route exact path='/checkout' element={
          <React.Fragment>
            <Checkoutapp/>
            <Shopingbasket/>
          </React.Fragment>
        } />
      </Routes>
    </Router>
  );
}

export default App;
