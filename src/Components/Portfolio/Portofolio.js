import React, { Component } from "react";
import "./Portfolio.css";
import CoinsTable from "./CoinsTable";
import CoinsFilter from "./CoinsFilter";


const dataSource =[
    {
        client:"Binance",
        coin:"BTC",
        exchange:"ETH",
        total:"0.956412",
        available:"0",
        BTCAmount:"0.984125"
    },
    {
        client:"John",
        coin:"ETH",
        exchange:"BTC",
        total:"0.95612",
        available:"0",
        BTCAmount:"0.6884125"
    },
    {
        client:"Hardy",
        coin:"BTC",
        exchange:"ETH",
        total:"0.9676412",
        available:"0",
        BTCAmount:"0.967125"
    },
    {
        client:"Jasmin",
        coin:"BTC",
        exchange:"ETH",
        total:"0.957812",
        available:"1",
        BTCAmount:"0.984855"
    },{
        client:"Adwin",
        coin:"BTC",
        exchange:"ETH",
        total:"0.945412",
        available:"2",
        BTCAmount:"0.9844565"
    }
]


class PortFolio extends Component {


    render() {
        return (
            <div className="content-wrapper">
                <div className="normal-wrap wrap">
                    <h3 className="main-title mb-15">Portfolio</h3>
                    <p>Estimated Amount: <b>0.0265478964 BTC / 169.33468568 USD</b></p>
                    <div className="left-bar">
                        <CoinsTable coinData={dataSource} />
                    </div>
                    <div   className="right-sidebar">
                     <CoinsFilter/>
                    </div>
                </div>
            </div>
        )

    }
}

export default PortFolio;