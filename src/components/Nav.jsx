import {headerLogo, nikeHeaderViolet} from '../assets/images';
import {navLinks} from '../constants';
import SideButton from "./sideButton";

const Nav = () => {

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href=''> 
          <img 
            src={nikeHeaderViolet}
            alt="logo"
            width={100}
            height={25}
          />
        </a>
        <ul className="flex-1 flex               justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href}
               className="font-monts errat leading-normal text-lg text-slate-gray hover:bg-black w-40  py-2 px-5 rounded-lg hover:text-violet-300 active:opacity-70 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <SideButton/>
      </nav>
    </header>
  )
}

export default Nav