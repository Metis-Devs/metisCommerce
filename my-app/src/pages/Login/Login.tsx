import React, { useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ApiService from "../../service/api";
import AlertService from "../../service/alert";
import { faEye, faEyeSlash  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FormData {
  email: string;
  password: string;
}
export const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const token = await ApiService.postPublic("/auth/login", formData);
      console.log(token.data);
      localStorage.setItem("loginToken", token.data.loginToken);
      localStorage.setItem("userKey", token.data.userKey);
      navigate("/");
    } catch (err: any) {
      AlertService.error({
        title: "Error",
        text: err.response.data.msg,
      });
    }
  };
  return (
    <Container
      fluid
      className="h-100 w-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#e5e5e5" }}
    >
      <Card className="login-card">
        <div className="login-titles">
          <h3>Metis Commerce Login</h3>
          <h5>Enter email and password to log on:</h5>
          <hr />
        </div>
        
        {/* <Card.Body className="login-card-body" style={{ backgroundColor: "#e5e5e5" }}> */}
        <blockquote
          className="blockquote mb-0 card-body"
          // style={{ backgroundColor: "#e5e5e5" }}
        >
          <Form className="login-card-form" onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Control
                type="email"
                name="email"
                placeholder="Email..."
                className="form-control-lg"
                onChange={onChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail" className="login-password">
              <Form.Control
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password..."
                className="form-control-lg"
                onChange={onChange}
              />

              <div
                className="btn form-control-lg"
                onClick={() => setShowPassword(!showPassword)}
                
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </div>
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
