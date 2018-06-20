import React, { Component } from "react";
import { Link } from "react-router-dom";
import BuyCoin from "./BuyCoin";


class CoinsTable extends Component {



    constructor(props) {
        super(props)

        console.log("HEY PROPS >>>>>>>", props)
        this.state =
            {
                CoinsData: props.coinData,
                IsShowBuyOption:false,
                RowIndex:0
            }
            this.showBuyOption = this.showBuyOption.bind(this)
            this.HideBuyOption = this.HideBuyOption.bind(this)
    }
    showBuyOption(i)
    {
        this.setState({IsShowBuyOption:true,RowIndex:i})
    }
    HideBuyOption()
    {
        this.setState({IsShowBuyOption:false})
    }
    render() {

        const { CoinsData,IsShowBuyOption,RowIndex } = this.state
        return (
            <div className="table-responsive rspnsv-row">
                <table className="table custom-tbl">
                    <thead>
                        <tr>
                            <th>Client</th>
                            <th>Coin</th>
                            <th>Exchange</th>
                            <th>Total</th>
                            <th>Available</th>
                            <th>BTC Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                        {
                            CoinsData.map((data, i) =>
                            <tbody  key={i}>
                                <tr>
                                    <td>{data.client}</td>
                                    <td>{data.coin}</td>
                                    <td>{data.exchange}</td>
                                    <td>{data.available}</td>
                                    <td>{data.client}</td>
                                    <td>{data.BTCAmount}</td>
                                    <td>
                                        <Link to="/portfolio" onClick={()=>this.showBuyOption(i)} className="tbl-link">Buy</Link>
                                        <a href="#" className="tbl-link">Sell</a>
                                        <a href="#" className="tbl-link">Stop</a>
                                    </td>
                                </tr>
                                  {IsShowBuyOption && RowIndex === i && <BuyCoin Hide ={this.HideBuyOption}/>}
                                </tbody>
                            )
                        }
                  
                </table>
            </div>
        )

    }
}

export default CoinsTable;