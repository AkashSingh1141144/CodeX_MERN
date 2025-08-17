import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white p-4 flex justify-between gap-4 ">
      <ul className="flex justify-between gap-4 w-1/3 mx-auto">
	  <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
	  <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/admin">Admin</Link></li>
	  </ul>
    </nav>
  );
}
