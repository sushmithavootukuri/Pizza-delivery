import React, { useState, useEffect } from "react";
import Select from "react-select";
import { api } from "./api/index";

export default function ViewMenu() {
  const [cartItems, setCartItems] = useState([]);
  const [toppings, setToppings] = useState([]);
  const [meat, setMeat] = useState("");
  const [price, setPrice] = useState(0);

  return (
    <div className="mx-4">
      <div className="row">
        <ViewAllPizzas
          setCartItems={setCartItems}
          toppings={toppings}
          meat={meat}
          setMeat={setMeat}
          setToppings={setToppings}
          price={price}
          setPrice={setPrice}
        />
        <Cart
          cartItems={cartItems}
          setCartItems={setCartItems}
          meat={meat}
          setMeat={setMeat}
          toppings={toppings}
          setToppings={setToppings}
          price={price}
          setPrice={setPrice}
        />
      </div>
    </div>
  );
}

export function ViewAllPizzas({
  cartItems,
  setCartItems,
  meat,
  setMeat,
  toppings,
  setToppings,
  price,
  setPrice
}) {
  const [pizzaList, setPizzaList] = useState([]);

  useEffect(() => {
    async function getMenu() {
      const response = await api.get("/pizzas");
      console.log(response.data);
      setPizzaList(response.data);
    }
    getMenu();
  }, []);

  return (
    <div className="col-md-8">
      <div className="row">
        {pizzaList.map((pizza, index) => (
          <ViewPizza
            pizza={pizza}
            cartItems={cartItems}
            setCartItems={setCartItems}
            key={index}
            meat={meat}
            setMeat={setMeat}
            toppings={toppings}
            setToppings={setToppings}
            price={price}
            setPrice={setPrice}
          />
        ))}
      </div>
    </div>
  );
}

