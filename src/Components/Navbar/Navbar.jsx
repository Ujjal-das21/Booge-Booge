import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"
function Navbar() {
    return (<>
        <nav class="navbar sticky-top  navbar-expand-lg bg-body-tertiary" id="navbar">
            <div class="container-fluid">
                <a class="navbar-brand" href="#" id="brand">Booge Booge</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <Link className="nav-link " to={"/"}>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to={"/admin"}>Admin</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to={"/table"}>Table</Link>
                        </li>
                    </ul>
                    {/* <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
        </>);
}
export default Navbar;