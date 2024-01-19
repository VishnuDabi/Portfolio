import "./App.css";
// import About from "./Components/About";
// import ContactNew from "./Components/ContactNew";

// import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomeNew from "./Components/HomeNew";
// import LatestNews from "./Components/LatestNews";
// import Portfolio from "./Components/Portfolio";
// import ScrollToTop from "./Components/ScrollToTop";
// import Service from "./Components/Service";
import Login from "./Components/LoginPage/Login";
import SigninPage from "./Components/SigninPage/SigninPage";
import Protected from "./Components/SigninPage/Protected";
import PortfolioApp from "./Components/PortfolioApp/PortfolioApp";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      {/* <SigninPage /> */}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header />
              <HomeNew />
            </>
          }
        />
        <Route exact path="/signin" element={<SigninPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="home" element={<Protected Component={PortfolioApp} />} />
        {/* <Route
          path="/ho"
          element={
            <>
              <Header />

              <HomeNew />
              <About />
              <Service />
              <Portfolio />
              <LatestNews />
              <ContactNew />
              <Footer />
              <ScrollToTop />
            </>
          }
        ></Route> */}
        <Route path="*" element={<div>not found page</div>} />
      </Routes>
    </>
  );
}

export default App;
