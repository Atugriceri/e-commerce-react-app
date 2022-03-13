import Styles from './styles.module.css'
import React from 'react'

const Spinner = () => {
  return (
    <>
    <div className={Styles.spinner}>
      <div className={Styles.firstCircle}>
        <div className={Styles.secondCircle}></div>
      </div>
      <h2 className={Styles.status}>Loading...</h2>
      <p className={Styles.statusText}>This may take a few seconds, please don't close this page.</p>
    </div>
    </>

  )
}

export default Spinner