import React, { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css"
import Drink from "./Components/Drinks/Drink.jsx";
import EditFood from "./Components/Food/EditFood";
import Food from "./Components/Food/Food";
import Dish from "./Food";
import drinkArr from "./Components/Drinks/Drink";
import EditDrink from "./Components/Drinks/EditDrink";
import Table from "./Components/Table/Table";
import TableBill from "./Components/Table/TableBill";
import Admin from "./Components/Admin/Admin";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
function App()
{
    const [netRevenue,setRevenue]=useState(0);
    const [foodList,setFoodList]=useState(Dish);
    const [id,setId]=useState("");
    const [tableId,setTableId]=useState("");
    const [drinkList,setDrinkList]=useState(drinkArr);
    const [drinkId,setDrinkId]=useState("");
    const [tableList,setTableList]=useState([]);
   
    return(<div id="app">
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Navbar></Navbar>
    <Routes>
        <Route path="/" element={<Home></Home>}></Route>
   <Route path="/food" element={<Food foodList={foodList} setFoodList={setFoodList} setId={setId}></Food>}></Route>
   <Route path="/food/edit/:id" element={<EditFood foodList={foodList} setFoodList={setFoodList} id={id} setId={setId} ></EditFood>}></Route>
    <Route path="/drink" element={<Drink drinkList={drinkList} setDrinkList={setDrinkList} setDrinkId={setDrinkId} ></Drink>}></Route>   
    <Route path="/drink/edit/:id" element={<EditDrink drinkList={drinkList} setDrinkList={setDrinkList} setDrinkId={setDrinkId} drinkId={drinkId} ></EditDrink>}></Route> 
    <Route path="/table" element={<Table tableList={tableList} setTableList={setTableList} setTableId={setTableId}  ></Table>}></Route>  
    <Route path="/table/check/:id" element={<TableBill foodList={foodList} drinkList={drinkList} tableList={tableList} setTableList={setTableList} tableId={tableId} setTableId={setTableId} netRevenue={netRevenue} setRevenue={setRevenue}  ></TableBill>}></Route>
    <Route path="/admin" element={<Admin></Admin>}></Route>  
    </Routes>
   
    </BrowserRouter>
   
    </div>);
}

export default App;