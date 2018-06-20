import React, { Component } from 'react';



export default class GroupStatasticsFilterOption extends Component 
{

    render()
    {
        return(
            <div className="filter-wrap">
            <div className="head-ttl">FILTERS</div>
            <div className="filter-block">
                <div className="filter-item-fw">
                    <div className="filter-ttl">Exchange</div>
                    <select className="input-field full-width">
                        <option>ETH, USTD</option>
                        <option>ETH, USTD</option>
                    </select>
                </div>
                <div className="filter-item-fw">
                    <div className="filter-ttl">Symbol</div>
                    <select className="input-field full-width">
                        <option>LTC/BTC</option>
                        <option>LTC/BTC</option>
                    </select>
                </div>
                <div className="filter-item-fw">
                    <div className="filter-ttl">Status</div>
                    <select className="input-field full-width">
                        <option>All</option>
                        <option>All</option>
                    </select>
                </div>
                <div className="filter-item-fw">
                    <div className="filter-ttl">Created By</div>
                    <select className="input-field full-width">
                        <option>All</option>
                        <option>All</option>
                    </select>
                </div>
                <div className="filter-item-fw">
                    <div className="filter-ttl">Creation Period</div>
                    <select className="input-field full-width">
                        <option>This Month</option>
                        <option>This Month</option>
                    </select>
                </div>
            </div>
        </div>
        )

    }

}