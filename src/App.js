import "./App.css";

import Profile from "./components/Profile/Profile";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="container">
      <Profile />
      <About />
      <Experience />
      <Footer />
    </div>
  );
};

export default App;
