import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import {
  UserCircleIcon,
  LoginIcon,
  IdentificationIcon,
  UserIcon,
  ClipboardListIcon,
  HeartIcon,
  ShoppingCartIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import styles from "./styles.module.css";
import { useAuth } from "../../../Context/AuthContext";

const MenuButton = () => {
  const { loggedIn, currentUser, setIsSubmitting, logout } = useAuth();

  const navigation = [
    {
      id: 1,
      name: "Login",
      link: "/signin",
      icon: <LoginIcon className="mr-2 my-auto h-5 w-5" aria-hidden="true" />,
      loggedIn: false,
      underlined: false,
    },
    {
      id: 2,
      name: "Sign Up",
      link: "/signup",
      icon: (
        <IdentificationIcon
          className="mr-2 my-auto h-5 w-5"
          aria-hidden="true"
        />
      ),
      loggedIn: false,
      underlined: true,
    },
    {
      id: 3,
      name: "Profile",
      link: "/profile",
      icon: <UserIcon className="mr-2 my-auto h-5 w-5" aria-hidden="true" />,
      loggedIn: true,
      underlined: true,
    },
    {
      id: 4,
      name: "Cart",
      link: "/cart",
      icon: (
        <ShoppingCartIcon className="mr-2 my-auto h-5 w-5" aria-hidden="true" />
      ),
      loggedIn: "public",
      underlined: false,
    },
    {
      id: 5,
      name: "Orders",
      link: "/orders",
      icon: (
        <ClipboardListIcon
          className="mr-2 my-auto h-5 w-5"
          aria-hidden="true"
        />
      ),
      loggedIn: true,
      underlined: false,
    },
    {
      id: 6,
      name: "Favorites",
      link: "/favorites",
      icon: <HeartIcon className="mr-2 my-auto h-5 w-5" aria-hidden="true" />,
      loggedIn: "public",
      underlined: true,
    },
  ];

  const handleLogout = async () => {
    setIsSubmitting(true)
    try {
      await logout()
    } catch {
      alert("Error")
    }
    setIsSubmitting(false)
  }

  return (
    <div className="justify-content-center mx-auto text-center">
      {!loggedIn && (
        <Menu as="div" className={styles.menu}>
          <div>
            <Menu.Button className={styles.menuButton}>
              <UserCircleIcon
                className={styles.userCircleIcon}
                aria-hidden="true"
              />
              <div className="flex flex-col">
                <div className="text-left">
                  <strong>Login</strong>
                </div>
                <div>or Sign Up</div>
              </div>
              <ChevronDownIcon
                className={styles.chevronDownIcon}
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className={styles.menuItems}>
              <div>
                {!loggedIn &&
                  navigation.map(
                    ({ id, name, link, icon, loggedIn, underlined, onclick }) => (
                      <Menu.Item key={`${name}-${id}`}>
                        {({ active }) => (
                          <div
                            className={`${
                              !loggedIn || loggedIn === "public" || "hidden"
                            }`}
                          >
                            <Link
                              to={link}
                              onClick={onclick ? onclick : null}
                              className={`${
                                active
                                  ? "bg-zinc-400/10  text-zinc-900/80"
                                  : "text-zinc-900/80"
                              } group flex items-center w-full px-2 py-2 text-sm font-medium ${
                                underlined
                                  ? "border-b-2 border-zinc-900/10"
                                  : ""
                              }`}
                            >
                              {icon}
                              {name}
                            </Link>
                          </div>
                        )}
                      </Menu.Item>
                    )
                  )}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      )}

      {loggedIn && (
        <Menu as="div" className={styles.menu}>
          <div>
            <Menu.Button className={styles.menuButton}>
              <UserCircleIcon
                className={styles.userCircleIcon}
                aria-hidden="true"
              />
              <div className="flex flex-col">
                <div className="text-left">
                  <strong>Hello,</strong>
                </div>
                <div>{currentUser?.firstName}</div>
              </div>
              <ChevronDownIcon
                className={styles.chevronDownIcon}
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className={styles.menuItems}>
              <div>
                {loggedIn &&
                  navigation.map(
                    ({ id, name, link, icon, loggedIn, underlined, onclick }) => (
                      <Menu.Item key={`${name}-0${id}`}>
                        {({ active }) => (
                          <div
                            className={`${
                              loggedIn || loggedIn === "public" || "hidden"
                            }`}
                          >
                            <Link
                              to={link}
                              onClick={onclick ? onclick : null}
                              className={`${
                                active
                                  ? "bg-zinc-400/10  text-zinc-900/80"
                                  : "text-zinc-900/80"
                              } group flex items-center w-full px-2 py-2 text-sm font-medium ${
                                underlined
                                  ? "border-b-2 border-zinc-900/10"
                                  : ""
                              }`}
                            >
                              {icon}
                              {name}
                            </Link>
                          </div>
                        )}
                      </Menu.Item>

                    )
                  )}

<Menu.Item>
                        {({ active }) => (
                          <div>
                            <Link
                              to="/"
                              onClick={handleLogout}
                              className={`${
                                active
                                  ? "bg-zinc-400/10  text-zinc-900/80"
                                  : "text-zinc-900/80"
                              } group flex items-center w-full px-2 py-2 text-sm font-medium`}
                            >
                              <LogoutIcon className="mr-2 my-auto h-5 w-5" aria-hidden="true" />
                              Logout
                            </Link>
                          </div>
                        )}
                      </Menu.Item>
              </div>

              
            </Menu.Items>
          </Transition>
        </Menu>
      )}
    </div>
  );
};

export default MenuButton;
