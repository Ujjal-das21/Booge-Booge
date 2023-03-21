import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Table.css"
function TableBill(props) {
    const findTable = props.tableId;
    const [item, setItem] = useState({
        id: "",
        name: "",
        price: 0,
        category: "",
        item: "",
        quantity: 1

    })
    function handleBill(event) {
        event.preventDefault();
        props.tableList.find(obj => {
            if (obj.id === findTable) {
                props.setRevenue(prev => {
                    return (prev + obj.bill)
                })
            }
        })

    }

    function handleChange(event) {
        event.preventDefault();
        const { name, value } = event.target;
        console.log(name);
        //  console.log(props.foodList.find(obj=>{
        //     return (obj.id===value)
        // }));
        let foodItem = props.foodList.find(obj => {
            return (obj.id === value)
        });
        foodItem = {
            ...foodItem,
            quantity: "1"
        }
        console.log(foodItem);

        if (name === 'quantity') {
            setItem(prev => {
                return {
                    ...prev,
                    [name]: value
                }
            })
        }
        else {
            setItem(foodItem)
        }
        // console.log(event.target.value);
    }
    function handleAdd(event) {
        props.setTableList(prev => {
            prev.find(obj => {
                if (obj.id === findTable) {
                    obj.items.push(item);
                    obj.bill += (Number(item.price) * Number(item.quantity));

                }
            })
            return prev
        })
        setItem({
            id: "",
            name: "",
            price: 0,
            category: "",
            item: ""

        })
        event.preventDefault();
        console.log("I will add wait");
    }
    function handleID() {
        console.log("i am called");
        props.setTableId('');
    }
    return (<div className="container">
        <h1 className="app-heading">Table Bill</h1>
        <div className="container">
            <table class="table" id="billTable">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Item</th>
                        <th scope="col">Price</th>
                        <th scope="col">category</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {props.tableList.map((obj, index) => {
                        if (obj.id === findTable) {
                            return (<>
                                {obj.items.length > 0 ? obj.items.map((food, index) => {
                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{food.name}</td>
                                            <td>{food.price}</td>
                                            <td>{food.category}</td>
                                            <td>{food.quantity}</td>
                                            <td>{food.quantity * food.price}</td>

                                        </tr>)
                                }) : <tr><p>Table Empty</p></tr>}
                                <tr> <h4 id="table-bill">{obj.bill}</h4></tr>
                            </>)
                        }

                    })}
                </tbody>
            </table>
        </div>
        <div className="container">
            <form className="card container" id="order-form">
                <div className="row">
                    <label htmlFor="Food" id="food-item-heading">Food Item</label>
                    <div className="col">
                        <select onChange={handleChange} value={item.id}>
                            {props.foodList.map((item, index) => {
                                return (<option name="id" value={item.id} itemObj={item}>{item.name}</option>)
                            })}
                            {/* {
                    props.drinkList.map((drink,index)=>{
                        return(<option name="id" value={drink.id}>{drink.name}</option>)
                    })
                } */}

                        </select>
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="Item">Name</label>
                    <div className="col"> <input type="text" value={item.name} /></div>
                </div>
                <div className="row">
                    <label htmlFor="price">Price</label>
                    <div className="col">  <input type="number" value={item.price} /></div>
                </div>
                <div className="row">
                    <label htmlFor="quantity">Quantity</label>
                    <div className="col"> <input onChange={handleChange} type="number" name="quantity" value={item.quantity} /></div>
                </div>
                <div className="row" class="food-add-button">
                    <div className="col"><button type="button" className="btn" onClick={handleAdd}>Add</button></div>

                </div>
            </form>
            <div className="row" id="bottom-buttons">
                <div className="col"><button type="button" className="btn"><Link onClick={handleID} to={"/table"}>Back</Link></button>
                </div>
                <div className="col"><button type="button" className="btn" onClick={handleBill} name="billId" value={findTable}>Bill</button>
</div>
            </div>
        </div>
    </div>);
}
export default TableBill;