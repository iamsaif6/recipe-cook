import user from '../../assets/user.png';
import './Header.css';
// import { IoIosSearch } from 'react-icons/io';
const Header = () => {
  return (
    <>
      <nav className="flex items-center justify-between mb-12">
        <h3 className="text-2xl font-bold text-[#150B2B]">Recipe Calories</h3>
        <ul className="text-[#150b2bb3] text-[16px] flex items-center gap-11">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Recipes</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Search</a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <input className="bg-[#150b2b0d] py-3 outline-none px-6 rounded-[50px]" type="text" placeholder="Search" name="" id="" />
          <img className="h-[48px]" src={user} alt="user" />
        </div>
      </nav>
      <header className="rounded-[24px] text-white py-[130px]">
        <div className="max-w-[890px] mx-auto text-center">
          <h1 className="text-[52px] font-bold mb-6">Discover an exceptional cooking class tailored for you!</h1>
          <p className="text-[18px]">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an
            exceptionally well world-class Programmer.
          </p>
        </div>
        <div className="flex items-center justify-center gap-6 mt-10">
          <a href="#" className="button">
            Explore Now
          </a>
          <a href="#" className="button outline-btn">
            Our Feedback
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
