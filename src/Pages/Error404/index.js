import { ExclamationCircleIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import styles from './styles.module.css'
import React from 'react'

const Error404 = () => {
  return (
    <div className="flex flex-wrap mx-4 my-4">
          <div className="w-full sm:w-2/2 md:w-2/2 xl:w-5/5 p-4 h-[500px] my-auto">
            <div className={styles.cardBg}>
              <ExclamationCircleIcon className="h-40 w-40 mx-auto mt-10" />
              <p className="text-xl font-extralight tracking-widest text-center pt-6">OOPS! NOTHING WAS FOUND!</p>
              <p className="text-center mt-2 font-bold tracking-wide">The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
              <Link to="/">
              <div className={styles.continueButton}>
                      <button
                        className={styles.button}
                      >
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
  )
}

export default Error404