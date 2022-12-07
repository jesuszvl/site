import "./App.css";

import Profile from "./components/Profile/Profile";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";

const App = () => {
  return (
    <div className="container">
      <Profile />
      <About />
      <Experience />
    </div>
  );
};

export default App;
