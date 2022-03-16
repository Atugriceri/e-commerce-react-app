import React from "react";
import { Link } from "react-router-dom";
import MenuButton from "../MenuButton";
import {
  LoginIcon,
  IdentificationIcon,
  ShoppingCartIcon,
  ClipboardListIcon,
  HeartIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import styles from "./styles.module.css";
import CartButton from "../CartButton";
import { useProduct } from "../../Context/ProductContext";

import { Disclosure, } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Login", link: "/signin", icon: <LoginIcon />, },
  { name: "Sign Up", link: "/signup", icon: <IdentificationIcon />, },
  { name: "Cart", link: "/cart", icon: <ClipboardListIcon />, },
  { name: "Orders", link: "/orders", icon: <ClipboardListIcon />, },
  { name: "Favorites", link: "/favorites", icon: <HeartIcon />, },
  { name: "Logout", link: "/logout", icon: <LogoutIcon />, }
]

console.log(navigation)

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const { categories, setCategory } = useProduct();

  return (
    <>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto pt-4 pb-6 px-4">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className={styles.logo}>
                    <Link className={styles.link} to="/">
                      <div className={styles.logoBox}></div>
                      <h1 className={styles.logoText}>LOGO</h1>
                    </Link>
                  </div>
                  <div className="hidden sm:block sm:ml-6"></div>
                </div>
                <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="ml-3 relative hidden sm:block">
                    <MenuButton />
                  </div>
                  <div className="ml-3 relative">
                    <CartButton />
                  </div>
                  {/* Profile dropdown */}
                </div>
              </div>
            </div>

            <Disclosure.Panel className={styles.disclosurePanel}>
              <div className="px-2 pt-2 pb-3">
                <Link to="/signin">
                  <Disclosure.Button className="bg-zinc-50 hover:bg-zinc-400/10 text-zinc-900/80 group  rounded-md items-center w-full px-2 py-2 text-sm font-medium flex mb-1">
                    <LoginIcon
                      className="mr-2 my-auto h-5 w-5"
                      aria-hidden="true"
                    />
                    Login
                  </Disclosure.Button>
                </Link>
                <Link to="/signup">
                  <Disclosure.Button className="bg-zinc-50 hover:bg-zinc-400/10 text-zinc-900/80 group  rounded-md items-center w-full px-2 py-2 text-sm font-medium flex mb-1">
                    <IdentificationIcon
                      className="mr-2 my-auto h-5 w-5"
                      aria-hidden="true"
                    />
                    Sign Up
                  </Disclosure.Button>
                </Link>
                <div className="rounded-md py-[0.8px] flex bg-zinc-900/10 my-1"></div>
                <Link to="/cart">
                  <Disclosure.Button className="bg-zinc-50 hover:bg-zinc-400/10 text-zinc-900/80 group rounded-md items-center w-full px-2 py-2 text-sm font-medium flex mb-1">
                    <ShoppingCartIcon
                      className="mr-2 my-auto h-5 w-5"
                      aria-hidden="true"
                    />
                    Cart
                  </Disclosure.Button>
                </Link>
                <Link to="/">
                  <Disclosure.Button className="bg-zinc-50 hover:bg-zinc-400/10 text-zinc-900/80 group  rounded-md items-center w-full px-2 py-2 text-sm font-medium flex mb-1">
                  <ClipboardListIcon
                      className="mr-2 my-auto h-5 w-5"
                      aria-hidden="true"
                    />
                    Orders
                  </Disclosure.Button>
                </Link>
                <Link to="/favorites">
                  <Disclosure.Button className="bg-zinc-50 hover:bg-zinc-400/10 text-zinc-900/80 group  rounded-md items-center w-full px-2 py-2 text-sm font-medium flex mb-1">
                  <HeartIcon
                      className="mr-2 my-auto h-5 w-5"
                      aria-hidden="true"
                    />
                    Favorites
                  </Disclosure.Button>
                </Link>
                <div className="rounded-md py-[0.8px] flex bg-zinc-900/10 my-1"></div>
                <Link to="/">
                
                  <Disclosure.Button className="bg-zinc-50 hover:bg-zinc-400/10 text-zinc-900/80 group  rounded-md items-center w-full px-2 py-2 text-sm font-medium flex mb-1">
                  <LogoutIcon
                      className="mr-2 my-auto h-5 w-5"
                      aria-hidden="true"
                    />
                    Logout
                  </Disclosure.Button>
                </Link>
                
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <div className="bg-zinc-900/10 mx-auto h-[1.1px] shadow-sm shadow-zinc-900/10 px-12"></div>
      <nav className={styles.categoryNav}>
        <div>
          <Link
            className={styles.categoryLink}
            to="/"
            onClick={() => setCategory("")}
          >
            <h1 className="truncate">All</h1>
          </Link>
        </div>
        {categories &&
          categories.map((item, index) => {
            return (
              <div key={`${item}-${index}`}>
                <Link
                  className={styles.categoryLink}
                  to={`/${item.toLowerCase()}`}
                  onClick={() => {
                    setCategory(item.toLowerCase());
                  }}
                >
                  <h1 className="truncate">{item}</h1>
                </Link>
              </div>
            );
          })}
      </nav>
      <div className="bg-zinc-900/10 mx-auto h-[1px] shadow-sm shadow-zinc-900/10 px-12"></div>
    </>
  );
};

export default Navbar;
