import React, { useEffect, useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import ApiService from '../../service/api'
import { useNavigate } from 'react-router-dom'
import AlertService from '../../service/alert'

interface basicData{
    firstname:string,
    lastname:string,
    email:string,
    password:string,
    idNumber:string
}

export const Register = () => {
    const navigate = useNavigate();
    const [basicData, setBasicData] = useState<basicData>({
        firstname: " ",
        lastname: " ",
        email: " ",
        password: " ",
        idNumber: " "
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        console.log(basicData)
        try{
            const token = await ApiService.postPublic("/auth/register", basicData)
            console.log(token.data)
            localStorage.setItem("loginToken", token.data.loginToken)
            navigate("/")
        }catch(err:any){
            
            AlertService.error({
                title: "Error",
                text: err.response.data.msg
            })
        }
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBasicData({ ...basicData, [e.target.name]: e.target.value });
    }

  return (
    <Container
      fluid
      className="h-100 w-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#e5e5e5" }}
    >
      <Card className="register-card">
        <div className="login-titles">
          <h3>Sign up now</h3>
          <h5>Enter the following data:</h5>
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

            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                placeholder="Email..."
                className="form-control-lg"
                onChange={onChange}
              />
            </Form.Group>

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
  )
}
