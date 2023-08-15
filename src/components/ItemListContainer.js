import { useState, useEffect } from 'react'
import {getProducts, getProductsByCategory } from '../services/firebase'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import Loader from './Loader'

function ItemListContainer({greeting}) {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const {categoryId} = useParams()

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts
    asyncFunc(categoryId)
    .then(response => {
      setProducts(response)
      setIsLoading(false)
    })
    .catch(error => {
    })
  },[categoryId])

  if(isLoading){
    return(
      <Loader />
    )
  }else{
  return (
    <div className="h-full text-center mt-8 text-green-500 font-semibold">
      {greeting ? greeting   : categoryId}
      <ItemList  products={products}/>
    </div>
  )}
}

export default ItemListContainer