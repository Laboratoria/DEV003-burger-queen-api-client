import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function TableAdmin({ products, handleDelete }) {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>id</th>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Precio</th>
          <th>Eliminar</th>
          <th>Editar</th>
        </tr>
      </thead>
      <tbody>
        {products.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.price}</td>
            <td>
              <Button variant="danger" onClick={() => handleDelete(item.id)}>
                <RiDeleteBin6Line />
                Eliminar
              </Button>
            </td>
            <td>
              <Button variant="primary">
                <AiOutlineEdit />
                Editar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}



export default TableAdmin;
