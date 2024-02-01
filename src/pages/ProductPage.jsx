import { useEffect } from "react"
import { useParams } from "react-router-dom"

const ProductPage = () => {

const params = useParams()

const getOneProduct = async() => {
    const getProduct = await fetch(`http://localhost:3002/api/products/${params.id}`)
    const data = await getProduct.json()

}

useEffect(() =>{
    getOneProduct
},[])

  return (
    <div>Pdasdad</div>
  )
}
export default ProductPage
