import React, { useState, useEffect } from "react";
import OrderCard from "../components/OrderCard";
import { Button } from 'react-bootstrap';
import Header from '../components/Header';
import Col from 'react-bootstrap/Col';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem('sesionToken')
  useEffect(() => {
    fetch('http://localhost:8080/orders', { method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
    },)
      .then((response) => response.json())
      .then((data) => setOrders(data))
      
      .catch((error) => console.error(error));
  }, []);

  const pendingOrders = orders.filter((order) => order.status === "pending");

  return (
    <Col className='text-center'>
      <Header/>
      <div>
      <Button
         style={{ fontSize: '1.4rem'}}
         className='mt-5 mb-5 mx-3'
          variant="warning"
          // onClick={() =>

          // }
        >  
        Ordenes Pendientes
        </Button>
        <Button
          style={{ fontSize: '1.4rem'}}
          className='mt-5 mb-5 mx-3'
          variant="warning"
          // onClick={() =>
          // }
        >
          Ordenes Entregadas
        </Button>
        {pendingOrders.map((order) => (
        <OrderCard  order={order} key={order.id} />
      ))}
      </div>
    </Col>
  );
};

export default Orders;