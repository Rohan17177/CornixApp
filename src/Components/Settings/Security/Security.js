import React, { Component } from "react"
import "./Security.css"
import BasicInformation from "./BasicInfo";
import TwoWayAuthentication from "./TwoWayAuthentication";
import Miscellaneous from "./Miscellaneous";
import HistroyInfo from "./HIstoryInfo";


export default class Security extends Component {
    render() {
        return (
            <div class="content-wrapper">
                <div class="normal-wrap wrap">
                    <div class="bread-crumb">
                        <a href="#">Settings</a> > <span>Security </span>
                    </div>
                    <BasicInformation />
                    <TwoWayAuthentication />
                    <Miscellaneous/>
                    <HistroyInfo/>
                </div>
            </div>
        )
    }
}