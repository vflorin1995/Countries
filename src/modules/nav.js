import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft, AiFillSetting } from 'react-icons/ai';

const Nav = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <AiOutlineArrowLeft onClick={() => navigate(-1)} />
      <div className="navTitle">
        Where would you like to go?
      </div>
      <AiFillSetting />
    </nav>
  );
};
export default Nav;
