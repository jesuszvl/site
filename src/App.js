import "./App.css";
import profile from "./jesuszvl.jpg";
import ieebc from "./ieebc.png";
import timbox from "./timbox.png";
import srax from "./srax.png";
import iconos from "./iconos.png";

const App = () => {
  const renderHeader = () => {
    return (
      <div class="header">
        <img class="photo" src={profile} alt="Jesús Zavala" />
        <h1 class="name">Jesús Zavala</h1>
        <p class="title">Software Engineer</p>
        <div class="social">
          <a class="link" href="https://github.com/jesuszvl">
            <i class="bi bi-github icon"></i>
          </a>
          <a class="link" href="https://www.linkedin.com/in/jesuszvl/">
            <i class="bi bi-linkedin icon"></i>
          </a>
          <a class="link" href="https://twitter.com/jesuszvI">
            <i class="bi bi-twitter icon"></i>
          </a>
        </div>
      </div>
    );
  };

  const renderSummary = () => {
    return (
      <div class="section">
        <div class="summary-container">
          <div class="summary">
            <h1 class="summary-header">About me</h1>
            <p>Hello! 👋🏼 I'm Jesús. </p>
            <p>
              I've been working for 11+ years in the web development industry,
              currently focusing on creating Frontend applications with React
              and Javascript but also used to work with other languages like
              Python, Ruby and PHP.
            </p>
          </div>
        </div>
      </div>
    );
  };

  const renderExperience = () => {
    return (
      <div class="section">
        <div class="experience-container">
          <div class="experience">
            <h1 class="experience-header">Experience</h1>
            <p>
              Quick summary of places I contributed to deliver high quality code
            </p>
            <div class="company">
              <img class="ieebc" src={ieebc} alt="IEEBC" />
              <span class="time">Nov 2019 - Mar 2022</span>
            </div>
            <div class="company">
              <img class="timbox" src={timbox} alt="Timbox" />
              <span class="time">Feb 2018 - Dec 2018</span>
            </div>
            <div class="company">
              <img class="srax" src={srax} alt="SRAX" />
              <span class="time">Oct 2016 - Feb 2018</span>
            </div>
            <div class="company">
              <img class="iconos" src={iconos} alt="Iconos" />
              <span class="time">Dec 2010 - Sep 2016</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div class="container">
      {renderHeader()}
      {renderSummary()}
      {renderExperience()}
    </div>
  );
};

export default App;
