import React from "react";
import { Link } from "react-router-dom";
import "./Admin.jsx";
function Admin() {
    return (<>
        <h1>Admin Dashboard</h1>
        <Link to={"/food"}>Food Menu</Link>
        <Link to={"/drink"}>Drink Menu</Link>
    </>);
}
export default Admin;