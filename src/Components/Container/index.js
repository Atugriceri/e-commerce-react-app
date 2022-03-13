import React from 'react'

const Container = (props) => {
  return (
    <div className="container mx-auto">
      {props.children}
    </div>
  )
}

export default Container