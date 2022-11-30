import { NavLink } from 'react-router-dom';
import { AiOutlineArrowLeft, AiFillSetting } from 'react-icons/ai';

const Nav = () => (
  <nav>
    <NavLink to="/">
      <AiOutlineArrowLeft />
    </NavLink>
    <div className="navTitle">
      Where would you like to go?
    </div>
    <AiFillSetting />
  </nav>
);

export default Nav;
