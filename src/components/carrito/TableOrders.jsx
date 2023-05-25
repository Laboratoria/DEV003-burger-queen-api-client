import React, { useContext } from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { AiOutlineLine } from 'react-icons/ai';
import { GrAdd } from 'react-icons/gr';
import { CartContext } from './CartContext';

function TableOrders() {
  const { cart } = useContext(CartContext);
  return (
    <Row>
      <ListGroup className="align-items-center">
        {cart.map((products) => (
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start position-relative"
            key={products.id}
          >
            <Col xs={2} md={2}>
              <Badge bg="warning" pill className="position-absolute top-0 start-0">
                {products.qty}
              </Badge>
              <Image src={products.image} alt={products.name} thumbnail />
            </Col>

            <Col xs={7} md={7} style={{ paddingTop: '2%', marginLeft: '10px' }}>
              <p style={{ marginBottom: '3px', fontSize: '15px' }}>
                <strong>{products.name}</strong>
              </p>
              <p style={{ marginBottom: '3px', fontSize: '13px'}}>{products.type}</p>
            </Col>

            <Col
              xs={3}
              md={3}
              className="d-flex justify-content-end align-items-center"
              style={{ marginTop: '2%' }}
            >
              <Button variant="outline-warning" style={{ marginRight: '10px' }}>
                <AiOutlineLine />
              </Button>

              <p style={{ marginTop: '15%', marginRight: '10px' }}>${products.price}</p>

              <Button variant="outline-warning">
                <GrAdd />
              </Button>
            </Col>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Row>
  );
}

export default TableOrders;
