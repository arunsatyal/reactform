import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import ReactForm from "./components/form.jsx";
import HookForm from "./components/hookForm.jsx";
import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <>
      <Container className="p-5">
        <Row>
          <ReactForm />
        </Row>

        <Row className="my-4">
          <h3>OnChange event using custom hook</h3>
        </Row>
        <Row>
          <HookForm />
        </Row>
      </Container>
    </>
  );
}

export default App;
