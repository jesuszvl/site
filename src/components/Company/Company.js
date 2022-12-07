import "./Company.css";

const Company = ({ company }) => {
  const { name, url, logo, time } = company;
  return (
    <div className="company">
      <a target="_blank" href={url} rel="noreferrer">
        <img className={name} src={logo} alt={name} />
      </a>
      <span className="time">{time}</span>
    </div>
  );
};

export default Company;
