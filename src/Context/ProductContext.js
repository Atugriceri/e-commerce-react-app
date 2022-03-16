import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'
const ProductContext = createContext()


export const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState([])
  const [categories, setCategories] = useState()
  const [category, setCategory] = useState("/products")
  const [productID, setProductID] = useState("")
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const getCategories = async () => {
      
      let categoriesData
      await axios("https://fakestoreapi.com/products/categories").then(
        (res) =>
          (categoriesData = res.data.map((item) =>
            item.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase())
          ))
      )
      setCategories(categoriesData)
    }
    getCategories()
    setLoading(false)
  }, [])

  useEffect(() => {
    setLoading(true)
    const getProductData = async () => {
      
      if (category && category.length > 0) {
        await axios.get(
          `https://fakestoreapi.com/products/category/${category}`
        ).then((res) => {
          setProductList(res.data)
          setLoading(false)
        })
      } else {
        await axios.get(`https://fakestoreapi.com/products`).then((res) => {
          setProductList(res.data)
          setCategory("")
          setLoading(false)
        })
      }
    }
    getProductData()
  }, [category])

  useEffect(() => {
    setLoading(true)
    const getProductDetail = async () => {   
      
       productID && productID.length > 0 && await axios.get(`https://fakestoreapi.com/products/${productID}`).then(
        (res) => {
          setProduct(res.data)
          setLoading(false)
        }
      )
    }
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