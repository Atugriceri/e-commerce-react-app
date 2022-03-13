import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import { ShoppingCartIcon } from "@heroicons/react/outline"
import { useCart } from '../../Context/CartContext'

const CartButton = () => {
  const {items} = useCart()

  return (
    <div className="justify-content-center mx-auto text-center">
      <div className={styles.basketMenu}>
        <Link to="/cart" className={styles.basketButton}>
          <ShoppingCartIcon className="my-auto h-10 w-10" aria-hidden="true"  />
          <div className="flex flex-col self-center">
            <strong>Cart 
              {items.length > 0 && (
               <span className="text-blue-600 ml-1">
                 ({items.length})
               </span>
            )}
            </strong>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default CartButton