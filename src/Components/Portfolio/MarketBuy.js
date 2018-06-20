import React, { Component } from "react"





class MarketBuy extends Component {
    render(){
    return (
        <div className="market-buy">
        <div className="filter-item">
            <div className="filter-ttl">Choose Pair</div>
            <div className="input-dual">
                <select className="input-field">
                    <option>BTC (Available: 0.2264789)</option>
                    <option>BTC (Available: 0.2264789)</option>
                    <option>BTC (Available: 0.2264789)</option>
                </select>
            </div>
        </div>
        <div className="filter-item">
            <div className="filter-ttl">Fill Amount</div>
            <div className="input-dual">
                <input type="text" name="" className="input-field" value="0.123456" />
            </div>
        </div>
        <div className="filter-item or">
            <span>Or</span>
        </div>
        <div className="filter-item">
            <div className="filter-ttl">Choose Percentage</div>
            <div className="input-dual">
                <select className="input-field">
                    <option>10%</option>
                    <option>20%</option>
                    <option>30%</option>
                    <option>40%</option>
                </select>
            </div>
        </div>
        <div className="filter-item">
            <a href="#" className="default-btn">Buy</a>
        </div>
    </div>
    )
}
}


export default MarketBuy