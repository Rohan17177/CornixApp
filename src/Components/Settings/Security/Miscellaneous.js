import React, { Component } from "react"


export default class Miscellaneous extends Component {
    render() {
        return(
            <div  className="white-shadow-brd">
            <div  className="lined-title">
                <h3  className="l-title">Miscellaneous</h3>
            </div>
            <div  className="my-tbl-responsive">
                <div  className="my-tbl">
                    <div  className="my-tbl-body">
                        <div  className="my-tbl-row">
                            <div  className="my-tbl-td lbl">
                                Wallet Address:
                            </div>
                            <div  className="my-tbl-td">
                                lorem ipsum is a dummy text
                            </div>
                            <div  className="my-tbl-td">
                                <a href="#"  className="link-blue">(Change)</a>
                                <a href="#"  className="link-blue">( Turn Off )</a>
                            </div>
                        </div>

                        <div  className="my-tbl-row">
                            <div  className="my-tbl-td lbl">
                                Telegram User:
                            </div>
                            <div  className="my-tbl-td">
                                <a href="#"  className="link-green">Linked</a>
                            </div>
                            <div  className="my-tbl-td">
                                <a href="#"  className="link-blue">(Change)</a>
                                <a href="#"  className="link-blue">( Turn Off )</a>
                            </div>
                        </div>
                        <div  className="my-tbl-row">
                            <div  className="my-tbl-td lbl">
                                Notification Preference:
                            </div>
                            <div  className="my-tbl-td">
                                <ul  className="radio-wrapper inlined">
                                    <li>
                                        <input type="radio" name="rad"  className="ipt-rad" id="rad_1" value="Mail"/>
                                        <label for="rad_1"  className="chk-ipt"><span  className="box"></span>Mail</label>
                                    </li>
                                    <li>
                                        <input type="radio" name="rad"  className="ipt-rad" id="rad_2" value="Telegram"/>
                                        <label for="rad_2"  className="chk-ipt"><span  className="box"></span>Telegram</label>
                                    </li>
                                </ul>
                            </div>
                            <div  className="my-tbl-td">
                                <span  className="lgt-text">"Please talk to the telegram notification bot @cornix_telegram to enable notification"</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}