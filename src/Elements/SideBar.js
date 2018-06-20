import React, { Component } from 'react'
import { Link } from "react-router-dom";

import PropTypes from "prop-types"

import $ from "jquery"

class Sidebar extends Component {

    constructor(props) {
        super(props)
    }
    showAlert() {
        alert("GHEllo")
    }
    componentDidMount() {
        $('.aside-nav > ul > li').each(function () {
            $(this).children('a.has-child').click(function () {
                $('.aside-nav > ul > li').children('.sub-child').slideUp().parent().removeClass('active');
                if ($(this).next('.sub-child').is(':visible')) {
                    $(this).next('.sub-child').slideUp().parent().removeClass('active');
                    console.log('if');
                }
                else {
                    $(this).next('.sub-child').slideToggle().parent().toggleClass('active');
                    console.log('else');
                }
            });
        });
        $('.hamburger').click(function () {
            $('aside').toggleClass('active');
            $('body').toggleClass('aside-open');
        });
    }
    render() {
        return (
            <div  className="nav-bar-wrap">
                <div  className="hamburger">
                    <span  className="fa fa-bars"></span>
                </div>
                <nav  className="nav navbar">
                    <div  className="aside-logo">
                        <a href="#"><img src={require("../img/logo.png")} /></a>
                    </div>
                    <div  className="aside-nav nice-scroll">
                        <h2  className="aside-title">APPS</h2>
                        <ul>
                            <li><Link to="/portfolio"><img src={require("../img/menu-ic-brief.png")}/>Portfolio</Link></li>
                            <li>
                                <a href="javascript:void(0);"  className="has-child"><img src={require("../img/menu-ic-new.png")} />Create New</a>
                                <ul  className="sub-child">
                                    <li><a href="#">Personal Trade</a></li>
                                    <li><a href="#">Group Signal</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:void(0);"  className="has-child"><img src={require("../img/menu-ic-currency.png")} />My Trades</a>
                                <ul  className="sub-child">
                                    <li><a href="#">In Progress</a></li>
                                    <li><a href="#">History</a></li>
                                </ul>
                            </li>
                            <li><a href="javascript:void(0);"><img src={require("../img/menu-ic-signal.png")} />Open Signals</a></li>
                            <li>
                                <a href="javascript:void(0);"  className="has-child"><img src={require("../img/menu-ic-group.png")} />Groups</a>
                                <ul  className="sub-child">
                                    <li><Link to="/groups">My Groups</Link></li>
                                    <li><Link to="/creategroup">Create Group</Link></li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:void(0);"  className="has-child"><img src={require("../img/menu-ic-warn.png")} />Red Button </a>
                                <ul  className="sub-child">
                                    <li><a href="#">Activate</a></li>
                                    <li><a href="#">Recover</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:void(0);"  className="has-child"><img src={require("../img/menu-ic-setting.png")} />Settings</a>
                                <ul  className="sub-child">
                                    <li><Link to="/trading">Trading</Link></li>
                                    <li><Link to="/security">Security</Link></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Sidebar