import React, { Component } from 'react';
import { connect } from "react-redux"
import "../Login/LoginScreen.css"
import Logo from "../../img/logo.png"
import ValiDateInput from "../../Validations/SignUpValidations";
import { Register } from "../../Actions/LoginActions";
import { Router } from "react-router"
import { Link } from 'react-router-dom'
import {withAlert} from 'react-alert';
import PropTypes from "prop-types"

class SignUpScreen extends Component {
    constructor(props) {
        super(props)

        this.state =
            {
                FirstName: "",
                LastName: "",
                email: "",
                passWord: "",
                confirmPassword: "",
                errors: {},
                IsShowError:false
            }

        this.OnChange = this.OnChange.bind(this)
        this.OnSubmit = this.OnSubmit.bind(this)
        this.isValid  = this.isValid.bind(this)
    }
    componentDidMount() {
    }
    isValid() {
        const errors = ValiDateInput(this.state);
        if (!errors.isValid) {
            this.setState({ errors: errors.errors,IsShowError:true })
        }
        return errors.isValid;
    }

    OnChange(e) {
        let errors = Object.assign({}, this.state.errors);
        delete errors[e.target.name];
        this.setState({ [e.target.name]: e.target.value, errors: errors })
    }

    OnSubmit() {
        if (this.isValid()) {
            var data =
            {
                first_name: this.state.FirstName,
                last_name: this.state.LastName,
                email: this.state.email,
                password: this.state.passWord
            }
            this.props.Register(data).then((res) => {
                // console.log("Response In", res.errors[0].length)
                if(res.errors.length > 0)
                {
                    this.props.alert.error(res.errors[0].message)
                }
                else
                {
                  this.props.alert.success("Registered Successfully")
                //   this.props.alert.success("Login Now")
                  this.context.router.history.push('/login')  
                }
            }, err => {

            })

        }
    }
    render() {
        const { FirstName, LastName, email, passWord, confirmPassword } = this.state
        return (
            <div className="login-signup-wrapper">
                <div className="login-signup-container">
                    <div className="login-signup-left-coll-main">
                        <div className="login-signup-left-coll align-self-center">
                            <div className="login-signup-right-logo">
                                <img src={Logo} alt="" />
                            </div>
                        </div>
                        <div className="login-signup-right-coll align-self-center">
                            <div className="login-signup-section">
                                <div className="login-signup-form">
                                    <form>
                                        <div className="login-signup-row">
                                            <div className="login-signup-filed">
                                                <input type="name" name="FirstName" onChange={this.OnChange}  value={FirstName} className="form-control"  placeholder="First Name" />
                                                <span style={{ fontSize: 15 }} className='text-danger'>{this.state.errors.FirstName}</span>
                                            </div>
                                        </div>
                                        <div className="login-signup-row">
                                            <div className="login-signup-filed">
                                                <input type="name" name="LastName" onChange={this.OnChange} value={LastName} className="form-control"  placeholder="Last Name" />
                                                <span style={{ fontSize: 15 }} className='text-danger'>{this.state.errors.LastName}</span>
                                            </div>
                                        </div>
                                        <div className="login-signup-row">
                                            <div className="login-signup-filed">
                                                <input type="email" name="email" onChange={this.OnChange} value={email} className="form-control" placeholder="Email" />
                                                <span style={{ fontSize: 15 }} className='text-danger'>{this.state.errors.email}</span>
                                                <span style={{ fontSize: 15 }} className='text-danger'>{this.state.errors.email_format}</span>
                                            </div>
                                        </div>

                                        <div className="login-signup-row">
                                            <div className="login-signup-filed">
                                                <input type="password" name="passWord" onChange={this.OnChange} value={passWord} className="form-control"  placeholder="Password" />
                                                <span style={{ fontSize: 15 }} className='text-danger'>{this.state.errors.passWord}</span>
                                            </div>
                                        </div>
                                        <div className="login-signup-row">
                                            <div className="login-signup-filed">
                                                <input type="password" name="confirmPassword"  onChange={this.OnChange} value={confirmPassword} className="form-control"  placeholder="Confirm Password" />
                                                <span style={{ fontSize: 15 }} className='text-danger'>{this.state.errors.confirmPassword}</span>
                                                <span style={{ fontSize: 15 }} className='text-danger'>{this.state.errors.match_password}</span>
                                            </div>
                                        </div>

                                        <div className="login-signup-row">
                                            <div className="login-signup-button">
                                                <button style={{ fontSize: 15 }} type="button" onClick={this.OnSubmit.bind(this)} className="default-btn db-small">Register</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="login-signup-form-bottom-section">
                                    <div className="login-signup-row">
                                        <div className="login-signup-login-with">
                                            <div className="login-signup-login-with-title">Log In with:</div>
                                            <ul className="login-signup-login-with-list">
                                                <li className="ls-fb">
                                                    <a href="#" target="_blank"></a>
                                                </li>
                                                <li className="ls-gp">
                                                    <a href="#" target="_blank"></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="login-signup-row">
                                        <div className="login-signup-not-a-member-wrapper">
                                            <div className="login-signup-not-a-member">
                                                Not a member yet? <Link to="/login">Log In Now</Link>
                                            </div>
                                            <div className="login-signup-not-a-member-message">
                                                Create one & start trading with Trading System.
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

SignUpScreen.contextTypes = 
{
  // eslint-disable-next-line
  router: PropTypes.object.isRequired
}
const MapDispatch = {

    Register,
    Router
}
export default connect(null, MapDispatch) (withAlert(SignUpScreen))