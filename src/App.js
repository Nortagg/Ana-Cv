import { Route, Routes } from "react-router-dom";
import "./app.styles.scss";
import Header from "./header.component/header";
import HomePage from "./home.component/home";
import AboutPage from "./about.component/about";
import ContactPage from "./contact.component/contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about-page" element={<AboutPage />}></Route>
        <Route path="/contact-page" element={<ContactPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
