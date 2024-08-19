import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Ratings from "./Ratings";

const Product = ({ product }) => {
  console.log(product, "productssssss");
  return (
    <Card className="my-3 p-3 rounded custom-card">
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={product.image}
          variant="top"
        />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`} className="card-title">
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
      <Ratings value={product.rating} text={`${product.rating} review`}/>
    </Card>
  );
};
export default Product;
