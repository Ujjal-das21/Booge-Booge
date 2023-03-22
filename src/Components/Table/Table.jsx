import React, { useState } from "react";
import "./Table.css";
import uniqid from "uniqid";
import { Link, useNavigate } from "react-router-dom";
function Table(props) {
    const navigate=useNavigate();
    const goBack = () => {
        navigate(-1);
      };
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
        <Link type="button" className="btn back-button"  onClick={goBack} ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABBUlEQVR4nO3YTypFYRjA4TcxwMDMAizAAqyAyECsgwUwYgmyAcqcWAAxZGyC8m9AZiZKj27IdR11ldJ7e58VnF/fOd/3fieilFJKKaWUv4RZ3OAB85ERpvDs031kgwk8+eouMsE4HjsiXrAQWWAMt75bjCwwirOGiOXIAiM4bYhYjywwhMOGiE30RQYYwH5DxA76IwP0Ybsh4qi1SpEFNuRz0Tqo2yPW5HXdHrKqF0ISv1rnmIwuP/ZjDEcm3rbfvYaY3TTb7wcM4qAhZivNgdgxopykHlG6GBpXIhs/j/FLkY2fL1Zz0SNX3cvokZ8PV5EVZt4HtStM//fzlFJKKaWUEr/xCv1K5URiSFSXAAAAAElFTkSuQmCC"/></Link>
    </div>);
}

export default Table;