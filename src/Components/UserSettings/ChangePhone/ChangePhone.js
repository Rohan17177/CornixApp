import React, { Component } from 'react';
// import "./ChangePassword.css"

export default class ChangePhone extends Component {
    render() {
        return (
            <div  className="content-wrapper">
            <div  className="normal-wrap wrap">
                <div  className="bread-crumb">
                    <a href="#">Settings</a> > <a href="#">Security </a> > <span>Change Linked Phone</span>
                </div>
                <form  className="form-horizontal wrap">
                    <div  className="white-shadow phone-wrap">
                        <div  className="lined-title">
                            <h3  className="l-title">Change Linked Phone</h3>
                        </div>
                        <div  className="form-385">
                            <div  className="form-group">
                                <div  className="field with-select">
                                    <input type="text"  className="input-field" name="phone"/>
                                    <select>
                                        <option>0086</option>
                                        <option>+91</option>
                                        <option>+90</option>
                                    </select>
                                </div>
                            </div>
                            <div  className="form-group">
                                <div  className="field">
                                    <input type="text"  className="input-field" name="phone" placeholder="Verification Code"/>
                                    <a href="#"  className="link-blue">Resend</a>
                                </div>
                            </div>
                            <div  className="button-wrap-np">
                                <a href=""  className="default-btn stc-17">LINK</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}