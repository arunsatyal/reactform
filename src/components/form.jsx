import { Card, Form, Col } from "react-bootstrap";
import React, { useState } from "react";
import DisplayText from "./displayText.jsx";

const ReactForm = (props, propsHook) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <Col>
        <Card style={{ minHeight: "20rem" }} className="p-3 mb-4">
          <Card.Body>
            <Card.Title className="mb-4 text-center">
              <p>Data displaying from same page</p>
              <p className="text-center">
                {inputValue.fname}
                <span> ❤️ </span>
                {inputValue.fav}
              </p>
            </Card.Title>
            <Form>
              <Form.Control
                size="lg"
                className="mb-3 fw-light"
                name="fname"
                value={inputValue.fname}
                onChange={handleInputChange}
                type="text"
                placeholder="Your name"
              />
              <Form.Control
                size="lg"
                className="mb-3 fw-light"
                name="fav"
                value={inputValue.fav}
                onChange={handleInputChange}
                type="text"
                placeholder="Favorite things"
              />
            </Form>
          </Card.Body>
        </Card>
      </Col>

      <DisplayText myname={inputValue.fname} myfav={inputValue.fav} />
    </>
  );
};

export default ReactForm;
