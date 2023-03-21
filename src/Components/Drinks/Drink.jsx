import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Drink.css";
import uniqid from "uniqid";
function Drink(props) {
    const [drink, setDrink] = useState({
        id: uniqid(),
        name: "",
        price: "",
        category: "",
    })
    function handleChange(event) {
        const { name, value } = event.target;
        setDrink(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    function handleSubmit(event) {

        // drink.id="10";
        // const newId = props.drinkList.length + 1;
        // console.log(newId);
        // setDrink(prev => {
        //     return {
        //         ...prev,
        //         id: newId
        //     }
        // })

        console.log(drink);
        props.setDrinkList(prev => {
            // drink.id = prev.length + 1;
            return [...prev,
                drink];
        })
        setDrink({
            id: uniqid(),
            name: "",
            price: "",
            category: ""
        })
        event.preventDefault();
    }
    function handleDelete(event) {
        const id = event.target.value;
        console.log(id);
        props.setDrinkList(prev => {
            return prev.filter(item => {
                return item.id !== id;
            })
        })
    }
    function handleUpdate(event) {
        const id = event.target.name;
        console.log(event.target.name);
        props.setDrinkId(id);


    }
    return (<div>
        <h1>drinks</h1>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {props.drinkList.map((item, index) => {
                        return (<tr>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.category}</td>

                            <button ><Link onClick={handleUpdate} name={item.id} to={"/drink/edit/" + item.id}>Update</Link></button>
                            <button onClick={handleDelete} value={item.id}>Delete</button>
                        </tr>)
                    })}
                </tbody>
            </table>
            <form >
                <label htmlFor="name">name</label>
                <input onChange={handleChange} type="text" name="name" value={drink.name} />
                <label htmlFor="name">Price</label>
                <input onChange={handleChange} type="number" name="price" value={drink.price} />
                <label htmlFor="name">Category</label>
                <select onChange={handleChange} name="category" value={drink.category}  >
                    <option value="whiskey">whiskey</option>
                    <option value="rum">rum</option>
                    <option value="beer">beer</option>
                </select>
                <button onClick={handleSubmit} >Add</button>


            </form>
        </div>
    </div>);
}
export default Drink;