import { Card, Form, Col } from "react-bootstrap";

const DisplayText = () => {
  return (
    <Col>
      <Card style={{ width: "25rem" }} className="p-3">
        <Card.Body>
          <h5 className="fw-light fs-2 text-success">Hello</h5>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DisplayText;
