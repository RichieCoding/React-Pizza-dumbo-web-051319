import React from "react";

const Pizza = props => {
  return (
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      <td>{props.pizza.vegetarian}</td>
      <td>
        <button
          type='button'
          className='btn btn-primary'
          onClick={() =>
            props.setPizzaTopping(
              props.pizza.topping,
              props.pizza.size,
              props.pizza.vegetarian
            )
          }
        >
          Edit Pizza
        </button>
      </td>
    </tr>
  );
};

export default Pizza;
