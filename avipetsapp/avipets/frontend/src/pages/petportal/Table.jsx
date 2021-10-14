import React from 'react'


const Table = ({ columns, rooms, checkout }) => {
     const columns = headList.map((head, index) => (
       <th key={index} scope="col">
         {head}
       </th>
     ));

      const rows = rooms.map((room, index) => (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{room.room_slug}</td>
          <td>{room.client.scooby}</td>
          <td>{room.client.pets}</td>
          <td>
            <button
              onClick={() => checkout(room.room_id)}
              className="btn btn-outline-dark"
            >
              Checkout
            </button>
          </td>
        </tr>
      ));
  return (
    <div className="table-responsive-md">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            {columns}
          </tr>
        </thead>
        <tbody>{rows}</tbody>;
      </table>
    </div>
  );
};


export default Table
