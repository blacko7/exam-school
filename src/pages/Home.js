import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home--container">
      
      <p><Link to="/counter">Custom Counter</Link></p>
    </div>
  );
}