import NavItems from './NavItems';
import ProfileNav from './ProfileNav';
import logo from 'assets/svg/TestLogo.svg';

const Navbar = () => {
  return (
    <header className="bg-primary capitalize xl:w-[95%] min-[1600px]:w-[1564px] h-[72px] sticky my-4 mx-auto rounded-full px-5">
      <nav className="flex justify-between items-center h-full w-full">
        <img src={logo} alt="logo" className="w-60 h-[48px]" />
        <NavItems />
        <ProfileNav />
      </nav>
    </header>
  );
};
export default Navbar;
