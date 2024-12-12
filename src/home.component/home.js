import "./home.styles.scss";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="img-frame">
        <img className="ana-picture" src="/pictures/ana.jpg" alt="me" />
        <span className="decoration"></span>
      </div>
      <span className="welcome-txt">Hi, I'm Ana 👋</span>
      <h1 className="title">
        Passionate Journalist: Uncovering Stories with Dedication
      </h1>
    </div>
  );
};

export default HomePage;
