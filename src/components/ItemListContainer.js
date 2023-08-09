import { useState, useEffect } from 'react'
import {getProducts, getProductsByCategory } from '../services/firebase'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

function ItemListContainer({greeting}) {
  const [products, setProducts] = useState([])
  const {categoryId} = useParams()

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts
    asyncFunc(categoryId)
    .then(response => {
      setProducts(response)
    })
    .catch(error => {
      console.error(error)
    })
  },[categoryId])

  return (
    <div className="h-full text-center mt-8 text-green-500 font-semibold">
      {greeting}
      <ItemList  products={products}/>
    </div>
  )
}

export default ItemListContainer