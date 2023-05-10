
import React from 'react'

export default function Table({products}) {
  return (
    <table className="table table-bordered" style={{ fontSize: '18px',  color: '#fff'}}>
          <thead>
            <tr>
              <th>Productos</th>
              <th>Cantidad</th>
            </tr>
          </thead>
          <tbody>
      {products.map((element, index) => (

            <tr key={index}>
              <td> {element.product.name}</td>
              <td> {element.qty}</td>
            </tr>

      ))}
                </tbody>
        </table>
  )
}


