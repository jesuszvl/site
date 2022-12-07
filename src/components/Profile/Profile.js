import "./Profile.css";
import profile from "../../jesuszvl.jpg";

const Profile = () => {
  return (
    <div class="profile-container">
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

export default Profile;
