const Header = ({ user }) => {
  return (
    <header>
      <div className="info-container">
        <div className="user-info-container">
          <h1>username</h1>
          <p>
            handle
            <span className="threads-info">threds.net</span>
          </p>
        </div>
        <div className="img-container">
          <img src="" alt="progile avatar" />
        </div>
      </div>
      <p></p>
      <div className="sub-info-container">
        <p className="sub-text">
          followers · <a href="">link</a>
        </p>
      </div>

      <button
        className="primary"
        onClick={() => navigator.clipboard.writeText("I am an URL")}
      >
        Share Profile
      </button>
      <div className="button-container">
        <button className="current">Threads</button>
        <button>Replies</button>
      </div>
    </header>
  );
};
export default Header;
