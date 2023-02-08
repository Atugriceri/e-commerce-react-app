import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";


const Review = (props) => {
  const [state, setState] = useState({ Product: "", gmail: "", Contact: "" });
  
  
  useEffect(() => {
    const { steps } = props;
    const { Product, gmail, Contact } = steps;
    setState({ Product, gmail, Contact })
    axios.post(`http://localhost:3000/posts`,{
      Contact,
      gmail
   })
  }, []);

  const { Product, gmail, Contact } = state;

  return (
    <div style={{ width: "100%" }}>
      <h3>Summary</h3>
      <table>
        <tbody>
          <tr>
            <td>Product</td>
            <td>{Product.value}</td>
          </tr>
          {/* <tr>
              <td>Gmail</td>
              <td>{gmail.value}</td>
            </tr> */}
          <tr>
            <td>Contact Number</td>
            <td>{Contact.value}</td>
          </tr>
        </tbody>
      </table>
      {/* <button type="submit" onClick={data}>submit</button> */}
      
    </div>
  );
};

Review.propTypes = {
  steps: PropTypes.object
};

Review.defaultProps = {
  steps: undefined
};

export default Review;
