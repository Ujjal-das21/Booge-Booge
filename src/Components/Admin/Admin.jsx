import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Admin.css";
import foodImg from "./food.jpg";
import drinkImg from "./drink.jpg"
function Admin(props) {
    const navigate=useNavigate();
    const goBack = () => {
        navigate(-1);
      };
    return (<div className="container">
        <h1 className=" app-heading">Admin Dashboard</h1>
       <div className="container" id="admin-dashboard">
       <div class="row">
            <div class="col-sm-6 mb-3 mb-sm-0">
                <div class="card">
                <img src={foodImg} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Food Item</h5>
                        {/* <p class="card-text"></p> */}
                        <Link to={"/food"} class="btn btn-primary">Food Menu</Link>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                <img src={drinkImg} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Drinks</h5>
                        {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                        <Link to={"/drink"} class="btn btn-primary">Drink Menu</Link>
                    </div>
                </div>
            </div>
        </div>
       
       </div>
       <Link type="button" className="btn back-button"  onClick={goBack} ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABBUlEQVR4nO3YTypFYRjA4TcxwMDMAizAAqyAyECsgwUwYgmyAcqcWAAxZGyC8m9AZiZKj27IdR11ldJ7e58VnF/fOd/3fieilFJKKaWUv4RZ3OAB85ERpvDs031kgwk8+eouMsE4HjsiXrAQWWAMt75bjCwwirOGiOXIAiM4bYhYjywwhMOGiE30RQYYwH5DxA76IwP0Ybsh4qi1SpEFNuRz0Tqo2yPW5HXdHrKqF0ISv1rnmIwuP/ZjDEcm3rbfvYaY3TTb7wcM4qAhZivNgdgxopykHlG6GBpXIhs/j/FLkY2fL1Zz0SNX3cvokZ8PV5EVZt4HtStM//fzlFJKKaWUEr/xCv1K5URiSFSXAAAAAElFTkSuQmCC"/></Link>
    </div>);
}
export default Admin;