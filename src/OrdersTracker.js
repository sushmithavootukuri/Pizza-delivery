import React, { useState, useEffect } from "react";
import { api } from "./api/index";
import Select from "react-select";

export default function OrdersTracker() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function getOrders() {
      const response = await api.get("/pizza/orders");
      console.log(response.data);
      setOrders(response.data);
    }
    getOrders();
  }, []);

  console.log(orders);
  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover m-5 orders-table">
        <thead className="thead bg-warning">
          <tr>
            <th>S.no</th>
            <th>Order Id</th>
            <th>Order Name</th>
            <th>Customer</th>
            <th className="w-25">Status</th>
            <th className="w-25">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <DisplayRow order={order} index={index} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DisplayRow({ order, index }) {
  console.log(order);
  const [isEditable, setisEditable] = useState(false);
  const [status, setStatus] = useState(order.status);

  const statusOptions = [
    { value: "Order Confirmed", label: "Order Confirmed" },
    { value: "Order is being prepared", label: "Order is being prepared" },
    { value: "Order is picked up", label: "Order is picked up" },
    { value: "Order Delivered", label: "Order Delivered" }
  ];

  let updateOrder = async () => {
    let request = { _id: order._id, status };

    try {
      console.log(request);
      setStatus(request.status);
      await api.patch("/pizza/orders", request);
    } catch (error) {
      alert(error);
    }
    setisEditable(false);
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{order._id}</td>
      <td>{order.name}</td>
      <td>{order.custId}</td>

      {!isEditable ? (
        <td>{status}</td>
      ) : (
        <td>
          <Select
            defaultValue={order.status}
            options={statusOptions}
            onChange={(e) => {
              setStatus(e.value);
            }}
          />
        </td>
      )}

      <td>
        {!isEditable ? (
          <button
            className="btn btn-outline-warning my-auto px-2 w-75"
            onClick={() => setisEditable(true)}
          >
            Edit
          </button>
        ) : (
          <button
            className="btn btn-warning  my-auto px-3 w-75"
            onClick={updateOrder}
          >
            Update
          </button>
        )}
      </td>
    </tr>
  );
}
