import React, { Component } from 'react';
import { connect } from "react-redux"
import "./LoginScreen.css"
import { Router,Redirect } from 'react-router';
import Logo from "../../img/logo.png"
import ValiDateInput from "../../Validations/LogInValidation";
import { Login } from "../../Actions/LoginActions";
import { Link } from 'react-router-dom'
import PropTypes from "prop-types"
import store from "../../store"
import { withAlert } from "react-alert";


class LoginScreen extends Component {
    constructor(props) {
        super(props)

        this.state =
            {
         
                email: "",
                passWord: "",
                errors: {}
            }

        this.OnChange = this.OnChange.bind(this)
        this.OnSubmit = this.OnSubmit.bind(this)
    }
   
    isValid() {
        const errors = ValiDateInput(this.state);
        if (!errors.isValid) {
            this.setState({ errors: errors.errors })
        }
        return errors.isValid;
    }

    OnChange(e) {
        console.log("Called")
        let errors = Object.assign({}, this.state.errors);
        delete errors[e.target.name];
        this.setState({ [e.target.name]: e.target.value, errors: errors })
    }

    OnSubmit() {
        // store.dispatch({type: 'ADD_FLASH_MESSAGES' ,messageType:'success',text:'You have successfully logged in'})
        if (this.isValid()) {
            var data =
            {
         
                email: this.state.email,
                password: this.state.passWord
            }
            this.props.Login(data).then((res) => {
                console.log("Response In", res.errors.length)
            
                // this.context.router.history.push('/dashboard')  

                if(res.data.full_name)
                {
                       this.context.router.history.push('/dashboard')  
                      this.props.alert.success("Logged In");
                }
                else if(res.errors.length > 0)
                {
                    console.log("ERROR",res.errors)
                    this.props.alert.error(res.errors[0].message);
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
                                            <div className="login-signup-button">
                                                <button style={{ fontSize: 15 }} type="button" onClick={this.OnSubmit.bind(this)} className="default-btn db-small">login</button>
                                            </div>
                                        </div>
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

LoginScreen.propTypes = 
{
    // User:PropTypes.array.isRequired,
    // IsAuthenticated:PropTypes.bool.isRequired,
    // flashmessage: PropTypes.string.isRequired,

}
LoginScreen.contextTypes = 
{
  // eslint-disable-next-line
  router: PropTypes.object.isRequired
}
const MapStateToProps = state =>
(
    console.log("STATE",state),
    {
       IsAuthenticated:state.session.authenticated,
       User:state.user,
       flashmessage: state.FlashMessages.text
    }
)

const MapDispatch = {

    Login,
    Router
}
export default connect(MapStateToProps, MapDispatch)(withAlert(LoginScreen))