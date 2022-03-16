import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCartIcon, HeartIcon } from "@heroicons/react/solid";
import Spinner from "../../Components/Spinner";
import { useProduct } from "../../Context/ProductContext";
import { useCart } from "../../Context/CartContext";
import { useFavorite } from "../../Context/FavoriteContext";
import styles from "./styles.module.css";

const ProductDetail = () => {
  const { addToCart, items } = useCart();
  const { addToFavorite, favoriteItems } = useFavorite();
  const { product, loading, setProductID } = useProduct();

  const findCartItem = items.find((item) => item.id === product.id);
  const findFavoriteItem = favoriteItems.find((item) => item.id === product.id);
  
  const { product_id } = useParams();
  
  useEffect(() => {
    setProductID(product_id);
  }, []); 

  console.log(product_id)

  return (
    <>
      {!loading && product?.id ? (
        <div className="text-gray-700 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-3/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 inset-0 max-h-max w-full py-4 my-auto px-4 object-scale-down rounded border border-gray-200"
                src={product.image}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-zinc-900/20 tracking-widest underline underline-offset-2 decoration-zinc-900 decoration-wavy mb-2 hover:text-blue-600">
                  BRAND
                </h2>
                <h1 className="text-gray-900 text-2xl title-font font-bold tracking-tight mb-1">
                  {product.title}
                </h1>
                <p className="leading-relaxed border-b mb-4 border-zinc-900/10 border-offset-4 pb-6">
                  {product.description}
                </p>
                <div className="flex">
                  <div className="my-auto">
                    <span className="font-extralight text-2xl inline-block align-middle mt-2 my-auto">
                      $ {product.price}
                    </span>
                  </div>
                  <div className="block ml-auto my-auto mt-0">
                    {" "}
                    <div className={styles.addToCart}>
                      <button
                        className={styles.addToCartButton}
                        onClick={() => addToCart(product, findCartItem)}
                      >
                        <ShoppingCartIcon
                          className={styles.shoppingCartIcon}
                          aria-hidden="true"
                        />
                        
                        <div className="flex flex-col self-center">
                          <span className={styles.buttonText}>
                            {findCartItem ? "Remove from cart" : "Add to Cart"}
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>

                  

                  <div className="block my-auto">
                  <button
                          className={
                            !findFavoriteItem
                              ? styles.favButton
                              : styles.removeFavButton
                          }
                          onClick={() => {
                            addToFavorite(product, findFavoriteItem)
                          }}
                        >
                          <HeartIcon
                            className={styles.heartIcon}
                          />
                        </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

function areEqual(prevProps, nextProps) {
  console.log("lölö")
  console.log(prevProps)
  console.log(nextProps)
  return false
}

export default React.memo(ProductDetail, areEqual) 