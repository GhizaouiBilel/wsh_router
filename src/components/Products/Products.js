import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Products = ({ product }) => {
  return (
    <div className="d-flex justify-content-around">
      {product.map((elt) => (
        <Card style={{ width: "19rem" }}>
          <Card.Img variant="top" src={elt.imgSrc} />
          <Card.Body>
            <Card.Title>{elt.name}</Card.Title>
            <Card.Text>
            {elt.price}
            </Card.Text>
            <Link to={`/products/${elt.id}`}><Button variant="primary">Show this product</Button></Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Products;
