import React, { Component } from "react"


export default class BasicInformation extends Component {
    render() {

        return(
         
                <div className="white-shadow-brd">
                <div className="lined-title">
                    <h3 className="l-title">Basic Information</h3>
                </div>
                <div className="my-tbl-responsive">
                    <div className="my-tbl">
                        <div className="my-tbl-body">
                            <div className="my-tbl-row">
                                <div className="my-tbl-td lbl">
                                    FullName:
                                </div>
                                <div className="my-tbl-td">
                                    Lorem Ipsum
                                </div>
                                <div className="my-tbl-td"></div>
                            </div>
                            <div className="my-tbl-row">
                                <div className="my-tbl-td lbl">
                                    Username
                                </div>
                                <div className="my-tbl-td">
                                    loremipsum420
                                </div>
                                <div className="my-tbl-td">
                                </div>
                            </div>
                            <div className="my-tbl-row">
                                <div className="my-tbl-td lbl">
                                    Email:
                                </div>
                                <div className="my-tbl-td">
                                    <a href="mailto:Lorem_Ipsum@gmail.com">Lorem_Ipsum@gmail.com</a>
                                </div>
                                <div className="my-tbl-td">
                                </div>
                            </div>
                            <div className="my-tbl-row">
                                <div className="my-tbl-td lbl">
                                    Password
                                </div>
                                <div className="my-tbl-td">
                                    **** ***** ****
                                </div>
                                <div className="my-tbl-td">
                                    <a href="#" className="link-blue">(Change)</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}