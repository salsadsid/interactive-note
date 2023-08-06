import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/logo2.png";
import { AuthContext } from "../../context/AuthProvider";
import avatar from '../../assets/avatar.png'

const ProfileDropDown = (props) => {
  const [state, setState] = useState(false);
  const profileRef = useRef();

  useEffect(() => {
    const handleDropDown = (e) => {
      if (!profileRef.current.contains(e.target)) setState(false);
    };
    document.addEventListener("click", handleDropDown);
  }, []);
  const { user } = useContext(AuthContext);
  return (
    <div className={`relative ${props.class}`}>
      <div className="flex items-center space-x-4 p-1">
        <button
          ref={profileRef}
          className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-green-600 block"
          onClick={() => setState(!state)}
        >
          <img
            src={avatar}
            className="w-full h-full rounded-full"
          />
        </button>
        <div className="lg:hidden">
          <span className="block">{user?.fullName}</span>
          <span className="block text-sm text-gray-500">{user?.email}</span>
        </div>
      </div>
      <ul
        className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${
          state ? "" : "lg:hidden"
        }`}
      >
        <li>
          <Link to="/dashboard" className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5">
            Dashboard
          </Link>
        </li>
        <li>
          <Link className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5">
            Log out
          </Link>
        </li>
      </ul>
    </div>
  );
};
const Nav = () => {
  const [menuState, setMenuState] = useState(false);

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Careers", path: "javascript:void(0)" },
    { title: "Guides", path: "javascript:void(0)" },
    { title: "Partners", path: "javascript:void(0)" },
  ];
  const { setUser, setToken, user } = useContext(AuthContext);
  return (
    <nav className="bg-white sticky top-0 z-50 border-b">
      <div className="flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto md:px-8">
        <div className="flex-none lg:flex-initial">
          <Link to="/">
            <img
              src={img}
              width={120}
              height={50}
              alt="Interactive Note Logo"
            />
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-between">
          <div
            className={`bg-white absolute z-20 w-full top-16 left-0 p-4 border-b lg:static lg:block lg:border-none ${
              menuState ? "" : "hidden"
            }`}
          >
            <ul className="mt-2 space-y-5 flex flex-col justify-center lg:space-x-6 lg:space-y-0 lg:mt-0 lg:flex-row">
              <Link
                to="/sign"
                className="text-gray-600 hover:text-gray-900 whitespace-nowrap"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="text-gray-600 hover:text-gray-900 whitespace-nowrap"
              >
               Login
              </Link>
            </ul>
            <>
            <ul className="mt-4 space-y-5 flex flex-col justify-center lg:space-x-6 lg:space-y-0 lg:mt-0 lg:flex-row">
            <Link
                  to="/about"
                  className="text-gray-600 hover:text-gray-900 whitespace-nowrap lg:hidden block"
                >
                  About
                </Link>
                </ul>
           {user?.email && <ProfileDropDown class="mt-5 pt-5 border-t lg:hidden" />}
            </>
          </div>
          <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
            {user?.email ? (
              <>
                <ProfileDropDown class="hidden lg:block" />
              </>
            ) : (
                <ul className="mt-4 space-y-5 flex flex-col justify-center lg:space-x-6 lg:space-y-0 lg:mt-0 lg:flex-row">
                <Link
                      to="/about"
                      className="text-gray-600 hover:text-gray-900 whitespace-nowrap hidden lg:block"
                    >
                      About
                    </Link>
                    </ul>
            )}
            <button
              className="outline-none text-gray-400 block lg:hidden"
              onClick={() => setMenuState(!menuState)}
            >
              {menuState ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
