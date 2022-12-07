import "./Profile.css";
import profile from "../../jesuszvl.jpg";

const Profile = () => {
  return (
    <div className="profile-container">
      <img className="photo" src={profile} alt="Jesús Zavala" />
      <h1 className="name">Jesús Zavala</h1>
      <p className="title">Software Engineer</p>
      <div className="social">
        <a className="link" href="https://github.com/jesuszvl">
          <i className="bi bi-github icon"></i>
        </a>
        <a className="link" href="https://www.linkedin.com/in/jesuszvl/">
          <i className="bi bi-linkedin icon"></i>
        </a>
        <a className="link" href="https://twitter.com/jesuszvI">
          <i className="bi bi-twitter icon"></i>
        </a>
      </div>
    </div>
  );
};

export default Profile;
