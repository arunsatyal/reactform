import { Card, Form, Col } from "react-bootstrap";

const DisplayHookText = (propsHook) => {
  return (
    <Col sm={6}>
      <Card
        style={{ minHeight: "20rem" }}
        className="p-4 bg-success text-white"
      >
        <Card.Body>
          <Card.Title className="text-center fs-3 mb-5">
            <p>Data displaying through custom hook "useForm" </p>
          </Card.Title>
          <p className="lead">Name: {propsHook.name}</p>
          <p className="lead">Country: {propsHook.country}</p>
          <p className="lead">Hobbies: {propsHook.hobbies}</p>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DisplayHookText;
