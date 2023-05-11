import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import ApiService from "../../../service/api";
import item4 from "./switch.jpg";
import { ProductInterface } from "../../../Interface/Interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faRefresh, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import AlertService from "../../../service/alert";
import { UpdateProductModla } from "../../../components/UpdateProductModla";

export const UserProducts = () => {
  const [productList, setProductList] = useState<ProductInterface["product"][]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const userId = localStorage.getItem("userKey");

  useEffect(() => {
    const fetchData = async () => {
      const response = await ApiService.getPublic(
        "/user/getUserProducts/" + userId
      );

      setProductList(response.data);
    };

    fetchData();
  }, []);

  const handleDelete = async (productId:number) => {
    try{
      await ApiService.deletePrivate("/product/delete/"+productId)
      AlertService.success({
        title: "Se elimino con exito!",
        text: ""
      })
      setTimeout(()=>{
        window.location.reload()
      },2000)
    }catch(err:any){
     
      AlertService.error({
        title: "Error",
        text: err.response.data.msg
      })
    }
  }
  
  const handleClose = () => setShowModal(false);
  
  const handleUpdate = async (index:number) => {
    try{
      setShowModal(true)
      setIndex(index)
    }catch(err:any){
     
      AlertService.error({
        title: "Error",
        text: err.response.data.msg
      })
    }
  }

  

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      fluid
      style={{ backgroundColor: "#e5e5e5", height:"100%" }}
    >
      <div className="w-75 pt-2">
        <Table
          striped
          bordered
          hover
          style={{
            borderBottom: "1px solid black",
            borderTop: "1px solid black",
          }}
        >
          <thead>
            <tr>
              <th>Product</th>
              <th>Description</th>
              <th>Price</th>
              <th>Cuantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((p, idx) => {
              return (
                <tr>
                  <td>
                    <img
                      src={item4}
                      alt=""
                      style={{ maxHeight: "250px", maxWidth: "250px" }}
                    />
                  </td>
                  <td>
                    <ul>
                      <li>{p.name}</li>
                      <li>{p.description}</li>
                    </ul>
                  </td>
                  <td>${p.price}</td>
                  <td>{p.stock}</td>
                  <td>
                   
                    <div style={{textDecoration: "none", listStyle:"none"}}>
                      <div title="Actualizar"><button onClick={()=>{handleUpdate(idx)}} className="btn btn-primary"><FontAwesomeIcon icon={faRefresh} /></button></div>
                      <div title="Eliminar"><button onClick={()=>{handleDelete(p.id)}} className="btn btn-danger"><FontAwesomeIcon icon={faTrashCan} /></button></div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        {showModal == true ? (
        <UpdateProductModla
        
          showModal={showModal}
          product={productList[index]}
          handleClose={handleClose}
          
        />
      ) : (
        ""
      )}
      </div>
    </Container>
  );
};
