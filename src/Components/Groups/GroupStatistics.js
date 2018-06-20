import React, { Component } from 'react';
// import "./GroupsScreen.css"
import GroupStatisticsTable from './GroupStatisticsTable';
import GroupStatisticsFilterOption from './GroupStatasticsFilterOption';


const dataSource = [
    {
        created_by:"Steve Austin",
        creation_date:"02/05/2018   (16:02:08)",
        exchanges:"ETH, USDT",
        symbol:"LTC/BTC",
        status:"Sell (3/7)",
        change:"12%"
    },
    {
        created_by:"John Merry",
        creation_date:"07/06/2018   (16:02:08)",
        exchanges:"ETH, USDT",
        symbol:"LTC/BTC",
        status:"Sell (3/7)",
        change:"17%"
    },
    {
        created_by:"Jessica Austin",
        creation_date:"05/08/2018   (16:02:08)",
        exchanges:"ETH, USDT",
        symbol:"LTC/BTC",
        status:"Sell (3/7)",
        change:"19%"
    },
    {
        created_by:"John Austin",
        creation_date:"09/08/2018   (16:02:08)",
        exchanges:"ETH, USDT",
        symbol:"LTC/BTC",
        status:"Sell (3/7)",
        change:"20%"
    }, {
        created_by:"Lilly Francis",
        creation_date:"16/09/2018   (16:02:08)",
        exchanges:"ETH, USDT",
        symbol:"LTC/BTC",
        status:"Sell (3/7)",
        change:"67%"
    },
    {
        created_by:"Lords Villam",
        creation_date:"16/05/2018   (16:02:08)",
        exchanges:"ETH, USDT",
        symbol:"LTC/BTC",
        status:"Sell (3/7)",
        change:"9%"
    }
]
export default class GroupStatistics extends Component 
{

    render()
    {
        return(
            <div className="content-wrapper">
            <div className="normal-wrap wrap">
                <h3 className="main-title">Group Statistics</h3>
                <div className="left-bar">
                <GroupStatisticsTable GroupStatisticsData={dataSource}/>
                </div>
                <div className="right-sidebar">
                <GroupStatisticsFilterOption/>
                </div>
                <div className="button-wrap pl-0 pr-0">
                <button className="default-btn">EXPORT</button>
            </div>
            </div>

          </div>      
        )

    }

}