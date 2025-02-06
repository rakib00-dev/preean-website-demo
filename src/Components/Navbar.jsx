import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import OutsideClickHandler from 'react-outside-click-handler';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header
      className={`flex justify-center m-auto w-full items-center bg-white`}
    >
      <div className="w-[90%] p-4 md:w-4/5]">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a href="/#" className="block w-full py-5">
              <img
                src="https://designpro.qa/img/Designpro-logo-large.png"
                alt="logo"
                className=""
              />
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && 'navbarTogglerActive'
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-black focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-black "></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-black"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-black "></span>
              </button>
              <OutsideClickHandler
                onOutsideClick={() => {
                  setOpen(false);
                }}
              >
                <nav
                  // :className="!navbarOpen && 'hidden' "
                  id="navbarCollapse"
                  className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none  ${
                    !open && 'hidden'
                  } `}
                >
                  <ul className="block lg:flex">
                    <ListItem
                      NavLink="/#"
                      className={
                        'uppercase flex justify-center items-center gap-2  sm:font-bold'
                      }
                      onmouseover={() => setIsHovered(true)}
                      onmouseout={() => setIsHovered(false)}
                    >
                      solutions{' '}
                      <FaChevronDown
                        className={
                          isHovered
                            ? `rotate-180 transition-all`
                            : 'transition-all'
                        }
                      />
                    </ListItem>
                    <ListItem NavLink="/#" className={'uppercase sm:font-bold'}>
                      our work
                    </ListItem>
                    <ListItem NavLink="/#" className={'uppercase sm:font-bold'}>
                      pricing
                    </ListItem>
                    <ListItem NavLink="/#" className={'uppercase sm:font-bold'}>
                      resources
                    </ListItem>
                  </ul>
                </nav>
              </OutsideClickHandler>
            </div>
            <div className="hidden gap-4 justify-end pr-16 sm:flex lg:pr-0">
              <a
                href="/#"
                className="rounded-md px-7 py-3 text-base font-medium text-blue-500 hover:bg-blue-500/90"
              >
                Sign Up
              </a>
              <a
                href="/#"
                className="px-7 py-3 text-blue-500 border border-blue-500 rounded-md font-medium text-dark hover:text-blue-500"
              >
                Sign in
              </a>
              <a
                href="/#"
                className="rounded-md bg-blue-500 px-7 py-3 text-base font-medium text-white hover:bg-blue-500/90"
              >
                Book A Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const ListItem = ({
  children,
  NavLink,
  className,
  onmouseover,
  onmouseout,
}) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className={`transition-all flex py-2 text-base font-medium text-body-color hover:text-dark lg:ml-12 lg:inline-flex ${className}`}
          onMouseOver={onmouseover}
          onMouseOut={onmouseout}
        >
          {children}
        </a>
      </li>
    </>
  );
};

const HoverDropdown = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Dropdown
      title="Services"
      open={isHovered}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      renderToggle={(props) => <span {...props}>Services</span>}
    >
      <Menu.Item>Web Development</Menu.Item>
      <Menu.Item>App Development</Menu.Item>
      <Menu.Item>Design</Menu.Item>
    </Dropdown>
  );
};
