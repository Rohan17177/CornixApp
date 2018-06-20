import React, { Component } from "react"


export default class TwoWayAuthentication extends Component {
    render() {
        return(
            <div className="white-shadow-brd">
            <div className="lined-title">
                <h3 className="l-title">Two Way Authentication</h3>
            </div>
            <div className="my-tbl-responsive">
                <div className="my-tbl">
                    <div className="my-tbl-body">
                        <div className="my-tbl-row">
                            <div className="my-tbl-td lbl">
                                Email:
                            </div>
                            <div className="my-tbl-td">
                                -
                            </div>
                        </div>

                        <div className="my-tbl-row">
                            <div className="my-tbl-td lbl">
                                Phone Number:
                            </div>
                            <div className="my-tbl-td">
                                <a href="tel:+0086 - 987654321" className="">+0086 - 987654321</a>
                            </div>
                            <div className="my-tbl-td">
                                <a href="#" className="link-blue">(Turn On)</a>
                                <a href="#" className="link-blue">( Turn Off )</a>
                            </div>
                        </div>
                        <div className="my-tbl-row">
                            <div className="my-tbl-td lbl">
                                Google Authenticator:
                            </div>
                            <div className="my-tbl-td">
                                <a href="#" className="link-green">Linked</a>
                            </div>
                            <div className="my-tbl-td">
                                <a href="#" className="link-blue">(Change)</a>
                                <a href="#" className="link-blue">( Turn Off )</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        )
    }
}