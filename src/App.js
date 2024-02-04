import "./App.css";

import Header from "./Components/Header";
import HomeNew from "./Components/HomeNew";

import Login from "./Components/LoginPage/Login";
import SigninPage from "./Components/SigninPage/SigninPage";
import Protected from "./Components/SigninPage/Protected";
import PortfolioApp from "./Components/PortfolioApp/PortfolioApp";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
function App() {
  return (
    <>

      <Routes>
        <Route
          exact
          path="/home"
          element={
            <>
              <Header />
              <HomeNew />
              <Footer />
            </>
          }
        />
        <Route exact path="/signin" element={<SigninPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/" element={<Protected Component={PortfolioApp} />} />

        <Route path="*" element={<div>not found page</div>} />
      </Routes>
    </>
  );
}

export default App;