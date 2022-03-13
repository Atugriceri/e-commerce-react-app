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
              className="mr-2 my-auto h-10 w-10"
              aria-hidden="true"
            />
            <div className="flex flex-col">
              <div className="text-left">
                <strong>Login</strong>
              </div>
              <div>or Sign Up</div>
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
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
            <div className="py-1 px-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/signin"
                    className={`${
                      active ? "bg-neutral-100  text-gray-900" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
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
                      active ? "bg-neutral-100  text-gray-900" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
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
                      active ? "bg-neutral-100  text-gray-900" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
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
                      active ? "bg-neutral-100  text-gray-900" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
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
                      active ? "bg-neutral-100  text-gray-900" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
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
                      active ? "bg-neutral-100  text-gray-900" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
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
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
            <div className="py-1 px-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/signin"
                    className={`${
                      active ? "bg-neutral-100  text-gray-900" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
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
                      active ? "bg-neutral-100  text-gray-900" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
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
                      active ? "bg-neutral-100  text-gray-900" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
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
                      active ? "bg-neutral-100  text-gray-900" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
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
                      active ? "bg-neutral-100  text-gray-900" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
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
                      active ? "bg-neutral-100  text-gray-900" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
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
