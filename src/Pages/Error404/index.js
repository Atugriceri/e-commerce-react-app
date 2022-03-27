import { ExclamationCircleIcon } from "@heroicons/react/outline";
import { ArrowCircleRightIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import React from "react";

const Error404 = () => {
  return (
    <div className="flex flex-wrap max-w-7xl mx-auto my-4">
      <div className="w-full sm:w-2/2 md:w-2/2 xl:w-5/5 p-4 h-[500px]">
        <div className={styles.cardBg}>
          <ExclamationCircleIcon className={styles.headerIcon} />
          <p className={styles.errorTitle}>
            OOPS! NOTHING WAS FOUND!
          </p>
          <p className={styles.errorMessage}>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
          <Link to="/">
            <div className={styles.continueButton}>
              <button className={styles.button}>
                <div className="flex flex-col self-center">
                  <span className={styles.buttonText}>Continue Shopping</span>
                </div>
                <ArrowCircleRightIcon
                  className={styles.buttonIcon}
                />
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error404;
