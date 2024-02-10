import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import ReactForm from "./components/reactForm.jsx";
import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <>
      <Container className="p-5">
        <Row>
          <ReactForm />
        </Row>
      </Container>
    </>
  );
}

export default App;
