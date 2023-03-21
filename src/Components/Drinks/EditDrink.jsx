import React, { useState } from "react";
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
    return (<div>
        <h1>Edit Drink</h1>
        <form >
                <label htmlFor="name">name</label>
                <input onChange={handleChange} type="text" name="name" value={drink.name}  />
                <label htmlFor="name">Price</label>
                <input onChange={handleChange} type="number" name="price" value={drink.price}   />
                <label htmlFor="name">Category</label>
               <select onChange={handleChange} name="category" value={drink.category}  >
                <option value="whiskey">whiskey</option>
                <option value="rum">rum</option>
                <option value="beer">beer</option>
               </select> 
               <button > <Link onClick={handleUpdate}  to="/drink">Update</Link></button>
              
    
            </form>
    </div>);
}
export default EditDrink;