const ViewPizza = ({ pizza, setCartItems, setMeat, setToppings, setPrice }) => {
  return (
    <div className="col-md-6 col-lg-4 mt-5">
      <div className="card h-100 pizza-card">
        <img
          src={pizza.url}
          className="card-img-top pizza-img"
          alt={pizza.name}
        />
        <div className="card-body pizza-card-body">
          <h5 className="card-title mx-auto">{pizza.name}</h5>
          <p className="card-text mx-auto ">{pizza.description} </p>
          <p className="card-text mx-auto">Price : {pizza.price} / - </p>

          <button
            className="btn btn-primary my-0"
            onClick={() => {
              setCartItems(pizza);
              setToppings([]);
              setPrice(0);
              setMeat("");
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

const Cart = ({
  cartItems,
  setCartItems,
  toppings,
  meat,
  setMeat,
  setToppings,
  price,
  setPrice
}) => {
  return (
    <div className="col-md-4 mt-5">
      <div className="card">
        {cartItems.name && (
          <CustomPizza
            setCartItems={setCartItems}
            cartItems={cartItems}
            toppings={toppings}
            meat={meat}
            setMeat={setMeat}
            setToppings={setToppings}
            price={price}
            setPrice={setPrice}
          />
        )}
      </div>
    </div>
  );
};

function CustomPizza({
  cartItems,
  setCartItems,
  meat,
  setMeat,
  toppings,
  setToppings,
  price,
  setPrice
}) {
  const [sauce, setSauce] = useState("Tomato sauce");
  const [base, setBase] = useState("Thin Crust");
  const [cheese, setCheese] = useState("Add Extra Cheese");

  const veggies = [
    { value: "Olives", label: "Olives" },
    { value: "Tomato", label: "Tomato" },
    { value: "Corn", label: "Corn" },
    { value: "Capsicum", label: "Capsicum" }
  ];

  const baseOptions = [
    { value: "Thin Crust", label: "Thin Crust" },
    { value: "Hand Tossed", label: "Hand Tossed" },
    { value: "Stuffed Crust", label: "Stuffed Crust" }
  ];

  const sauceOptions = [
    { value: "Tomato sauce", label: "Tomato sauce" },
    { value: "White Garlic Sauce", label: "White Garlic Sauce" },
    { value: "White pizza Sauce", label: "White pizza Sauce" }
  ];
  const meatOptions = [
    { value: "Peri peri chicken", label: "Peri peri chicken" },
    { value: "Chicken Tikka", label: "Chicken Tikka" }
  ];

  function addVeggies(e) {
    let values = Array.isArray(e) ? e.map((x) => x.value) : [];
    setToppings(values);
    let toppingsPrice = values.length * 30;
    let meatPrice = meat ? 100 : 0;
    let cheesePrice = cheese === "Add Extra Cheese" ? 50 : 0;
    setPrice(toppingsPrice + cheesePrice + meatPrice);
  }
  return (
    <div className="m-3 cart-card">
      <h3 className="mx-auto">Your Cart</h3>
      <h5 className="mx-auto mt-2 text-warning h3">
        {" "}
        Pizza : {cartItems.name}
      </h5>

      <h6 className="text-center mt-3">Additional Toppings</h6>
      <Select
        placeholder="Additional Veggies"
        isMulti
        value={veggies.filter((obj) => toppings.includes(obj.value))}
        options={veggies}
        onChange={addVeggies}
        className="basic-multi-select"
        classNamePrefix="select"
      />

      <h6 className="text-center mt-3">Choose sauce</h6>
      <Select
        defaultValue={sauceOptions[0]}
        options={sauceOptions}
        onChange={(e) => {
          setSauce(e.value);
        }}
      />

      <h6 className="text-center mt-3">Choose Base</h6>
      <Select
        defaultValue={baseOptions[0]}
        options={baseOptions}
        onChange={(e) => {
          setBase(e.value);
        }}
      />

      <h6 className="text-center mt-3">Additional Meat</h6>
      <Select
        placeholder="Add additional Meat"
        options={meatOptions}
        onChange={(e) => {
          setMeat(e.value);
          let toppingsPrice = toppings.length * 30;
          let meatPrice = e.value ? 100 : 0;
          let cheesePrice = cheese === "Add Extra Cheese" ? 50 : 0;
          setPrice(toppingsPrice + cheesePrice + meatPrice);
        }}
      />

      <button
        className="btn btn-warning ml-3"
        onClick={() => {
          let toppingsPrice = toppings.length * 30;
          let meatPrice = meat ? 100 : 0;
          let cheesePrice = cheese === "Add Extra Cheese" ? 50 : 0;

          if (cheese === "Add Extra Cheese") {
            setCheese("Remove Extra Cheese");
            cheesePrice = 50;
            setPrice(toppingsPrice + cheesePrice + meatPrice);
          } else {
            setCheese("Add Extra Cheese");
            cheesePrice = 0;
            setPrice(toppingsPrice + cheesePrice + meatPrice);
          }
        }}
      >
        {cheese}
      </button>

      <p className="mx-auto">Price : {cartItems.price}</p>
      {price !== 0 && <p className="mx-auto">Aditional charges : {price}</p>}

      <p className="mx-auto">Cart Total : {price + cartItems.price}</p>

      <button
        className="btn btn-warning w-100"
        onClick={() => {
          let order = {
            custId: localStorage.getItem("ACCESS_TOKEN"),
            name: cartItems.name,
            base,
            toppings,
            meat,
            sauce,
            price: price + cartItems.price,
            status: "Order Confirmed"
          };

          api
            .post("/pizza/orders", order)
            .then((res) => {
              console.log(res);
              setCartItems([]);
            })
            .catch((error) => {
              if (error.response) {
                console.log(error.response);
              } else if (error.request) {
                console.log(error.request);
              } else if (error.message) {
                console.log(error.message);
              }
            });

          api.patch("/pizza/ingredients/order", order).then((res) => {
            console.log("Ingredients updated", "Status : " + res.status);
          });

          alert(`Order Received! ${cartItems.name} is being prepared `);
        }}
      >
        Place Order
      </button>
    </div>
  );
}
