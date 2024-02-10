import { Card, Form, Col } from "react-bootstrap";
import useForm from "./hooks/useForm.js";
import DisplayHookText from "./displayHookText.jsx";

const HookForm = () => {
  const initialFormState = {
    firstName: "",
    country: "",
    hobbies: "",
  };

  const { inputValue: formValues, handleOnChange } = useForm(initialFormState);

  return (
    <>
      <Col sm={6}>
        <Card style={{ minHeight: "20rem" }} className="p-3 mb-4">
          <Card.Body>
            <Form>
              <Form.Control
                size="lg"
                className="mb-3 fw-light"
                name="firstName"
                value={formValues.firstName}
                onChange={handleOnChange}
                type="text"
                placeholder="Your name"
              />
              <Form.Control
                size="lg"
                className="mb-3 fw-light"
                name="country"
                value={formValues.country}
                onChange={handleOnChange}
                type="text"
                placeholder="Country"
              />
              <Form.Control
                size="lg"
                className="mb-3 fw-light"
                name="hobbies"
                value={formValues.hobbies}
                onChange={handleOnChange}
                type="text"
                placeholder="Your hobbies"
              />
            </Form>
          </Card.Body>
        </Card>
      </Col>

      <DisplayHookText
        name={formValues.firstName}
        country={formValues.country}
        hobbies={formValues.hobbies}
      />
    </>
  );
};

export default HookForm;
