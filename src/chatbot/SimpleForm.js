import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import Review from "./Review";
import Card from "../Components/Card";
class SimpleForm extends Component {
 
  render() {
 return (
   <ChatBot 
        steps={[
          { 
            id: "1",
            message: `Are you Intersted in this Product?,`,
            // message1:<h1>{item.title}</h1>,
            trigger: "Product"
          },
          {
            id: "Product",
            options: [
              { value: "Yes", label: "yes", trigger: "5" },
              { value: "No", label: "no", trigger: "end-message" }
            ]
            // user: true,
            // trigger: '3',
          },
          {
            id: "3",
            message: " Type your email id?",
            trigger: "gmail"
          },
          {
            id: "gmail",
            user: true,
            trigger: "7"
          },
          {
            id: "5",
            message: "Contact Number?",
            trigger: "Contact"
          },
          {
            id: "Contact",
            user: true,
            trigger: "7",
            validator: (value) => {
              if (isNaN(value)) {
                return "value must be a number";
              } else if (value < 0) {
                return "value must be positive";
              } else if (value.length < 10) {
                return `${value}? Come on!`;
              }

              return true;
            }
          },
          {
            id: "7",
            message: "Great! Check out your summary",
            trigger: "review"
          },
           {
            id: "review",
            component: <Review />,
            asMessage: true,
            trigger: "update"
          },
          {
            id: "update",
            message: "Would you like to update some field?",
            trigger: "update-question"
          },
          {
            id: "update-question",
            options: [
              { value: "yes", label: "Yes", trigger: "update-yes" },
              { value: "no", label: "No", trigger: "end-message1" }
            ]
          },
          {
            id: "update-yes",
            message: "What field would you like to update?",
            trigger: "update-fields"
          },
          {
            id: "update-fields",
            options: [
              // { value: 'Product', label: 'Product', trigger: 'update-Product' },
              { value: "gmail", label: "gmail", trigger: "update-gmail" },
              { value: "Contact", label: "Contact", trigger: "update-Contact" }
            ]
          },
          {
            id: "update-Product",
            update: "Product",
            trigger: "7"
          },
          {
            id: "update-gmail",
            update: "gmail",
            trigger: "7"
          },
          {
            id: "update-Contact",
            update: "Contact",
            trigger: "7"
          },
          {
            id: "end-message",
            message: "Thanks Have a Nice Day",
            end: true
          },
          {
            id: "end-message1",
            message: "Thanks! Your data was submitted successfully!",
            end: true
          },
          // <h1>{item.title}</h1>,
          // <Card/>
       
        ]}
      />
     
    );
  }
}

export default SimpleForm;
