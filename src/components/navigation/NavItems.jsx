import { navItems } from 'components/navigation/navItemsData';

const NavItems = () => {
  const activeLink = 'bg-secondary1 hover:bg-inherit';

  return (
    <ul className="flex items-center md:gap-x-3 2xl:gap-x-6">
      {navItems.map((navItem) => {
        return (
          <li
            key={navItem.id}
            className={`flex gap-x-1 items-center hover:bg-secondary1 rounded-full w-fit py-1 px-3 cursor-pointer transition-all duration-300 ${
              navItem.name === 'patients' ? activeLink : ''
            }`}
          >
            <img
              src={navItem.icon}
              alt={navItem.name}
              className="w-[14px] h-[14px]"
            />{' '}
            <span className="text-sm font-bold">{navItem.name}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default NavItems;
