import React, { useState } from "react";
import "./Drink.css"
import { Link } from "react-router-dom";
function EditDrink(props) {
    const id=props.drinkId;
    console.log(id);
    const [drink, setDrink] = useState(
        props.drinkList.find(obj => {
            return obj.id === id
        })
    )
    function handleChange(event) {
        const { name, value } = event.target;
        setDrink(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    function handleUpdate(event) {
        // event.preventDefault();
        props.setDrinkList(prev=>{
            prev.find(obj=>{
               if(obj.id===id)
               {
                   obj.name=drink.name;
                   obj.price=drink.price;
                   obj.category=drink.category;
                //    obj.item=dish.item;
               }
           })
           return prev;
         })
        setDrink({
            id: "",
            name: "",
            price: "",
            category: ""
        })
        props.setDrinkId("");
    }
    return (<div className="container" id="drink-edit-form">
        <h1 className="app-heading">Edit Drink</h1>
        <form className="card container"  >
            <div className="row">
            <label htmlFor="name">name</label>
                <div className="col">  <input onChange={handleChange} type="text" name="name" value={drink.name}  /></div>
            </div>
            <div className="row">
            <label htmlFor="name">Price</label>
                <div className="col"> <input onChange={handleChange} type="number" name="price" value={drink.price}   /></div>
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
               
               <div className="row" class="food-add-button">
                <div className="col"><button type="button" className="btn" > <Link onClick={handleUpdate}  to="/drink">Update</Link></button></div>
               </div>
             
              
    
            </form>
    </div>);
}
export default EditDrink;