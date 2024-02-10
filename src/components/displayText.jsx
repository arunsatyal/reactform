import { Card, Form, Col } from "react-bootstrap";

const DisplayText = (props) => {
  return (
    <Col sm={6}>
      <Card style={{ minHeight: "20rem" }} className="p-3">
        <Card.Body>
          <Card.Title className="text-center mb-5">
            <p>
              This is Data Display Component.
              <br /> Data is passing through props.
            </p>
          </Card.Title>
          <h5 className="text-center fw-light fs-2 text-success">
            {props.myname}
            <span> ❤️ </span>
            {props.myfav}
          </h5>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DisplayText;
