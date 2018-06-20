import React, { Component } from 'react';
import FavCoinsList from "./FavCoinsList"
import "./DashBoard.css"

export default class DashBoard extends Component {

    render() {
        return (
        <div  className="content-wrapper">
            <div  className="padding-wrap wrap">
                <div  className="dual-form-wrap wrap">
                    <div  className="dual-box-wrap wrap">
                        <h3  className="main-title">Create TRADE</h3>
                        <div  className="row">
                            <form  className="form-horizontal wrap">
                                <div  className="dual-box">
                                    <div  className="shadow-box wrap">
                                        <h4  className="sub-ttl">Choose your symbol below:</h4>
                                        <div  className="select-box-group">
                                            <div  className="form-group">
                                                <div  className="field">
                                                    <select  className="form-control">
                                                        <option>Choose Symbol</option>
                                                        <option>Choose Symbol</option>
                                                        <option>Choose Symbol</option>
                                                        <option>Choose Symbol</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div  className="form-group">
                                                <div  className="field">
                                                    <select  className="form-control">
                                                        <option>Choose Client</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                     <FavCoinsList coins={"coins array goes here"}/>
                                <div  className="button-wrap">
                                <a href="#"  className="default-btn ico-btn">Next <img src={require("../../img/arrow-next.png")}/></a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}