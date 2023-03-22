import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"
function Home() {
    return (<>
        <div className="container" id="homepage">

            <div className="container" id="home-content">
                <h1 class="big-content">Welcome to Booge Booge</h1>
                <h3 className="medium-content">Discover a unique dining experience  </h3>
                <p className="small-content">Step into Booge Booge and be transported to a world of enchantment.</p>
            </div>
            <Link type="button" className="btn" to={"/table"} id="start-button">Get Started</Link>
        </div>

    </>)
}
export default Home;