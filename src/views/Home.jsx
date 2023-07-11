import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigateTo = useNavigate();

  function create() {
    const code = Math.floor(Math.random() * 999999);
    navigateTo(`/game/${code}`);
  }

  function join() {
    const code = document.getElementById("code");
    navigateTo(`/game/${code}`);
  }
  return (
    <div className="home">
      <h2 className="home-title">Welcome to Connect Four!</h2>
      <button className="btn" onClick={create}>
        Create Game
      </button>
      <input type="text" name="" id="code" placeholder="Enter Game code" />
      <button className="btn" onClick={join}>
        Join
      </button>
    </div>
  );
}

export default Home;
