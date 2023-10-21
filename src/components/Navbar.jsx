import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { HiShoppingCart, HiMoon, HiSun } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import userDefaultPicture from "../assets/Img/user.png";
import logo from "../assets/Img/logo.png";
import React, { useState } from "react";

const NavBar = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 lg:justify-center">
      <Typography as="li" variant="small" className="p-1 font-normal">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "flex items-center text-[#F04923] font-bold underline text-lg"
              : "flex items-center text-[#706F6F] dark:text-white text-lg"
          }
        >
          Home
        </NavLink>
      </Typography>

      <NavLink
        to="/gallery"
        className={({ isActive }) =>
          isActive
            ? "flex items-center text-[#F04923] font-bold underline text-lg"
            : "flex items-center text-[#706F6F] dark:text-white text-lg"
        }
      >
        Add Product
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive
            ? "flex items-center text-[#F04923] font-bold underline text-lg"
            : "flex items-center text-[#706F6F] dark:text-white text-lg"
        }
      >
        Register
      </NavLink>
      <Typography as="li" variant="small" className="p-1 font-normal">
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive
              ? "flex items-center text-[#F04923] font-bold underline text-lg"
              : "flex items-center text-[#706F6F] dark:text-white text-lg"
          }
        >
          Cart{" "}
          <HiShoppingCart className="text-3xl text-[#29276B] dark:text-white"></HiShoppingCart>
        </NavLink>
      </Typography>
      <Typography
        onClick={() => toggleTheme()}
        as="li"
        className=" text-3xl text-[#29276B] md:-ml-4 font-normal dark:text-white"
      >
        {dark ? <HiMoon></HiMoon> : <HiSun></HiSun>}
      </Typography>
    </ul>
  );
  return (
    <Navbar
      data-aos="fade-right"
      className=" rounded-none shadow py-2 bg-[#ede8e8] dark:bg-black "
    >
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <div className="lg:flex items-center">
          <img className="w-32 h-14 md:w-36 md:h-16" src={logo} alt="" />
        </div>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex  items-center">
          {" "}
          {/* {user ? (
            <img
              src={user.photoURL}
              alt="Profile"
              className="h-7 md:h-10 w-7 md:w-10 rounded-full mr-2"
            />
          ) : (
            <img
              src={userDefaultPicture}
              alt="Profile"
              className="h-7 md:h-10 w-7 md:w-10 rounded-full mr-2"
            />
          )} */}
          <img
            src={userDefaultPicture}
            alt="Profile"
            className="h-7 md:h-10 w-7 md:w-10 rounded-full mr-2"
          />
          {/* {user ? (
            <Button
              onClick={handleLogOut}
              className="hidden md:block bg-[#403F3F] rounded-md  font-semibold text-base text-[#fff]"
              variant="gradient"
              size="sm"
            >
              <span>Log Out</span>
            </Button>
          ) : (
            <Link to="/login">
              <Button
                className="hidden md:block bg-[#403F3F] rounded-md  font-semibold text-base text-[#fff]"
                variant="gradient"
                size="sm"
              >
                <span>Login</span>
              </Button>
            </Link>
          )} */}
          <Link to="/login">
            <Button
              className="hidden md:block bg-[#29276B] rounded-md  font-semibold text-base text-[#fff]"
              size="sm"
            >
              <span>Login</span>
            </Button>
          </Link>
        </div>
        <IconButton
          variant="text"
          className="ml-2 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden dark:text-white"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          {/* {user ? (
            <Button
              onClick={handleLogOut}
              variant="gradient"
              size="sm"
              fullWidth
              className="mb-2"
            >
              <span>Log out</span>
            </Button>
          ) : (
            <Link to="/login">
              <Button variant="gradient" size="sm" fullWidth className="mb-2">
                <span>Login</span>
              </Button>
            </Link>
          )} */}
          <Link to="/login">
            <Button size="sm" fullWidth className="mb-2 bg-[#29276B]">
              <span>Login</span>
            </Button>
          </Link>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
