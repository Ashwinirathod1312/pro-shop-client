import { Col, Row } from "react-bootstrap";
import { Productdata } from "../const/Productdata";
import Product from "./Products";

const HomeScreen = () =>{
    return(
      <div>
        <h3 className="custom-brand1">  Latest Products</h3>
          
        <Row>
        {Productdata.map((product) => {
          return (
           
            <Col sm={6} xs={12} md={4} lg={3} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
         
          );
        })}
      </Row>
      </div>
    )
}

export default HomeScreen;