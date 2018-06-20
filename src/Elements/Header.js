import React, { Component } from 'react';
import Avtar from "../img/avtar.png";
import HeadGrid from "../img/head_grid.png";
import HeadNotify from "../img/head_notify.png";
import HeadGlob from "../img/head_glob.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import { Router } from 'react-router';
import { Logout } from '../Actions/LoginActions'
import { withAlert } from "react-alert";
import $ from 'jquery'
import { CSSTransition } from 'react-transition-group';
import "./animate.css"


class Header extends Component {


    constructor(props) {
        super(props)
        this.state =
            {
                IsLoggedIn: false,
                IsShow: false

            }
        this.LogOut = this.LogOut.bind(this)
        this.showBar = this.showBar.bind(this)
        console.log("PROPRS", this.props);
    }
    componentDidMount() {

    }
    showAlert() {
        alert('Hello World');
    }
    LogOut() {
        this.props.Logout().then((res) => {
            console.log("Logout Respinse", res)
            this.context.router.history.push('/')
            this.props.alert.success("Logged Out")
        })

    }
    showBar() {
        console.log(!this.state.IsShow)

        this.setState({ IsShow: !this.state.IsShow })

    }
    componentWillReceiveProps(nextProps) {
        console.log("NExt", nextProps)
        // this.setState({IsShow:!nextProps.isHide})
    }
    componentDidMount() {
        const value = JSON.parse(localStorage.getItem('IsLoggedIn'))
        this.setState({ IsLoggedIn: value })
    }
    render() {
        return (
            <header className="login-header">
                <div className="login-header-right">
                    {this.state.IsLoggedIn === true ?
                        <ul className="login-header-menu after-login" style={{ display: "block" }}>

                            <li>
                                <div onClick={this.showBar} className="user-level"><img src={Avtar} />{this.props.fullName}


                                    <CSSTransition
                                        in={this.state.IsShow}
                                        timeout={300}
                                        classNames={"message"}
                                        unmountOnExit
                                        onExited={() => {
                                            this.setState({
                                                IsShow: false,
                                            });
                                        }}
                                    >
                                        <div id="dropBar" className="drop-dwn">
                                            <div className="li"><Link to="/changepassword"><span className="fa fa-key"></span> Change Password</Link></div>
                                            <div className="li"><a onClick={this.LogOut}><span className="fa fa-power-off"></span>Logout</a></div>
                                        </div>
                                    </CSSTransition>
                                </div>
                            </li>
                            <li><a href="#" className="ic-img"><img src={HeadGrid} /></a></li>
                            <li><a href="#" className="ic-img"><img src={HeadNotify} /></a></li>
                            <li><a href="#" className="ic-img"><img src={HeadGlob} /></a></li>
                        </ul>
                        :
                        <ul className="login-header-menu" style={{}}>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/signup">Register</Link>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-cog" aria-hidden="true"></i></a>
                            </li>
                        </ul>
                    }
                </div>
            </header>
        )
    }
}
Header.contextTypes =
    {
        // eslint-disable-next-line
        router: PropTypes.object.isRequired
    }
export default connect(null, { Logout, Router })(withAlert(Header));
