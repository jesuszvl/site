import "./App.css";
import ieebc from "./ieebc.png";
import timbox from "./timbox.png";
import srax from "./srax.png";
import iconos from "./iconos.png";
import gametime from "./gametime.png";
import Profile from "./components/Profile/Profile";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";

const EXPERIENCE = [
  {
    name: "gametime",
    logo: gametime,
    time: "Mar 2022 - Present",
    url: "https://gametime.co/",
  },
  {
    name: "ieebc",
    logo: ieebc,
    time: "Nov 2019 - Mar 2022",
    url: "https://ieebc.mx/",
  },
  {
    name: "timbox",
    logo: timbox,
    time: "Feb 2018 - Dec 2018",
    url: "https://timbox.com.mx/",
  },
  {
    name: "srax",
    logo: srax,
    time: "Oct 2016 - Feb 2018",
    url: "https://srax.mx/",
  },
  {
    name: "iconos",
    logo: iconos,
    time: "Dec 2010 - Sep 2016",
    url: "https://iconos.mx/",
  },
];

const App = () => {
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
            <p class="experience-description">
              Quick summary of places I contributed delivering high quality code
            </p>
            {EXPERIENCE.map((company) => {
              const { name, logo, url, time } = company;
              return (
                <div class="company">
                  <a target="_blank" href={url} rel="noreferrer">
                    <img class={name} src={logo} alt={name} />
                  </a>
                  <span class="time">{time}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div class="container">
      <Profile />
      <About />
      <Experience />
      {renderSummary()}
      {renderExperience()}
    </div>
  );
};

export default App;
