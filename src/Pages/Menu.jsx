import React from 'react';
import ClientForm from '../components/ClientForm';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import ShoppingCart from '../components/ShoppingCart';

const Menu = () => {
  const [name, setName] = useState([]);
  
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);


  return (
    <div className="text-center">
      <Header />
      <div>
        <ClientForm
          onChange={(name) => {
            setName(name);
          }}
        />
         
        <Button
          style={{ fontSize: '1.4rem' }}
          className="mb-5 mx-3"
          variant="warning"
          // onClick={() =>

          // }
        >
          Desayuno
        </Button>
        <Button
          style={{ fontSize: '1.4rem' }}
          className="mb-5 mx-3"
          variant="warning"
          // onClick={() =>
          // }
        >
          Almuerzo y Cena
        </Button>

       
        <ProductList
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />
      </div>
    </div>
  );
};

export default Menu;
