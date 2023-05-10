import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const ClientForm = (props) => {
  const [name, setName] = useState('');
  const [table, setTable] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    // Enviar datos a la API para guardar el cliente
  };

  return (
    <Form onSubmit={handleSubmit} className='text-center pt-3 pb-3'>
      <Form.Group controlId="formName">
        <Form.Control
         style={{ width: '18rem', marginLeft: "4rem"}}
         className='text-center mt-3 mb-3'
          type="text"
          placeholder="Cliente"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
            props.onChange(event.target.value);
          }}
        />
         <Form.Control
         className='text-center mt-3 mb-3'
         style={{ width: '8rem', marginLeft: "4rem"}}
          type="text"
          placeholder="Mesa"
          value={table}
          onChange={(event) => {
            setTable(event.target.value);
            props.onChange(event.target.value);
          }}
        />
      </Form.Group>
    </Form>
  );
};

export default ClientForm;
