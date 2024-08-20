import { Col, Row } from "react-bootstrap";
import Product from "./Products";
import axios from "axios";
import { useEffect, useState } from "react";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const allProducts = async () => {
      await axios
        .get("/api/products")
        .then((res) => {
          setProducts(res.data);
        })
        .catch((err) => {
          console.log("failure response", err);
        });
    };
    allProducts();
  }, []);

  return (
    <div>
      <h3 className="custom-brand1"> Latest Products</h3>

      <Row>
        {products.map((product) => {
          return (
            <Col sm={6} xs={12} md={4} lg={3} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default HomeScreen;
