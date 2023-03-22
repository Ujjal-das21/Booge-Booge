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
    return (<div className="container">
        <h1 className=" app-heading">Drinks</h1>
        <div className="container">
            <table className="table" id="drink-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.drinkList.map((item, index) => {
                        return (<tr>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.category}</td>

                            <td><button  type="button" className="btn" ><Link onClick={handleUpdate} name={item.id} to={"/drink/edit/" + item.id}>Update</Link></button>
                                <button type="button" className="btn" onClick={handleDelete} value={item.id}>Delete</button></td>
                        </tr>)
                    })}
                </tbody>
            </table>
           <div className="container">
           <form className="card container" id="drink-form" >
                <div className="row">
                    <label htmlFor="name">name</label>
                    <div className="col"><input onChange={handleChange} type="text" name="name" value={drink.name} />
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="name">Price</label>
                    <div className="col"><input onChange={handleChange} type="number" name="price" value={drink.price} />
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="name">Category</label>
                    <div className="col">
                        <select onChange={handleChange} name="category" value={drink.category}  >
                        <option value="whiskey">whiskey</option>
                        <option value="rum">rum</option>
                        <option value="beer">beer</option>
                    </select>
                    </div>
                </div>
                <div className="row " class="food-add-button">
                    <div className="col"><button className="btn" onClick={handleSubmit} >Add</button></div>
                </div>
            </form>
           </div>
           <div className="row" id="goto-table">
        <div className="col"><button type="button" className="btn"><Link to={"../admin"}>Back</Link></button></div>
        <div className="col"> <button type="button" className="btn"><Link to={"/table"}>Go Table</Link></button></div>
       </div>
        </div>
    </div>);
}
export default Drink;