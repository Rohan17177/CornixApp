import React, { Component } from 'react';
import "./NotFound.css"
export default class NotFound extends Component {
    render() {
        return(
        <div class="wrapper-404">
        <h2 class="err-big">404</h2>
        <span class="err-small">page not found</span>
        <a href="dashboard.php" class="cbtn btn-home"><span class="fa fa-home"></span></a>
    </div>
        )
    }
}