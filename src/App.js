import "./App.css";
import photo from "./jesuszvl.jpg";

const App = () => {
  const renderHeader = () => {
    return (
      <div class="header">
        <img class="photo" src={photo} alt="Jesús Zavala"></img>
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
        <div class="summary">
          <h1 class="summary-header">About me</h1>
          <p>
            I've been working for 11+ years in the web development industry,
            currently focusing on creating Frontend applications with React
          </p>
        </div>
      </div>
    );
  };
  return (
    <div class="container">
      {renderHeader()}
      {renderSummary()}
    </div>
  );
};

export default App;
