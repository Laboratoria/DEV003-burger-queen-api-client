import React, { useEffect, useState } from 'react';
import TableAdmin from '../components/TableAdmin';
import { Button } from 'react-bootstrap';
import Header from '../components/Header';
import Col from 'react-bootstrap/Col';

function Admin() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProducts(data.menu))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = productId => {
    fetch(`http://localhost:3000/products/${productId}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        const updatedProducts = products.filter(item => item.id !== productId);
        setProducts(updatedProducts);
      })
      .catch(error => console.error(error));
  };

  return(
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
        Empleados
        </Button>
        <Button
          style={{ fontSize: '1.4rem'}}
          className='mt-5 mb-5 mx-3'
          variant="warning"
          // onClick={() =>
          // }
        >
        Productos
        </Button>
        <TableAdmin className='text-center' products={products} handleDelete={handleDelete} />
      </div>
    </Col>
 
 
  )
}

export default Admin;
