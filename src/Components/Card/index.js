import React from "react";
import styles from "./styles.module.css";
import { StarIcon, ShoppingCartIcon, HeartIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const Card = ({
  item,
  addToFavorite,
  addToCart,
  findFavoriteItem,
  findCartItem,
  setProductID,
}) => {
  return (
    <div key={`${item.id}-item`} className={styles.card} title={item.title}>
      <div className={styles.cardLink}>
        <button
          className={
            !findFavoriteItem ? styles.favButton : styles.removeFavButton
          }
          onClick={() => {
            addToFavorite(item, findFavoriteItem);
          }}
        >
          <HeartIcon className={styles.heartIcon} />
        </button>
        <Link to={`/product/${item.id}`} onClick={() => setProductID(item.id)}>
          <div className={styles.cardHeader}>
            <img className={styles.cardImg} src={item.image} alt="" />
          </div>
        </Link>
        <div className={styles.cardBody}>
          <div>
            <p className={styles.cardTitle} title={item.title}>
              <span className={styles.brand} title="Brand">
                Brand,
              </span>
              {" "}{item.title}
            </p>
          </div>
          <div className="flex flex-row mb-2" title={item.rating.rate}>
            {[...Array(Math.round(item.rating.rate))].map((e, i) => (
              <StarIcon
                key={`star-${i}`}
                className={styles.starIcon}
                aria-hidden="true"
              />
            ))}
            {[...Array(5 - Math.round(item.rating.rate))].map((e, i) => (
              <StarIcon
                key={`empty-star-${i}`}
                className={styles.emptyStarIcon}
                aria-hidden="true"
              />
            ))}
            <p className="text-xs ml-1 font-light mt-0.5">
              ({item.rating.count})
            </p>
          </div>
          <div>
            <div className="mt-auto">
              <div className="my-auto" title={`$${item.price}`}>
                <span className="font-extralight inline-block align-text-top text-xs">
                  $
                </span>
                <span className="font-normal text-lg mx-0.5">
                  {Math.trunc(item.price)}
                </span>
                {parseInt((item.price % 1).toFixed(2).substring(2)) !== 0 ? (
                  <span className="font-extralight inline-block align-text-top text-xs">
                    {parseInt((item.price % 1).toFixed(2).substring(2))}
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div></div>
            </div>
          </div>
          <div className={styles.addToCart}>
            <button
              className={
                !findCartItem ? styles.addToCartButton : styles.removeButton
              }
              onClick={() => addToCart(item, findCartItem)}
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
      </div>
    </div>
  );
};

export default Card;
