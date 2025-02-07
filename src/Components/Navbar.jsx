import React, { useEffect, useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { RiMenu3Fill } from 'react-icons/ri';
import OutsideClickHandler from 'react-outside-click-handler';

const Navbar = () => {
  const cssStyle = {
    blur: {
      position: 'absolute',
      height: '100%',
      left: 0,
      width: '100%',
      background: '#ffffff42',
      filter: 'blur(42px)',
      zIndex: '-1',
      backdropFilter: 'blur(2px)',
    },
  };

  // window onLoad Entry
  const navBarFix = useRef();
  const header_section = useRef();

  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('load', () => {
      if (navBarFix.current && header_section.current) {
        navBarFix.current.style.top = '0';
      }
    });

    // header NavBar onScroll
    window.addEventListener('scroll', () => {
      const scrollValue = window.scrollY;
      if (scrollValue >= 82) {
        if (navBarFix.current) {
          navBarFix.current.style.top = '0';
          navBarFix.current.style.position = 'sticky';
        }
      } else {
        if (navBarFix.current) {
          navBarFix.current.style.top = '0';
          navBarFix.current.style.position = null;
        }
      }
    });
  }, []);

  return (
    <>
      <div
        className="m-auto transition-all w-full h-20 relative top-0 z-20"
        id="navBarFix"
        ref={navBarFix}
      >
        <nav
          id="nav"
          className="relative flex justify-center items-center px-6 py-4 bg-white/60 p-4 w-full h-20 m-auto overflow-hidden lg:py-0.5"
        >
          <div className={''} style={cssStyle.blur}></div>{' '}
          <div className="flex justify-center items-center mx-10 w-fit gap-18 min-[375px]:gap-20 min-[440px]:gap-22 min-[550px]:gap-35 min-[695px]:gap-45 md:gap-60 lg:gap-80 xl:gap-90 2xl:gap-125">
            <div
              id="logo"
              className="text-md font-medium w-32 md:w-64 md:text-lg"
            >
              <a href="#" className="flex items-center">
                <img
                  src="https://designpro.qa/img/Designpro-logo-large.png"
                  alt="logo"
                  className="w-60"
                />
              </a>
            </div>

            {/* large screen */}
            <div
              id="menu"
              className="hidden justify-between gap-10 items-center w-full lg:flex"
            >
              <ul className="flex justify-center items-center gap-7">
                <NavLists />
              </ul>
              <div id="contact">
                <div className="flex flex-row gap-4 justify-end pr-16 sm:flex lg:pr-0">
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
            <div
              className="lg:hidden"
              onClick={() => {
                setIsNavOpen((prev) => !prev);
              }}
            >
              <RiMenu3Fill className="text-3xl" />
            </div>
          </div>
        </nav>
      </div>

      {/* dropdown menu */}
      <div className="hidden flex-wrap w-[40rem] lg:flex">
        <DropDown />
        <DropDown />
        <DropDown />
        <DropDown />
        <DropDown />
        <DropDown />
        <DropDown />
        <DropDown />
        <DropDown />
        <DropDown />
        <DropDown />
        <DropDown />
      </div>

      {/* small screen */}
      <OutsideClickHandler
        onOutsideClick={() => {
          setIsNavOpen(false);
        }}
      >
        <div
          id="menu"
          className={
            isNavOpen
              ? 'fixed float-end top-20 flex justify-start items-center flex-col w-full h-screen p-5 gap-10 border rounded-md bg-white m-auto scale-x-100 z-1 lg:hidden'
              : 'hidden'
          }
        >
          <ul className="flex justify-start items-start flex-col leading-12">
            <NavListsSmallScreen />
            <div className="flex flex-col-reverse gap-4 justify-end pr-16 sm:flex lg:pr-0">
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
          </ul>
        </div>
      </OutsideClickHandler>
    </>
  );
};

export default Navbar;

const NavLists = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <ListItem
        NavLink="/#"
        className={
          'uppercase flex justify-start items-center gap-2  text-sm sm:font-bold'
        }
        onmouseover={() => setIsHovered(true)}
        onmouseout={() => setIsHovered(false)}
        onclick={() => setIsHovered((prev) => !prev)}
      >
        solutions{' '}
        <FaChevronDown
          className={isHovered ? `rotate-180 transition-all` : 'transition-all'}
        />
      </ListItem>
      <ListItem NavLink="/#" className={'uppercase text-sm sm:font-bold'}>
        our work
      </ListItem>
      <ListItem NavLink="/#" className={'uppercase text-sm sm:font-bold'}>
        pricing
      </ListItem>
      <ListItem NavLink="/#" className={'uppercase text-sm sm:font-bold'}>
        resources
      </ListItem>
    </>
  );
};

const NavListsSmallScreen = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <ListItem
        NavLink="/#"
        className={
          'uppercase flex justify-start items-center gap-2 sm:font-bold'
        }
        onmouseover={() => setIsHovered(true)}
        onmouseout={() => setIsHovered(false)}
        onclick={() => setIsHovered((prev) => !prev)}
      >
        solutions{' '}
        <FaChevronDown
          className={isHovered ? `rotate-180 transition-all` : 'transition-all'}
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
    </>
  );
};

const ListItem = ({
  className,
  NavLink,
  onmouseover,
  onmouseout,
  children,
  onclick,
}) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className={`relative py-7 font-semibold cursor-pointer transition-all duration-300 uppercase hover:text-gray-500 ${className}`}
          onMouseOver={onmouseover}
          onMouseOut={onmouseout}
          onClick={onclick}
        >
          {children}
        </a>
      </li>
      {/* <li
        className={`relative py-7 text-sm font-semibold cursor-pointer transition-all duration-300 hover:text-yellow-500 md:text-lg ${className}`}
      >
        <a href="#projects">Projects</a>
      </li>
      <li
        className={`relative py-7 text-sm font-semibold cursor-pointer transition-all duration-300 hover:text-yellow-500 md:text-lg ${className}`}
      >
        <a href="#services-section">Services</a>
      </li> */}
    </>
  );
};

const DropDown = ({
  title = 'web design',
  src = 'https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/64ad4265f27f2a2ecddd973e_social-media%20(1)%201.svg',
  to = '#',
  className,
}) => {
  return (
    <>
      <a
        href={to}
        className={`flex gap-2 p-4 justify-center items-center w-fit ${className}`}
      >
        <div className="bg-gray-500 ">
          <img src={src} alt={title} className="px-6" />
        </div>
        <h5 className="uppercase w-fit">{title}</h5>
      </a>
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
