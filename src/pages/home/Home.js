import { Card, Container, ListGroup, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container fluid>
          <Navbar.Brand>Home</Navbar.Brand>
        </Container>
      </Navbar>
      <ListGroup className="m-3 gap-3">
        <Card
          onClick={() => {
            navigate("/image-tracking");
          }}
          style={{ cursor: "pointer" }}
        >
          <Card.Body>Image Tracking</Card.Body>
        </Card>
        <Card
          onClick={() => {
            navigate("/face-tracking");
          }}
          style={{ cursor: "pointer" }}
        >
          <Card.Body>Face Tracking</Card.Body>
        </Card>
      </ListGroup>
    </>
  );
}

export default Home;
