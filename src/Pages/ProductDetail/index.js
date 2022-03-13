import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import Spinner from "../../Components/Spinner";
import { useProduct } from "../../Context/ProductContext";
import { useCart } from "../../Context/CartContext";
import styles from "./styles.module.css";

const ProductDetail = () => {
  const { addToCart, items } = useCart();
  const { product, loading, setProductID } = useProduct();
  const { product_id } = useParams();

  useEffect(() => {
    setProductID(product_id);
  }, [product_id]);

  const findCartItem = items.find((item) => item.id === product.id);

  return (
    <>
      {loading ? (
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
                {/*   {<div className="flex flex-row mb-2" title={product.rating.rate}>
                    {[...Array(Math.round(product.rating.rate))].map(() => (
                      <StarIcon
                        className="starIcon h-4 w-4 text-amber-400 my-auto"
                        aria-hidden="true"
                      />
                    ))}
                    {[...Array(5 - Math.round(product.rating.rate))].map(
                      () => (
                        <StarIcon
                          className="starIcon text-zinc-900/10 h-4 w-4 my-auto"
                          aria-hidden="true"
                        />
                      )
                    )}
                    <p className="text-xs ml-1 font-light mt-0.5">
                      ({product.rating.count})
                    </p>
                  </div>} */}
                <p className="leading-relaxed border-b mb-4 border-zinc-900/10 border-offset-4 pb-6">
                  {product.description}
                </p>

                <div className="flex">
                  <div className="my-auto">
                    <span className="font-extralight text-2xl">
                      $ {product.price}
                    </span>
                  </div>
                  <div className="ml-auto my-auto mt-0">
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
                    <button className="rounded-full w-9 h-9 bg-zinc-900/10 my-auto border-0 inline-flex items-center justify-center text-zinc-900/10 ml-4">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                      </svg>
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

export default ProductDetail;
