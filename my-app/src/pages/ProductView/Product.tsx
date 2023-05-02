import React, { useState } from 'react'
import { Container,Row,Col,Card } from 'react-bootstrap'
import { ProductCard } from './ProductCard';
import axios from 'axios';


interface ProductInterface {
    product: {
      id:number
      name:string,
      price:number,
      description:string,
      stock:number,
      updatedAt:string,
      createdAt:string
  
    },
   
  }

export const Product = () => {
    const [productList, setProductList] = useState([{}])

    const fetchProducts = async ():Promise<[{}]> =>{
        const productList:any = await axios.get("http://localhost:3030/product")
       
        return productList.data
    }

    useState(()=>{
        const fetchData = async() =>{
            const productList = await fetchProducts()
            setProductList(productList)
                   
        }

        fetchData()
    })

  return (
    <Container>
      <Row>
      {productList.map((product:any) => (
          <ProductCard product={product}/>
        ))}
      </Row>
    </Container>
  )
}
