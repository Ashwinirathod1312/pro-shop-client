import { useParams } from "react-router-dom";
import { Productdata } from "../const/Productdata";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import Ratings from "./Ratings";

const ProductScreen = () => {
  const { id: ProductId } = useParams();
  const productId = Productdata.find((product) => {
    console.log(product._id, "productid is here", product);

    return product._id == ProductId;
  });
  console.log(productId, "final product info");

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={4}>
          <Image src={productId.image} className=" w-100" alt={productId.name}></Image>
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>{productId.name}</ListGroup.Item>
            <ListGroup.Item><Ratings value={productId.rating} text={`${productId.rating} reviews`}/></ListGroup.Item>
            <ListGroup.Item>Description : {productId.description}</ListGroup.Item>
            <ListGroup.Item>Pricing : ${productId.price}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
        <Card>
        <ListGroup variant="flush">
        <ListGroup.Item>
            <Row>
                <Col>Price:</Col>
                <Col><strong>{productId.price}</strong></Col>
            </Row>
        </ListGroup.Item>
        <ListGroup.Item>
            <Row>
                <Col>In Stock:</Col>
                <Col><strong>{productId.counterInStock > 0 ?'In Stock' : 'out of stock'}</strong></Col>
            </Row>
        </ListGroup.Item>
        <ListGroup.Item>
            <Button className="btn-block" type="button"  disabled={productId.counterInStock == 0 }>Add To Cart</Button>
        </ListGroup.Item>
        </ListGroup>
            </Card></Col>
      </Row>
    </>
  );
};

export default ProductScreen;
