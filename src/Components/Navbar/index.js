import React from "react";
import { Link } from "react-router-dom";
import MenuButton from "../MenuButton";
import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { Transition } from "@headlessui/react";

import styles from "./styles.module.css";
import CartButton from "../CartButton";
import { useProduct } from "../../Context/ProductContext";

const Navbar = () => {

  const { categories, setCategory } = useProduct()

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link className={styles.link} to="/">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 w-3 h-7 rounded-full"></div>
            <h1 className="text-1xl text-gray-600 ml-2">Logo</h1>
          </Link>
        </div>

        <div className="flex">
          <div>
            <MenuButton />
          </div>
          <div className="ml-6">
            <CartButton />
          </div>
        </div>
      </nav>

      <nav className={styles.categoryNav}>
        <div>
          <Link
            className={styles.categoryLink}
            to="/"
            onClick={() => setCategory("")}
          >
            All
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
                  {item}
                </Link>
              </div>
            );
          })}
      </nav>
    </>
  );
};

export default Navbar;
