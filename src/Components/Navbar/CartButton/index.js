import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import { ShoppingCartIcon } from "@heroicons/react/outline"
import { useCart } from '../../../Context/CartContext'

const CartButton = () => {
  const {items} = useCart()

  return (
    <div className="justify-content-center mx-auto text-center">
      <div className={styles.cartMenu}>
        <Link to="/cart" className={styles.cartButton}>
          <ShoppingCartIcon className={styles.cartIcon} aria-hidden="true"  />
          <div className="flex flex-col self-center"> 
              {items.length > 0 && (
               <span className={styles.cartCount}>
                 {items.length}
               </span>
            )}
          </div>
        </Link>
      </div>
    </div>
  )
}

export default CartButton