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
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const NavBar = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOut();
  };

  // Dark Mood
  const [mood, setMood] = useState("light");

  const toggleTheme = () => {
    const html = document.documentElement;
    if (mood === "light") {
      html.classList.remove("light");
      html.classList.add("dark");
      setMood("dark");
      localStorage.setItem("mood", "dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
      setMood("light");
      localStorage.setItem("mood", "light");
    }
  };
  useEffect(() => {
    const currentMood = localStorage.getItem("mood") || "light";
    document.documentElement.classList.add(currentMood);
    setMood(currentMood);
  }, []);

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
        to="/addProduct"
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
      <NavLink
        // to={`/carts/${user?.email}`}
        to="/carts"
        className={({ isActive }) =>
          isActive
            ? "flex items-center text-[#F04923] font-bold underline text-lg"
            : "flex items-center text-[#706F6F] dark:text-white text-lg"
        }
      >
        Cart
        <HiShoppingCart className="text-3xl text-[#29276B] hover:text-[#4d4aa4] dark:text-white"></HiShoppingCart>
      </NavLink>

      <Typography
        onClick={() => toggleTheme()}
        as="li"
        className=" text-3xl text-[#29276B] hover:text-[#4d4aa4] md:-ml-4 font-normal dark:text-white"
      >
        {mood === "light" ? <HiMoon></HiMoon> : <HiSun></HiSun>}
      </Typography>
    </ul>
  );
  return (
    <Navbar
      data-aos="fade-right"
      className=" rounded-none shadow py-2 bg-[#ede8e8] dark:bg-[#0F172A]  "
    >
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <div className="-ml-6 mr-4 md:mr-0 md:-ml-0 ">
          <Link>
            <img className="w-32 h-14 md:w-36 md:h-16" src={logo} alt="" />
          </Link>
        </div>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex  items-center gap-2">
          {" "}
          {user ? (
            <div className="flex  md:flex-col justify-center items-center">
              <img
                src={user.photoURL}
                alt="Profile"
                className="h-8 dark:border md:h-10 w-8 md:w-10 rounded-full mr-2"
              />
              <Typography className="text-xs md:text-sm font-medium text-[#29276B] dark:text-white">
                {user ? user.displayName : ""}
              </Typography>
            </div>
          ) : (
            <img
              src={userDefaultPicture}
              alt="Profile"
              className="h-7 md:h-10 w-7 md:w-10 rounded-full mr-2"
            />
          )}
          {user ? (
            <Button
              onClick={handleLogOut}
              className="hidden md:block bg-[#29276B] hover:bg-[#3b2b94 rounded-md  font-semibold text-base text-[#fff]"
              size="sm"
            >
              <span>Log Out</span>
            </Button>
          ) : (
            <Link to="/login">
              <Button
                className="hidden md:block bg-[#29276B] hover:bg-[#3b2b94]  rounded-md  font-semibold text-base text-[#fff]"
                size="sm"
              >
                <span>Login</span>
              </Button>
            </Link>
          )}
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
          {user ? (
            <Button
              onClick={handleLogOut}
              size="sm"
              fullWidth
              className="mb-2 bg-[#29276B]"
            >
              <span>Log out</span>
            </Button>
          ) : (
            <Link to="/login">
              <Button size="sm" fullWidth className="mb-2 bg-[#29276B]">
                <span>Login</span>
              </Button>
            </Link>
          )}
        </div>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
