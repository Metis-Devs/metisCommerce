import React, { useEffect, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ApiService from "../../service/api";
import AlertService from "../../service/alert";
import axios from "axios";

interface locationBasicData {
  country: string;
  province: string;
  city: string;
  numeration: string;
  floorNumber: string;
  zipCode: string;
}

interface locatioObject {
  centroide: { lat: string, lon: string };
  id: string;
  nombre: string;
  provincia: { id: string; nombre: string };
}

export const Location = () => {
  const navigate = useNavigate();
  const [basicData, setBasicData] = useState<locationBasicData>({
    country: "",
    province: "",
    city: "",
    numeration: "",
    floorNumber: "",
    zipCode: "",
  });

  const [province, setProvince] = useState<locatioObject[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(basicData);
    try {
      const token = await ApiService.postPublic("/auth/register", basicData);
      console.log(token.data);
      localStorage.setItem("loginToken", token.data.loginToken);
      navigate("/");
    } catch (err: any) {
      AlertService.error({
        title: "Error",
        text: err.response.data.msg,
      });
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBasicData({ ...basicData, [e.target.name]: e.target.value });
  };

  

  useEffect(()=>{
    const getProvince = async () => {
      var data = await axios.get(
        "https://apis.datos.gob.ar/georef/api/municipios?provincia=mendoza&max=999"
      );
  
      // data.data.municipios.map((p:any) => {
        const municipios = data.data.municipios.map((municipio: any) => ({
          id: municipio.id,
          nombre: municipio.nombre,
          
        }));
        setProvince(municipios);

        
      // })
      
      console.log(province)
    };

    getProvince()
  }, [])

  return (
    <Container
      fluid
      className="h-100 w-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#e5e5e5" }}
    >
      <Card className="register-card">
        <div className="login-titles">
          <h3>Datos de entrega</h3>
          <h5>Esto es opcional, se puede dar esta informacion mas adelante:</h5>
        </div>
        {/* <Card.Body className="login-card-body" style={{ backgroundColor: "#e5e5e5" }}> */}
        <blockquote
          className="blockquote mb-0 card-body"
          style={{ backgroundColor: "#e5e5e5" }}
        >
          <Form className="login-card-form " onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Control
                type="text"
                name="firstname"
                placeholder="Name..."
                className="form-control-lg"
                onChange={onChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="text"
                name="lastname"
                placeholder="Lastname..."
                className="form-control-lg"
                onChange={onChange}
              />
            </Form.Group>

            <Form.Select
              aria-label="Default select example"
              className="form-control-lg"
            >
              {/* {province} */}
            </Form.Select>

            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="text"
                name="password"
                placeholder="Password..."
                className="form-control-lg"
                onChange={onChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="text"
                name="idNumber"
                placeholder="ID..."
                className="form-control-lg"
                onChange={onChange}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100 form-control-lg"
            >
              Sign in
            </Button>
          </Form>
        </blockquote>

        {/* </Card.Body> */}
      </Card>
    </Container>
  );
};
