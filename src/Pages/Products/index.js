import React, {useEffect} from "react";
import { useProduct } from "../../Context/ProductContext";
import styles from "./styles.module.css";
import Spinner from "../../Components/Spinner";
import { useParams } from "react-router-dom";
import { useCart } from '../../Context/CartContext'
import { useFavorite } from '../../Context/FavoriteContext'
import Card from "../../Components/Card";

const Products = () => {
  const {addToCart, items} = useCart()
  const {addToFavorite, favoriteItems} = useFavorite()

  const { productList, loading, setProductID, setCategory } = useProduct();
  
  const {category_id} = useParams()

  useEffect(() => {
    console.log(category_id)
    setCategory(category_id)
    console.log(category_id)
  }, [category_id])

  return (
    <div className={styles.cardGroup}>
      {loading ? (
        productList?.map((item) => {
          const findCartItem = items.find((cart_item) => cart_item.id === item.id)
          const findFavoriteItem = favoriteItems.find((favorite_item) => favorite_item.id === item.id)
          return (
            <Card item={item} setProductID={setProductID} findCartItem={findCartItem} findFavoriteItem={findFavoriteItem} addToCart={addToCart} addToFavorite={addToFavorite} />
          );
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Products;
