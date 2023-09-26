import { Logo } from "../assets/images";
import {navLinks, mobNavLinks} from "../constants"
const Navigation = () => {
  return (
    <header className="xl:container shadow-md">
      <nav className="navbar">
        <div className="w-full">
          <a className="py-2" href="/">
            <img src={Logo} alt="BrandLogo" />
          </a>
          <div className="pl-10 hidden lg:flex">
            <ul className="menu menu-horizontal gap-12">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-[#717171] font-400 text-xl font-LeagueSpartan"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li><a className=" bg-primary text-white height-35 px-5 py-1 font-400 text-xl font-LeagueSpartan">Sign Up</a></li>
            <li><a className="text-[#717171] font-400 text-xl font-LeagueSpartan">Sign In</a></li>
            </ul>
          </div>
        </div>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost float-right lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-8 right-0 z-[1] p-2 shadow bg-base-100 w-52">
            {mobNavLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[#717171] font-400 text-xl font-LeagueSpartan"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navigation