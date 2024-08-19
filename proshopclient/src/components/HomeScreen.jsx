import { Col, Row } from "react-bootstrap";
import { Productdata } from "../const/Productdata";
import Product from "./Products";

const HomeScreen = () =>{
    return(
        <Row>
        {Productdata.map((product) => {
          return (
            <Col sm={6} xs={12} md={4} lg={3} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
          );
        })}
      </Row>
    )
}

export default HomeScreen;