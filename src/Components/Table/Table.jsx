import React, { useState } from "react";
import "./Table.css";
import uniqid from "uniqid";
import { Link } from "react-router-dom";
function Table(props) {
    const [tableItem, setTableItem] = useState({

    })
    function createTable(event) {
        const table = {
            id: uniqid(),
            number: props.tableList.length + 1,
            bill: 0,
            items: []

        }
        props.setTableList(prev => {
            return [...prev, table]
        })
        event.preventDefault();
    }
    function handleId(event) {
        props.setTableId(event.target.name)
    }
    return (<div className="container">
        <h1 className="app-heading">Table</h1>
        <div className="container" id="table-grid">
            {props.tableList.length > 0 ? props.tableList.map((item, index) => {
                return (
                    <div class="col-sm-6 mb-3 mb-sm-12">
                        <div class="card container" key={item.id}>
                            <div class="card-body">
                                <h5 class="card-title">Table No:{index + 1}</h5>
                                <p class="card-text">Bill: {item.bill}</p>
                                <p class="card-text" style={(item.bill === 0 && item.items.length === 0) ? { color: "Green" } : { color: "red" }}>STATUS</p>
                                <div className="row container">
                                    <div className="col">
                                        <button  type="button" class="btn btn-danger" value={item.id}><Link name={item.id} onClick={handleId} to={"/table/check/" + item.id}>Check</Link></button>
                                    </div>
                                    <div className="col">
                                        <button  type="button" class="btn btn-danger" value={item.id}><Link name={item.id} onClick={handleId} to={"/table/check/" + item.id}>Payment</Link></button>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>)
            }) : <div class="col-sm-6 mb-sm-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">No Table</h5>
                        <p class="card-text">Click on create to add new table.</p>
                        <form >
                            <button className="btn btn-danger" onClick={createTable}><Link to={"/table"}>Create</Link></button>
                        </form>
                    </div>
                </div>

            </div>}

        </div>
        {/* <table>
            <thead>
                <tr>
                    <th>#</th>
                </tr>
            </thead>
            <tbody>
                {props.tableList.length > 0 ? props.tableList.map((item, index) => {
                    return (<tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>Bill</td>
                        <td><button value={item.id}><Link name={item.id} onClick={handleId} to={"/table/check/" + item.id}>Check</Link></button></td>
                    </tr>)
                }) : <tr><td>Not Found!</td></tr>}
            </tbody>
        </table> */}
        <form id="add-button-form">
        <button type="button" class="btn btn-secondary" onClick={createTable}><Link to={"/table"}>Add More</Link></button>
           
        </form>
    </div>);
}

export default Table;