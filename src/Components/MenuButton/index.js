import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import {
  UserCircleIcon,
  LoginIcon,
  IdentificationIcon,
  ClipboardListIcon,
  HeartIcon,
  ShoppingCartIcon,
  LogoutIcon,
} from '@heroicons/react/outline'
import styles from './styles.module.css'
import { useAuth } from '../../Context/AuthContext'

const MenuButton = () => {
  const { loggedIn, currentUser } = useAuth()

  return (
    <div className="justify-content-center mx-auto text-center">
      {!loggedIn && (<>
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
            <div className="py-1 px-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/signin"
                    className={`${
                      active ? "bg-zinc-400/10  text-zinc-900/80" : "text-zinc-900/80"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm font-medium`}
                  >
                    <LoginIcon
                      className="mr-2 my-auto h-5 w-5"
                      aria-hidden="true"
                    />
                    Login
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/signup"
                    className={`${
                      active ? "bg-zinc-400/10  text-zinc-900/80" : "text-zinc-900/80"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm font-medium`}
                  >
                    <IdentificationIcon
                      className="mr-2 my-auto h-5 w-5"
                      aria-hidden="true"
                    />
                    Sign Up
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="py-1 px-1">
            <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={`${
                      active ? "bg-zinc-400/10  text-zinc-900/80" : "text-zinc-900/80"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm font-medium`}
                  >
                    <ShoppingCartIcon
                      className="mr-2 my-auto h-5 w-5"
                      aria-hidden="true"
                    />
                    Cart
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={`${
                      active ? "bg-zinc-400/10  text-zinc-900/80" : "text-zinc-900/80"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm font-medium`}
                  >
                    <ClipboardListIcon
                      className="mr-2 my-auto h-5 w-5"
                      aria-hidden="true"
                    />
                    Orders
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/favorites"
                    className={`${
                      active ? "bg-zinc-400/10  text-zinc-900/80" : "text-zinc-900/80"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm font-medium`}
                  >
                    <HeartIcon
                      className="mr-2 my-auto h-5 w-5"
                      aria-hidden="true"
                    />
                    Favorites
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={`${
                      active ? "bg-zinc-400/10  text-zinc-900/80" : "text-zinc-900/80"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm font-medium`}
                  >
                    <LogoutIcon
                      className="mr-2 my-auto h-5 w-5"
                      aria-hidden="true"
                    />
                    Logout
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      </>)}

      {loggedIn && (<>
        <Menu as="div" className={styles.menu}>
        <div>
          <Menu.Button className={styles.menuButton}>
            <UserCircleIcon
              className="mr-2 my-auto h-10 w-10"
              aria-hidden="true"
            />
            <div className="flex flex-col">
              <div className="text-left">
                <strong>Hello,</strong>
              </div>
              <div></div>
            </div>
            <ChevronDownIcon
              className="-mr-1 ml-2 my-auto h-8 w-8"
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
            <div className="py-1 px-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/signin"
                    className={`${
                      active ? "bg-zinc-400/10  text-zinc-900/80" : "text-zinc-900/80"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm font-medium`}
                  >
                    <LoginIcon
                      className="mr-2 my-auto h-5 w-5"
                      aria-hidden="true"
                    />
                    Login
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/signup"
                    className={`${
                      active ? "bg-zinc-400/10  text-zinc-900/80" : "text-zinc-900/80"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm font-medium`}
                  >
                    <IdentificationIcon
                      className="mr-2 my-auto h-5 w-5"
                      aria-hidden="true"
                    />
                    Sign Up
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="py-1 px-1">
            <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={`${
                      active ? "bg-zinc-400/10  text-zinc-900/80" : "text-zinc-900/80"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm font-medium`}
                  >
                    <ShoppingCartIcon
                      className="mr-2 my-auto h-5 w-5"
                      aria-hidden="true"
                    />
                    Cart
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={`${
                      active ? "bg-zinc-400/10  text-zinc-900/80" : "text-zinc-900/80"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm font-medium`}
                  >
                    <ClipboardListIcon
                      className="mr-2 my-auto h-5 w-5"
                      aria-hidden="true"
                    />
                    Orders
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/favorites"
                    className={`${
                      active ? "bg-zinc-400/10  text-zinc-900/80" : "text-zinc-900/80"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm font-medium`}
                  >
                    <HeartIcon
                      className="mr-2 my-auto h-5 w-5"
                      aria-hidden="true"
                    />
                    Favorites
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={`${
                      active ? "bg-zinc-400/10  text-zinc-900/80" : "text-zinc-900/80"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm font-medium`}
                  >
                    <LogoutIcon
                      className="mr-2 my-auto h-5 w-5"
                      aria-hidden="true"
                    />
                    Logout
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      </>)}
      
    </div>
  );
};

export default MenuButton;
