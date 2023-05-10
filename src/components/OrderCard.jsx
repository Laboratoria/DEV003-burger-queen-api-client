import React, { useState } from 'react';
import Table from './Table';
import { Container } from 'react-bootstrap';

const OrderCard = ({ order }) => {
  const [status, setStatus] = useState(order.status);
  const handleUpdate = (status) => {
    console.log('este es el status ', status);
  };

  return (
    <Container
      className="mb-4 mt-5"
      style={{
        maxWidth: '30rem',
        background: 'rgba(0,0,0)',
        borderRadius: '1rem',
        padding: '1.3rem',
        fontSize: '1.3rem',
        color: '#fff',
      }}
    >
      <p>
        <b>Orden id:</b> {order.id}
      </p>
      <p>
        <b>Estatus: </b>
        {order.status}
      </p>
      <Table products={order.products} />

      <button
        type="button"
        className="btn btn-warning"
        onClick={() => handleUpdate(order.status)}
      >
        Enviar
      </button>
      {
        // aca hacer el cambio de status
      }
    </Container>
  );
};

export default OrderCard;
