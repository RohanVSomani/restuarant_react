import { Link } from "react-router-dom";
import '../App.css';
const Home = () => {
  return (
    <div className="home">
      <h1>Choose Option</h1>
      <div>
        <Link to="/admin">
          <button>Admin</button>
        </Link>
        <Link to="/takeaway">
          <button>Takeaway</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
