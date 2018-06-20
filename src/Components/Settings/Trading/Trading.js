import React, { Component } from 'react';
import { connect } from "react-redux"
import "./Trading.css"

class TradingScreen extends Component {
    constructor(props) 
    {
        super(props)
    }
    componentDidMount() {
     
    }
    render() {
        return (
            <div className="content-wrapper">
            <div className="normal-wrap wrap">
                <div className="bread-crumb">
                    <a href="#">Settings</a> > <span>Tranding</span>
                </div>
                <form className="form-horizontal wrap">
                    <div className="white-shadow phone-wrap">
                        <div className="lined-title">
                            <h3 className="l-title">Trading Configuration</h3>
                        </div>
                        <div className="form-720">
                            <div className="form-group fld-tbl">
                                <div className="fld-lbl fld-cell">Default Buy Targets:</div>
                                <div className="fld-ipt fld-cell">
                                    <select className="input-field percent">
                                        <option>10</option>
                                        <option>20</option>
                                        <option>30</option>
                                        <option>40</option>
                                        <option>50</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group fld-tbl">
                                <div className="fld-lbl fld-cell">Default Selling Strategy:</div>
                                <div className="fld-ipt fld-cell">
                                    <select className="input-field">
                                        <option>Lorem Ipsum</option>
                                        <option>Lorem Ipsum</option>
                                        <option>Lorem Ipsum</option>
                                        <option>Lorem Ipsum</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group fld-tbl">
                                <div className="fld-lbl fld-cell">Default Trailing Stop:</div>
                                <div className="fld-ipt fld-cell">
                                   <ul className="radio-wrapper">
                                       <li>
                                           <input type="radio" name="rad" className="ipt-rad" id="rad_1" value="Target Trailing Stop"/>
                                           <label for="rad_1" className="chk-ipt"><span className="box"></span>Target Trailing Stop</label>
                                       </li>
                                       <li>
                                           <input type="radio" name="rad" className="ipt-rad" id="rad_2" value="Percent Trailing Stop"/>
                                           <label for="rad_2" className="chk-ipt"><span className="box"></span>Percent Trailing Stop</label>
                                           <div className="field inlined percent">
                                               <input type="text" className="input-field per"/> Enter Percentage
                                           </div>
                                       </li>
                                       <li>
                                           <input type="radio" name="rad" className="ipt-rad" id="rad_3" value="Breakeven Trailing Stop"/>
                                           <label for="rad_3" className="chk-ipt"><span className="box"></span>Breakeven Trailing Stop</label>
                                       </li>
                                   </ul>
                                </div>
                            </div>
                            <div className="form-group fld-tbl">
                                <div className="fld-lbl fld-cell">Notification Preference:</div>
                                <div className="fld-ipt fld-cell">
                                    <ul className="radio-wrapper">
                                        <li>
                                            <input type="radio" name="rad" className="ipt-rad" id="notify_1" value="Mail"/>
                                            <label for="notify_1" className="chk-ipt"><span className="box"></span>Mail</label>
                                        </li>
                                        <li>
                                            <input type="radio" name="rad" className="ipt-rad" id="notify_2" value="Telegram"/>
                                            <label for="notify_2" className="chk-ipt"><span className="box"></span>Telegram</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="form-group fld-tbl">
                                <div className="fld-lbl fld-cell">Default Percent From The Total Amount Of Each Trade:</div>
                                <div className="fld-ipt fld-cell">
                                    <select className="input-field percent">
                                        <option>10</option>
                                        <option>20</option>
                                        <option>30</option>
                                        <option>40</option>
                                        <option>50</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group fld-tbl">
                                <div className="fld-lbl fld-cell">Stop Traget Reduction Percent:</div>
                                <div className="fld-ipt fld-cell">
                                    <select className="input-field percent">
                                        <option>10</option>
                                        <option>20</option>
                                        <option>30</option>
                                        <option>40</option>
                                        <option>50</option>
                                    </select>
                                </div>
                            </div>
                            <div className="button-wrap-np">
                                <a href="" className="default-btn stc-17">update</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        );
    }
}


const MapDispatch = {

    // Register
}
export default connect(null, MapDispatch)(TradingScreen)