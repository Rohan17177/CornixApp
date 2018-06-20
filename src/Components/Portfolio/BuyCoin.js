import React, { Component } from "react";
import MarketBuy from "./MarketBuy";
import Limitbuy from "./LimitBuy";



class BuyCoin extends Component {


    constructor(props) {
        super(props)

        this.state =
        {
            IsChecked:true,
            showMarket:true,
            showLimit:false
        }
        this.CloseBuyOption = this.CloseBuyOption.bind(this)
        this.OnRadioChange  = this.OnRadioChange.bind(this)
    }
    CloseBuyOption() {
        this.props.Hide()
    }
    OnRadioChange(e)
    {

        console.log("RADIO VALUE >>>>>>>>>",e.target.value)
        this.setState({IsChecked:!this.state.IsChecked})
        var value = e.target.value;
        if(value === 'market' )
        {
            this.setState({showMarket:true,showLimit:false,IsChecked:!this.state.IsChecked})
        }
        else
        {
            this.setState({showMarket:false,showLimit:true})
        }
             
    }
    render() {

        const { IsChecked,showLimit,showMarket } = this.state


        return (
            <tr>
                <td className="colspn-bg" colspan="7">
                    <ul className="radio-wrapper inlined green full-width">
                        <li>
                            <input type="radio" onChange={this.OnRadioChange}  checked={IsChecked}  name="rad"  className="ipt-rad" id="rad_1" value="market" />
                            <label htmlFor="rad_1" className="chk-ipt"><span className="box"></span>Market Buy</label>
                        </li>
                        <li>
                            <input type="radio" onChange={this.OnRadioChange}    name="rad"  className="ipt-rad" id="rad_2" value="limit" />
                            <label htmlFor="rad_2" className="chk-ipt"><span className="box"></span>Limit Buy</label>
                        </li>
                    </ul>
                    <a href="#" style={{ float: 'right' }} onClick={this.CloseBuyOption} className="action xx"><img src={require("../../img/ic-times.png")} /></a>
                    
                   {showMarket && <MarketBuy/>}
                   {showLimit && <Limitbuy/>}
                </td>
            </tr>
        )
    }

}

export default BuyCoin