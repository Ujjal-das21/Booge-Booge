import React, { useState } from "react";
import { Link } from "react-router-dom";

function EditFood(props) {
    const id = props.id;
    // console.log(id);
    //   console.log(  props.foodList.find(obj=>{
    //     return obj.id===id
    // }));
    const [dish, setDish] = useState(props.foodList.find(obj => {
        return obj.id === id
    }));
    function handleChange(event) {
        const { name, value } = event.target;
        setDish(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    function handleUpdate(event) {
        // event.preventDefault();
        console.log(dish);
        props.setFoodList(prev => {
            prev.find(obj => {
                if (obj.id === id) {
                    obj.name = dish.name;
                    obj.price = dish.price;
                    obj.category = dish.category;
                    obj.item = dish.item;
                }
            })
            return prev;
        })
        setDish({
            id: "",
            name: "",
            price: 0,
            category: "",
            item: ""
        })
    }
    return (<div className="container" id="food-edit-form">
        <h1 className="app-heading">Edit Food</h1>
        <form className="card container" >
            <div className="row">
                <label htmlFor="name">Name</label>
                <div className="col"><input onChange={handleChange} type="text" name="name" value={dish.name} /></div>
            </div>

            <div className="row">
                <label htmlFor="Price">Price</label>
                <div className="col"><input onChange={handleChange} type="text" name="price" value={dish.price} /></div>
            </div>
            <div className="row">
                <label htmlFor="Category">Category</label>
                <div className="col"> <select onChange={handleChange} name="category" value={dish.category}>
                    <option value="non-veg">Non Veg</option>
                    <option value="veg">Veg</option>
                </select></div>
                <div className="col"> <select onChange={handleChange} name="item" value={dish.item}>
                    <option value="chicken">Chicken</option>
                    <option value="paneer">Paneer</option>
                </select></div>
            </div>
            <div className="row" class="food-add-button">
                <div className="col"><button type="button" className="btn" onClick={handleUpdate}><Link to="/food">Update</Link></button>
                </div>
            </div>
        </form>

    </div>

    )
}
export default EditFood;