import { Link } from "react-router-dom";

export default function Test() {
  return (
    <div className="error--container">
      <h1>404 - Error.</h1>
      <Link to="/">Home</Link>
    </div>
  );
}