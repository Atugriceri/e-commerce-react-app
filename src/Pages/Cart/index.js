import React from 'react'
import { ShoppingCartIcon, TrashIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import styles from "./styles.module.css";

const Cart = () => {
  const { items, removeFromCart } = useCart();

  const subtotal = items.reduce((acc, obj) => acc + obj.price, 0).toFixed(1)

  return (
    <div>
      {items.length < 1 && (
        <div className="flex flex-wrap max-w-7xl mx-auto my-4">
        <div className="w-full sm:w-2/2 md:w-2/2 xl:w-5/5 p-4 h-[500px] my-auto">
            <div className={styles.cardBg}>
              <ShoppingCartIcon className="h-40 w-40 mx-auto mt-10" />
              <p className="text-xl font-extralight tracking-widest text-center pt-6">
                There are no products in your cart.
              </p>
              <p className="text-center mt-2 font-bold tracking-wide">
                Add the products you like to the cart and buy.
              </p>
              <Link to="/">
                <div className={styles.continueButton}>
                  <button className={styles.button}>
                    <div className="flex flex-col self-center">
                      <span className={styles.buttonText}>
                        Continue Shopping
                      </span>
                    </div>
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}

      {items.length > 0 && (
        <div className="flex flex-wrap max-w-7xl mx-auto my-4">
          <div className="flex flex-col flex-1">
            {items.map((item) => {
              return (
                <div
                  className="w-full sm:w-2/2 md:w-2/2 xl:w-5/5 p-4 my-auto"
                  key={item.id}
                >
                  <div className={styles.bgCart}>
                    <div className="flex flex-row h-48">
                      <img
                        className="w-32 my-auto p-4 object-contain"
                        src={item.image}
                        alt="Cart Item"
                      />
                      <div className="flex flex-col ml-2 mt-2">
                        <Link to={`/product/${item.id}`}>
                          <h2 className="text-sm title-font text-zinc-900 tracking-widest hover:text-blue-600 mt-2">
                            Brand
                          </h2>
                          <p className="font-extralight">{item.title}</p>
                        </Link>
                        <p className="mt-auto mb-4 font-extralight text-xl">
                          $ {item.price}
                        </p>
                      </div>
                      <div className="flex flex-row ml-auto">
                        <button className="w-5 h-5 ml-auto m-4 hover:text-red-500" onClick={() => removeFromCart(item.id)}>
                          <TrashIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full h-full sm:w-2/2 md:w-2/2 xl:w-1/5 p-4">
            <div className={styles.bgCart}>
              <div className="flex flex-col p-4">
                <span className="text-xl mb-4 font-semibold">
                  Order Summary
                </span>
                <span className="text-sm my-2 font-extralight flex">
                  Subtotal <span className="ml-auto font-normal">$ {subtotal}</span>
                </span>
                <span className="text-sm my-2 font-extralight flex">
                  Shipping Estimate <span className="ml-auto font-normal">$ 5</span>
                </span>
                <span className="text-sm my-2 font-extralight flex">
                  Tax Estimate <span className="ml-auto font-normal">$ 5</span>
                </span>
                <span className="text-md my-2 font-normal flex">
                  Order Total <span className="ml-auto">$ {parseFloat(subtotal) + 10}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
