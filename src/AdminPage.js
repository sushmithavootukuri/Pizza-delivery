import React, { useState } from "react";
import IngredientsTracker from "./IngredientsTracker";
import OrdersTracker from "./OrdersTracker";

export default function AdminPage() {
  const [viewIngredients, setViewIngredients] = useState(false);
  const [viewOrders, setViewOrders] = useState(true);

  return (
    <div>
      <div className="admin-menu">
        <button
          className="btn-warning d-inline m-3"
          onClick={() => {
            setViewIngredients(true);
            setViewOrders(false);
          }}
        >
          Ingredients Tracker
        </button>
        <button
          className="btn-warning d-inline m-3"
          onClick={() => {
            setViewOrders(true);
            setViewIngredients(false);
          }}
        >
          {" "}
          Orders Tracker
        </button>
      </div>

      {viewIngredients && <IngredientsTracker />}
      {viewOrders && <OrdersTracker />}
    </div>
  );
}
