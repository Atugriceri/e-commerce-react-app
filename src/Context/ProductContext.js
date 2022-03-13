import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState([])
  const [categories, setCategories] = useState()
  const [category, setCategory] = useState("/products")
  const [productID, setProductID] = useState("")
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getCategories = async () => {
      let categoriesData
      await axios("https://fakestoreapi.com/products/categories").then(
        (res) =>
          (categoriesData = res.data.map((item) =>
            item.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase())
          ))
      )
      setCategories(categoriesData)
      setLoading(true)
    }
    getCategories()
  }, [])

  useEffect(() => {
    const getProductData = async () => {
      if (category && category !== undefined && category.length > 0) {
        await axios.get(
          `https://fakestoreapi.com/products/category/${category}`
        ).then((res) => {
          setProductList(res.data)
          setCategory(category)
          setLoading(true)
        })
      } else {
        await axios.get(`https://fakestoreapi.com/products`).then((res) => {
          setProductList(res.data)
          setCategory("")
          setLoading(true)
        })
      }
    }
    setLoading(false)
    getProductData()
  }, [category])


  useEffect(() => {
    const getProductDetail = async () => {
      await axios.get(`https://fakestoreapi.com/products/${productID}`).then(
        (res) => {
          setProduct(res.data)
          setProductID(res.data.id)
          setLoading(true)
        }
      )
    }
    setLoading(false)
    getProductDetail()
  }, [productID])

  const values = {
    product,
    productList,
    productID,
    setProductID,
    categories,
    setCategory,
    loading,
  }

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  )
}

export const useProduct = () => useContext(ProductContext)
