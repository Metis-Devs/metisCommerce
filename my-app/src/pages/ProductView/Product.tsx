import React, { useEffect, useState } from 'react'
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
    const [productList, setProductList] = useState<ProductInterface[]>([])

    const fetchProducts = async ():Promise<ProductInterface[]> =>{
        const productList:any = await axios.get("http://localhost:3030/product")
       
        return productList.data
    }

    useEffect(()=>{
        const fetchData = async() =>{
            const productList = await fetchProducts()
            setProductList(productList)
                   
        }

        fetchData()
    },[])

    
  return (
    <Container fluid style={{height: "100vh", backgroundColor: "#e5e5e5"}}>
      <Container className='h-100'>
      <Row style={{height:"350px"}}>
      {productList.map((product:any) => (
          <ProductCard product={product}/>
        ))}
      </Row>
    </Container>
    </Container>
  )
}
