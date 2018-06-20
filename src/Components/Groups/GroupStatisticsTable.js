import React, { Component } from 'react';
import "./GroupsScreen.css"
import Targets from './Tragets';

export default class GroupStatisticsTable extends Component {


    constructor(props)
    {
        super(props)

        this.state =
        {
            RowIndex :0,
            IsShow:false
        }
        this.ShowTargets  = this.ShowTargets.bind(this)
        this.HideTargets  = this.HideTargets.bind(this)
    }
    ShowTargets(index)
    {
        this.setState({IsShow:true,RowIndex:index})
    }
    HideTargets()
    {
        this.setState({IsShow:false })
    }
    render() {

        const { GroupStatisticsData } = this.props
        const { RowIndex, IsShow}  = this.state
        return (
            <table className="table custom-tbl">
                <thead>
                    <tr>
                        <th>Created By</th>
                        <th>Creation Date</th>
                        <th>Exchanges</th>
                        <th>Symbol</th>
                        <th>Status</th>
                        <th>Change</th>
                        <th>Action</th>
                    </tr>
                </thead>

                {
                    GroupStatisticsData.map((data, index) => {
                        return (
                            <tbody>
                                <tr>
                                    <td>{data.created_by}</td>
                                    <td>{data.creation_date}</td>
                                    <td>{data.exchanges}</td>
                                    <td>{data.symbol}</td>
                                    <td>{data.status}</td>
                                    <td>{data.change}</td>
                                    <td>
                                        <a href="#" onClick ={()=>this.ShowTargets(index)} class="tbl-ic-link"><img src={require("../../img/edit-tbl.png")} /></a>
                                        <a href="#" class="tbl-ic-link"><img src={require("../../img/cancel-tbl.png")} /></a>
                                        <a href="#" class="tbl-ic-link"><img src={require("../../img/dlt-tbl.png")} /></a>
                                    </td>
                                </tr>
                               {IsShow && RowIndex == index && <Targets Hide={this.HideTargets}/>}
                            </tbody>
                        )
                    })
                }
            </table>
        )

    }

}