import React, { useState } from "react";
import "./Food.css";
import Dish from "../../Food.js";
import { Link } from "react-router-dom";
import uniqid from "uniqid";
function Food(props) {
    // const [foodList,setFoodList]=useState(Dish);
    const [dish, setDish] = useState({

        id: uniqid(),
        name: "",
        price: 0,
        category: "",
        item: ""

    });
    function handleChange(event) {
        const { name, value } = event.target;
        setDish(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log(dish);
        props.setFoodList(prev => {
            return [...prev, dish];
        })
        setDish({
            id: uniqid(),
            name: "",
            price: 0,
            category: "",
            item: ""
        })
    }
    function delItem(event) {
        const index = event.target.value;
        console.log(event.target);
        props.setFoodList(prev => {
            return prev.filter(item => {
                return (item.id !== index)
            })
        })


    }
    function updateItem(event) {
        console.log(event.target);
        props.setId(event.target.name);
        //    event.preventDefault();

    }
    return (<div className="container">
        <h1 className=" app-heading" >Food</h1>
        <div className="container">
            <table className="table" id="food-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Item</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.foodList.map((item, index) => {
                        return (<tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>



                            <td>{item.category}</td>
                            <td>{item.item}</td>
                            <td>
                                <div className="row" id="button-action">
                                  <div className="col">  <button type="button" className="btn" ><Link onClick={updateItem} name={item.id} to={"/food/edit/" + item.id} ><img name={item.id} style={{height:"15px",width:"15px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAnUlEQVR4nO3SsQnCUBRA0b+AhQSHsVEnUcRBTOkEFuJIuoHiBCKC/REhQohGJL4UQm73m3vfe/yUOlJKWOCICzbohR0GuVc2bQfOEeLxh8ghauq8JjKPkKuJ5JHyJ6vG0i/kTyapRfmyk//RWR4gw7pG3vyfl8EgXI4ZhqV3v7TJ75Nji2slkkWeZV9Me8MoRFoJnLArNpmGBzrSG+5BPu5S+5Q9QQAAAABJRU5ErkJggg=="/> </Link></button></div>
                                   {/* <div className="col"> <button type="button" className="btn"  ><img  onClick={delItem} type="button" value={item.id}  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAa0lEQVR4nGNgoAb4//8/0////xX///+v9P//f+P///9v+f///24obQwVVwSpw6Y5+T9xIJmQzbiwIlaboQa0/f//fyYe3IbP3/cJOPn+qObBEmA3CWi+gU9zyP///3dC0zQ6BokH49RMKgAAk6HOSYvYCFcAAAAASUVORK5CYII="/></button></div> */}
                                   <div className="col"> <button type="button" className="btn" value={item.id} onClick={delItem} >delete</button></div>
                                </div>
                            </td>

                        </tr>);
                    })}
                </tbody>

            </table>
        </div>

        <div className="container">
            <form className="card container" id="food-form">
                <div className="row">
                <label htmlFor="name">Name</label>
                    <div className="col">  <input onChange={handleChange} type="text" name="name" value={dish.name} /></div>
                </div>
                <div className="row">
                <label htmlFor="Price">Price</label>
                    <div className="col"> <input onChange={handleChange} type="text" name="price" value={dish.price} /></div>
                </div>
                <div className="row">
                <label htmlFor="Category">Category</label>
                    <div className="col">  <select onChange={handleChange} name="category" value={dish.category}>
                    <option value="non-veg">Non Veg</option>
                    <option value="veg">Veg</option>
                </select></div>
                <div className="col"> <select onChange={handleChange} name="item" value={dish.item}>
                    <option value="chicken">Chicken</option>
                    <option value="paneer">Paneer</option>
                </select></div>
                </div>
              <div className="row" class="food-add-button">
                <div className="col"> <button onClick={handleSubmit}>Add</button></div>
              </div>
               
            </form>
        </div>
       <div className="row" id="goto-table">
        <div className="col"><button type="button" className="btn"><Link to={"../admin"}>Back</Link></button></div>
        <div className="col"> <button type="button" className="btn"><Link to={"/table"}>Go Table</Link></button></div>
       </div>
    </div>);
}

export default Food;