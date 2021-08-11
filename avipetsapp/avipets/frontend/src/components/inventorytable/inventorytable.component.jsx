import React from "react"

const InventoryTable = (props) => {
    return (
      <div>
        <tr>
          <th scope="row">{props.counter}</th>
          <td className="text-center">{props.category}</td>
          <td className="text-center">{props.item_name}</td>
          <td className="text-center">{props.quantity}</td>
        </tr>
      </div>
    );
}

export default InventoryTable;
