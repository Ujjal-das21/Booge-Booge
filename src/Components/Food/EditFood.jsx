import React, { useState } from "react";
import { Link } from "react-router-dom";

function EditFood(props) {
    const id = props.id;
    // console.log(id);
//   console.log(  props.foodList.find(obj=>{
//     return obj.id===id
// }));
    const [dish, setDish] = useState(props.foodList.find(obj=>{
        return obj.id===id
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
      props.setFoodList(prev=>{
         prev.find(obj=>{
            if(obj.id===id)
            {
                obj.name=dish.name;
                obj.price=dish.price;
                obj.category=dish.category;
                obj.item=dish.item;
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
    return (<div>
        <h1>Edit Food</h1>
        <form >
            <label htmlFor="name">Name</label>
            <input onChange={handleChange} type="text" name="name"  value={dish.name} />
            <label htmlFor="Price">Price</label>
            <input onChange={handleChange} type="text" name="price" value={dish.price} />
            <label htmlFor="Category">Category</label>
            <select onChange={handleChange} name="category" value={dish.category}>
                <option value="non-veg">Non Veg</option>
                <option value="veg">Veg</option>
            </select>
            <select onChange={handleChange} name="item" value={dish.item}>
                <option value="chicken">Chicken</option>
                <option value="paneer">Paneer</option>
            </select>
            <button onClick={handleUpdate}><Link to="/food">Update</Link></button>
        </form>

    </div>

    )
}
export default EditFood;