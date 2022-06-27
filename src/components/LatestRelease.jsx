import { Container, Row, Col, Carousel } from "react-bootstrap";
import romance from "../data/romance.json";
const LatestRelease = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-3 mb-3">
        <Col md={6}>
          <Carousel>
            {romance.map((romance) => {
              return (
                <Carousel.Item key={romance.asin}>
                  <img
                    className="d-block w-100"
                    src={romance.img}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <p>€{romance.price}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};
export default LatestRelease;
