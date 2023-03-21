import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
    return (<>
       <ul class="nav nav-pills nav-justified" id="footer">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Much longer nav link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li>
</ul>
    </>);
}
export default Footer;