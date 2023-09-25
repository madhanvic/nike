import { navLinks } from "../constants/index";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
const Nav = () => {
  return (
    <div>
      <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
          <a href="/">
            <img src={headerLogo} alt="Logo" width={130} height={29} />
          </a>
          <ul className="flex-1 flex justify-center items-start gap-16 max-lg:hidden">
            {navLinks.map((navLink) => {
              return (
                <li key={navLink.label}>
                  <a
                    href={navLink.href}
                    className="font-monserrat leading-normal text-lg text-slate-gray"
                  >
                    {navLink.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="hidden max-lg:block">
            <img src={hamburger} alt="Hamburger" width={25} height={25} />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
