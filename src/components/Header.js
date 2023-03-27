import Logo from "../assets/images/FoodVilla.png";
import { Link } from "react-router-dom";
//Named export
export const Title = () => (
  <a href="/">
    <img className="w-24" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  return (
    <div className="flex p-2 m-2 justify-between shadow-md bg-gray-300">
      <Title />
      <div className="">
        <ul className="flex">
          <li className="px-2 font-bold">
            <Link to="/">Home </Link>
          </li>
          <li className="px-2 font-bold">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2 font-bold">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2 font-bold">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header; //default export
