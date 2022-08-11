import '../Nav/Nav.css';
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <nav className='NavLink list-unstyled'>
        <li className=''>
          <Link className="listNav " to="/about">
            AboutUs
          </Link>
        </li>

        <li>
          <Link className="listNav" to="/shops">
            Shops
          </Link>
        </li>
        <li>
          <Link className="listNav" to="/partnership">
            Partnership
          </Link>
        </li>
        <li>
          <Link className="listNav" to="/contact">
            Contact
          </Link>
        </li>
    </nav>
  );
};

export default Nav;
