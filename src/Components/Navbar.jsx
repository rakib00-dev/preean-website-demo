import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { RiCloseFill, RiMenu3Fill } from 'react-icons/ri';
import OutsideClickHandler from 'react-outside-click-handler';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isResourceHovered, setIsResourceHovered] = useState(false);

  // large screen nav list
  const NavLists = () => {
    return (
      <>
        <ListItem
          navLink={'#'}
          className={
            'capitalize flex justify-start items-center gap-2 text-sm sm:font-bold'
          }
          onmouseover={() => setIsHovered(true)}
          onmouseout={() => setIsHovered(false)}
          onclick={() => setIsHovered((prev) => !prev)}
          style={{ color: '#0b3558' }}
        >
          solutions{' '}
          <FaChevronDown
            className={
              isHovered ? `rotate-180 transition-all` : 'transition-all'
            }
          />
        </ListItem>
        <ListItem
          navLink="/our-work"
          className={
            'capitalize flex justify-start items-center gap-2 text-sm sm:font-bold'
          }
        >
          our work
        </ListItem>
        <ListItem
          navLink="/pricing"
          className={'capitalize  text-sm sm:font-bold'}
        >
          pricing
        </ListItem>
        <ListItem
          navLink="#"
          className={
            'capitalize  flex justify-start items-center gap-2  text-sm sm:font-bold'
          }
          onmouseover={() => setIsResourceHovered(true)}
          onmouseout={() => setIsResourceHovered(false)}
          onclick={() => setIsResourceHovered((prev) => !prev)}
          style={{ color: '#0b3558' }}
        >
          resources{' '}
          <FaChevronDown
            className={
              isResourceHovered ? `rotate-180 transition-all` : 'transition-all'
            }
          />
        </ListItem>
      </>
    );
  };

  // small screen nav list
  const NavListsSmallScreen = () => {
    return (
      <>
        <ListItem
          navLink="#"
          // className={
          //   'capitalize flex justify-start items-center gap-2 sm:font-bold'
          // }
          smallClassName={({ isActive }) =>
            isActive
              ? `capitalize flex justify-start items-center gap-2 sm:font-bold`
              : `relative text-xl font-bold cursor-pointer text-black transition-all duration-300 capitalize lg:text-sm hover:text-gray-500`
          }
          style={{ padding: ' 0' }}
          onclick={() => setIsHovered((prev) => !prev)}
        >
          solutions{' '}
          <FaChevronDown
            className={
              isHovered ? `rotate-180 transition-all` : 'transition-all'
            }
          />
        </ListItem>
        <div
          className={
            isHovered
              ? `transition-all relative justify-center items-center place-items-center m-auto scale-y-100`
              : 'transition-all scale-y-0 hidden'
          }
          onClick={() => setIsHovered((prev) => !prev)}
        >
          <div
            className="flex rounded-xl bg-white top-[48px] pb-4 mb-4 right-[30%] m-auto flex-col justify-start items-start flex-wrap shadow-xl w-[18rem] lg:hidden"
            style={{ zIndex: 1122 }}
          >
            {/* <DropDown
              to="/social-media"
              title="social media"
              src="/images/navbar/social-media.svg"
            /> */}
            <DropDown
              to="graphic-design"
              title="graphic design"
              src="/images/navbar/graphic-design.svg"
            />
            <DropDown
              to="/custom-illustrations"
              title="Custom Illustrations"
              src="/images/navbar/design-blog.png"
            />
            <DropDown
              to="presentation-design"
              title="Presentation Design"
              src="/images/navbar/web-design.svg"
            />
            <DropDown
              to="motion-graphics"
              title="motion graphics"
              src="/images/navbar/motion-graphic.png"
            />
            <DropDown
              to="video-editing"
              title="video editing"
              src="/images/navbar/video-editing.png"
            />

            {/* <Link
              to="/#"
              className="transition-all px-3 py-3 ml-4 mt-4 bg-blue-100/50 border-1/80 text-blue-500 font-bold rounded-md text-sm hover:border-1 hover:bg-white"
            >
              ENTIRE SCOPE OF SERVICE
            </Link> */}
          </div>
        </div>
        <ListItem
          navLink="/our-work"
          smallClassName={({ isActive }) =>
            isActive
              ? `capitalize text-blue-500 sm:font-bold `
              : `capitalize  sm:font-bold `
          }
          onclick={() => {
            setIsNavOpen((prev) => !prev);
          }}
        >
          our work
        </ListItem>
        <ListItem
          navLink="/pricing"
          smallClassName={({ isActive }) =>
            isActive
              ? `capitalize text-blue-500 sm:font-bold `
              : `capitalize  sm:font-bold `
          }
          onclick={() => {
            setIsNavOpen((prev) => !prev);
          }}
        >
          pricing
        </ListItem>
        <ListItem
          navLink="#"
          smallClassName={({ isActive }) =>
            isActive
              ? 'capitalize flex justify-start items-center gap-2 sm:font-bold'
              : `'capitalize flex justify-start items-center gap-2 sm:font-bold'`
          }
          style={{ padding: ' 0' }}
          onclick={() => {
            setIsResourceHovered((prev) => !prev);
          }}
        >
          resources{' '}
          <FaChevronDown
            className={
              isResourceHovered ? `rotate-180 transition-all` : 'transition-all'
            }
          />
        </ListItem>

        <div
          className={
            isResourceHovered
              ? `transition-all relative justify-start items-start place-items-center m-auto scale-y-100`
              : 'transition-all scale-y-0 hidden'
          }
          onClick={() => setIsResourceHovered((prev) => !prev)}
        >
          <div
            className="flex rounded-xl pb-4 mb-4 bg-white top-[48px] right-[30%] m-auto flex-col justify-center items-center flex-wrap shadow-xl w-[18rem] lg:hidden"
            style={{ zIndex: 1122 }}
          >
            <DropDown
              to="/watch-demos"
              title="Watch Demos"
              src="/images/navbar/video-editing.png"
              className={'w-full'}
            />
            <DropDown
              to="/guides"
              title="guides"
              src="/images/navbar/guides.png"
              className={'w-full'}
            />
            <DropDown
              to="/design-blogs"
              title="design blogs"
              src="/images/navbar/design-blog.png"
              className={'w-full'}
            />
            {/* <DropDown
              title="case studies"
              src="/images/navbar/case-study.png"
              className={'w-full'}
            /> */}
          </div>
        </div>
      </>
    );
  };

  const ListItem = ({
    className,
    smallClassName,
    navLink,
    onmouseover,
    onmouseout,
    children,
    onclick,
    style,
  }) => {
    return (
      <>
        <li className="pb-5 left-0 lg:pb-0">
          <NavLink
            to={navLink}
            // className={`relative text-xl font-bold cursor-pointer transition-all duration-300 capitalize  lg:text-sm hover:text-gray-500 ${className}`}
            style={style}
            onMouseOver={onmouseover}
            onMouseOut={onmouseout}
            onClick={onclick}
            className={
              smallClassName
                ? smallClassName
                : ({ isActive }) =>
                    isActive
                      ? `relative text-xl font-bold cursor-pointer transition-all duration-300 capitalize text-blue-500 lg:text-sm hover:text-gray-500 ${className}`
                      : `relative text-xl font-bold cursor-pointer transition-all duration-300 capitalize  lg:text-sm hover:text-gray-500 ${className}`
            }
          >
            {children}
          </NavLink>
        </li>
      </>
    );
  };

  const DropDown = ({
    title = 'web design',
    src,
    to = '#',
    className,
    imgClassName,
  }) => {
    return (
      <>
        <NavLink
          to={to}
          className={({ isActive }) =>
            isActive
              ? `flex gap-2 p-4 justify-start items-center w-full rounded-md DropItemActive ${className} ${
                  src ? '' : 'pl-10 py-6 underline'
                }`
              : `flex gap-2 p-4 justify-start items-center w-full rounded-md DropItemHover ${className} ${
                  src ? '' : 'pl-10 py-6 underline'
                }`
          }
          // className={`flex gap-2 p-4 justify-start items-center w-full rounded-md DropItemHover ${className} ${
          //   src ? '' : 'pl-10 py-6 underline'
          // }`}
          onClick={() => {
            setIsNavOpen(false);
          }}
        >
          {src ? (
            <img
              src={src}
              alt={title}
              className={`p-3 rounded bg-gray-100/80 h-[43.98px] ${imgClassName}`}
              loading="lazy"
            />
          ) : (
            <></>
          )}
          <h5 className="capitalize text-sm w-fit font-bold">{title}</h5>
        </NavLink>
      </>
    );
  };

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
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          type: 'spring',
        }}
        className="mx-auto transition-all bg-white/60 w-full h-20 relative top-0 border-b-1  border-gray-200 z-20"
        id="navBarFix"
        ref={navBarFix}
      >
        <nav
          id="nav"
          className="relative flex justify-between items-center px-6 md:px-12 py-4 max-w-7xl border-b-1 border-gray-200 bg-white/60 p-4 w-full h-20 m-auto lg:py-0.5"
        >
          <div className={''} style={cssStyle.blur}></div>{' '}
          <div
            id="logo"
            className="text-md font-medium w-32 md:w-64 md:text-lg"
          >
            <Link to="/" className="flex items-center">
              <img
                src="https://designpro.qa/img/Designpro-logo-large.png"
                alt="logo"
                className="w-60"
                loading="lazy"
              />
            </Link>
          </div>
          {/* large screen */}
          <div
            id="menu"
            className="hidden justify-end items-center w-full lg:flex"
          >
            <ul className="flex justify-center mx-auto items-center gap-5">
              <NavLists />
            </ul>
            <div id="contact">
              <div className="flex flex-row gap-4 justify-end pr-16 sm:flex lg:pr-0">
                <Link
                  to="/#"
                  className="transition-all px-7 py-3 text-blue-500 border border-blue-500 rounded-md font-medium text-dark hover:text-white hover:bg-blue-300"
                >
                  Sign in
                </Link>
                <Link
                  to="/book-a-call"
                  className="transition-all rounded-md bg-blue-500 px-7 py-3 text-base font-medium text-white hover:bg-blue-500/90"
                >
                  Book A Call
                </Link>
              </div>
            </div>
          </div>
          <div
            className={!isNavOpen ? `block lg:hidden` : 'hidden lg:hidden'}
            onClick={() => {
              setIsNavOpen((prev) => !prev);
            }}
          >
            <RiMenu3Fill className="text-3xl" />
          </div>
          <div
            className={isNavOpen ? `block lg:hidden` : 'hidden lg:hidden'}
            onClick={() => {
              setIsNavOpen((prev) => prev);
            }}
          >
            <RiCloseFill className="text-3xl" />
          </div>
        </nav>
      </motion.div>

      {/*solutions dropdown menu */}
      <div
        className={
          isHovered
            ? ` transition-all flex justify-center items-center place-items-center m-auto`
            : 'transition-all hidden top-50 opacity-0'
        }
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        onClick={() => setIsHovered((prev) => !prev)}
      >
        <div
          className="hidden fixed rounded-xl bg-white top-[48px] m-auto flex-col justify-start items-start flex-wrap shadow-xl w-[40rem] lg:flex"
          style={{ zIndex: 1122 }}
        >
          <DropDown
            to="/graphic-design"
            title="graphic design"
            src="/images/navbar/graphic-design.svg"
          />
          <DropDown
            to="/custom-illustrations"
            title="Custom Illustrations"
            src="/images/navbar/design-blog.png"
          />

          <DropDown
            to="presentation-design"
            title="presentation design"
            src="/images/navbar/web-design.svg"
          />
          <DropDown
            to="motion-graphics"
            title="motion graphics"
            src="/images/navbar/motion-graphic.png"
          />
          <DropDown
            to="video-editing"
            title="video editing"
            src="/images/navbar/video-editing.png"
          />
        </div>
      </div>

      {/* resources droopDown menu */}
      {/* dropdown menu */}
      <div
        className={
          isResourceHovered
            ? ` transition-all flex justify-center items-center place-items-center m-auto `
            : 'transition-all hidden top-50 opacity-0'
        }
        onMouseOver={() => setIsResourceHovered(true)}
        onMouseOut={() => setIsResourceHovered(false)}
        onClick={() => setIsResourceHovered((prev) => !prev)}
      >
        <div
          className="hidden fixed rounded-xl bg-white top-[48px] right-[30%] m-auto flex-col justify-center items-center flex-wrap shadow-xl w-[18rem] lg:flex"
          style={{ zIndex: 1122 }}
        >
          <DropDown
            to="/watch-demos"
            title="Watch Demos"
            src="/images/navbar/video-editing.png"
            className={'w-full'}
          />
          <DropDown
            to="/guides"
            title="guides"
            src="/images/navbar/guides.png"
            className={'w-full'}
          />
          <DropDown
            to="/design-blogs"
            title="design blogs"
            src="/images/navbar/design-blog.png"
            className={'w-full'}
          />
          {/* <DropDown
            title="case studies"
            src="/images/navbar/case-study.png"
            className={'w-full'}
          /> */}
        </div>
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
              ? 'transition-all fixed top-20 flex justify-start items-start flex-col w-full h-full pl-5 pt-5 gap-10 border rounded-md bg-white m-auto overflow-y-auto lg:hidden'
              : 'hidden'
          }
          style={{ zIndex: 122 }}
        >
          <ul className="flex justify-start items-start flex-col leading-8">
            <NavListsSmallScreen />
            <div className="flex flex-col-reverse gap-4 justify-end pr-16 sm:flex lg:pr-0">
              <Link
                to="/#"
                className="rounded-md px-7 text-center py-3 text-base font-medium text-blue-500 hover:bg-blue-500/90"
              >
                Sign Up
              </Link>
              <Link
                to="/#"
                className="px-7 py-3 text-center text-blue-500 border border-blue-500 rounded-md font-medium text-dark hover:text-blue-500"
              >
                Sign in
              </Link>
              <Link
                to="/book-a-call"
                className="rounded-md text-center bg-blue-500 px-7 py-3 text-base font-medium text-white hover:bg-blue-500/90"
                onClick={() => setIsNavOpen(false)}
              >
                Book A Call
              </Link>
            </div>
          </ul>
        </div>
      </OutsideClickHandler>
    </>
  );
};

export default Navbar;
