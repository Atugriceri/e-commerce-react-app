import { useState, createContext, useContext, useEffect } from 'react'

const FavoriteContext = createContext()

const defaultFavorite = JSON.parse(localStorage.getItem('favorite')) || []

const FavoriteProvider = ({children}) => {

  const [favoriteItems, setFavoriteItems] = useState(defaultFavorite)

  useEffect(() => {
    localStorage.setItem('favorite', JSON.stringify(favoriteItems))
  }, [favoriteItems])

  const addToFavorite = (data, findFavoriteItem) => {
    if(!findFavoriteItem) {
      return setFavoriteItems((items) => [data, ...items] )
    }

    const filtered = favoriteItems.filter((item) => item.id !== findFavoriteItem.id)
    setFavoriteItems(filtered)
  }

  const values = {
    favoriteItems,
    addToFavorite,
  }

  return <FavoriteContext.Provider value={values}>{children}</FavoriteContext.Provider>

}

const useFavorite = () => useContext(FavoriteContext)

export { FavoriteProvider, useFavorite }