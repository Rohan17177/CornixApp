import React, { Component } from "react"
import "./DashBoard.css"


export default class FavCoinsList extends Component {
    render() {
        return (
            <div className="dual-box">
                <div className="shadow-box">
                    <h4 className="sub-ttl">Your Favourite Coins:</h4>
                    <ul className="coin-wrap wrap">
                        <li>
                            <div className="coin"><img src={require("../../img/coins/1-bitcoin.png")} /></div>
                            <span>Bitcoin</span>
                        </li>
                        <li>
                            <div className="coin"><img src={require("../../img/coins/2-lisk.png")} /></div>
                            <span>Lisk</span>
                        </li>
                        <li>
                            <div className="coin"><img src={require("../../img/coins/3-sycon.png")} /></div>
                            <span>Siacon</span>
                        </li>
                        <li>
                            <div className="coin"><img src={require("../../img/coins/4-dash.png")} /></div>
                            <span>Dash</span>
                        </li>
                        <li>
                            <div className="coin"><img src={require("../../img/coins/5-litecoin.png")} /></div>
                            <span>Litecoin</span>
                        </li>
                        <li>
                            <div className="coin"><img src={require("../../img/coins/6-ethereum.png")} /></div>
                            <span>Ethereum</span>
                        </li>
                        <li>
                            <div className="coin"><img src={require("../../img/coins/7-maid.png")} /></div>
                            <span>MaidSafe</span>
                        </li>
                        <li><div className="coin"><img src={require("../../img/coins/8-monero.png")} /></div>
                            <span>Monero</span>
                        </li>
                        <li><div className="coin"><img src={require("../../img/coins/9-BKY.png")} /></div>
                            <span>Storj</span>
                        </li>
                        <li><div className="coin"><img src={require("../../img/coins/10-ripple.png")} /></div>
                            <span>Ripple</span>
                        </li>
                        <li><div className="coin"><img src={require("../../img/coins/11-cardano.png")} /></div>
                            <span>Cardano</span>
                        </li>
                        <li><div className="coin"><img src={require("../../img/coins/12-zcash.png")} /></div>
                            <span>Zcash</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}