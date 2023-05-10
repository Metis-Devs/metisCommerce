import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Container, Form, Modal, Placeholder } from "react-bootstrap";
import AlertService from "../../../service/alert";
import { ModalForm } from "../../../components/Modal";
import ApiService from "../../../service/api";

interface userInterface {
  cart: number;
  createdAt: string;
  email: string;
  firstname: string;
  id: number;
  idNumber: string;
  lastname: string;
  password: string;
  phoneNumber: number;
  role: number;
  updatedAt: string;
}

export const PersonalData = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalName, setModalName] = useState<string>("");
  const [inputName, setinputName] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [placeholder, setPlaceholder] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [user, setUser] = useState<userInterface>({
    cart: 0,
  createdAt: "",
  email: "",
  firstname: "",
  id: 0,
  idNumber:"",
  lastname: "",
  password: "",
  phoneNumber:0,
  role: 0,
  updatedAt: ""
  });
  const [user1, setUser1] = useState<userInterface>({
    cart: 0,
  createdAt: "",
  email: "",
  firstname: "",
  id: 0,
  idNumber:"",
  lastname: "",
  password: "",
  phoneNumber:0,
  role: 0,
  updatedAt: ""
  });
  const userId = localStorage.getItem("userKey");
  const handleClose = () => setShowModal(false);

  const openModal = (
    modalename: string,
    inputname: string,
    type: string,
    placeholder: string,
    name: string
  ) => {
    setModalName(modalename);
    setinputName(inputname);
    setType(type);
    setPlaceholder(placeholder);
    setName(name)

    setShowModal(true);
  };

  const fetchUser = async () => {
    try {
      const response = await ApiService.postPublic(
        "http://localhost:3030/user/getUser",
        {
          userId,
        }
      );

      setUser(response.data);
      setUser1(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      
      const updateUser = await ApiService.postPublic("user/updateUser", {
        userId,
        name: name,
        data: user1
      });
      setShowModal(false);
      window.location.reload();
    } catch (err: any) {
      AlertService.error({
        title: "Error",
        text: err.response.data.msg,
      });
    }
  };

  const handleChange = async(e: React.ChangeEvent<HTMLInputElement>) => {
    
    setUser1({ ...user, [e.target.name]: e.target.value });
    
  }; 

  useEffect(() => {
    fetchUser();
  },[]);

  
  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ backgroundColor: "#e5e5e5", height: "916px" }}
    >
      <div className="personale-profile-name">
        <div className="personale-profile-name-inner">
          <h2>Datos Personales</h2>
        </div>
      </div>

      <div className="personale-profile-path">
        <div className="personale-profile-path-inner">
          <a
            className="profile-data"
            onClick={() => {
              openModal("Nombre", "Nombre", "text", user.firstname, "firstname");
            }}
          >
            <h5>Nombre</h5>
            <div className="personal-data">
              <h5>{user.firstname}</h5>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </a>

          <a
            className="profile-data"
            onClick={() => {
              openModal("Apellido", "Apellido", "text", user.lastname,"lastname");
            }}
          >
            <h5>Apellido</h5>
            <div className="personal-data">
              <h5>{user.lastname}</h5>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </a>
          <a
            className="profile-data"
            onClick={() => {
              openModal("Email", "Email", "email", user.email, "email");
            }}
          >
            <h5>Email</h5>
            <div className="personal-data-email ">
              <h5>{user.email}</h5>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </a>
          <a
            className="profile-data"
            onClick={() => {
              openModal(
                "Numero de telefono",
                "Numero de telefono",
                "text",
                user.phoneNumber.toString(),
                "phoneNumber"
              );
            }}
          >
            <h5>Numero de telefono</h5>
            <div className="personal-data">
              <h5>{user.phoneNumber.toString()}</h5>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </a>

          <a
            className="profile-data"
            onClick={() => {
              openModal(
                "Numero de identificacion",
                "Numero de identificacion",
                "text",
                user.idNumber.toString(),
                "idNumber"
              );
            }}
          >
            <h5>Numero de identificacion</h5>
            <div className="personal-data">
              <h5>{user.idNumber.toString()}</h5>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </a>
        </div>
      </div>

      {showModal == true ? (
        <ModalForm
        handleSubmit={handleSubmit}
          showModal={showModal}
          handleClose={handleClose}
          inputName={inputName}
          placeholder={placeholder}
          type={type}
          modalName={modalName}
          name={name}
          handleChange={handleChange}
        />
      ) : (
        ""
      )}
    </Container>
  );
};
