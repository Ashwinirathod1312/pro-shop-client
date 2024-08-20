import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Ratings from "./Ratings";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded custom-card"
    style={{ width: '15rem', height: '22rem' }}>
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={product.image}
          variant="top"
          style={{ width: '100%', height: '12rem'}}
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
