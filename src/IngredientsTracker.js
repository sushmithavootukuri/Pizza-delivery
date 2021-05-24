import React, { useState, useEffect } from "react";
import { api } from "./api/index";

export default function IngredientsTracker() {
    const [ingredients, setIngredients] = useState([])

    useEffect(() => {
        async function getIngredients() {
            const response = await api.get("/pizza/ingredients");
            // console.log(response.data)
            setIngredients(response.data);
        }
        getIngredients();
    }, []);


    return (
        <div className="table-responsive">
            <table className="table table-bordered table-hover w-50 mx-auto mt-5">
                <thead className="thead bg-warning">
                    <tr>
                        <th >Name</th>
                        <th >Type</th>
                        <th className="w-25">Count</th>
                        <th className="w-25">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {ingredients.map((item, index) => (
                        <DisplayRow item={item} key={index} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};


function DisplayRow({ item }) {
    const [isEditable, setisEditable] = useState(false);
    const [count, setCount] = useState(item.count);

    let updateIngredient = async () => {

        let ingredient = { _id: item._id, count }
        if (count === "") {
            ingredient.count = 0;
            setCount(0);
        }
        try {
            await api.patch("/pizza/ingredients", ingredient);

        } catch (error) {
            alert(error)
        }
        setisEditable(false)
    }

    return (
        <tr>
            <td >{item.name}</td>
            <td>{item.type}</td>

            {!isEditable ? <td>{count}</td> :
                <td><input className="m-0 p-1" type="Number" value={count} onChange={(e) => setCount(e.target.value)}></input></td>}
            <td>
                {!isEditable ?
                    <button className="btn btn-outline-warning my-auto px-2 w-75" onClick={() => setisEditable(true)}>Edit</button> :
                    <button className="btn btn-warning  my-auto px-3 w-75" onClick={updateIngredient}>Update</button>}</td>
        </tr>
    );
};