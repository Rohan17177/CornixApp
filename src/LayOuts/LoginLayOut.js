import React, { Component } from 'react'
import Header from "../Elements/Header"
import Footer from '../Elements/Footer';
import FlashMessageList from '../Components/FlashMessages/FlashMessageList';
import { Router,Redirect } from 'react-router';
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { withAlert} from "react-alert"
import $ from "jquery"

 class LoginLayOut extends Component {
    componentDidMount()
    {
       
        const value = JSON.parse(localStorage.getItem('IsLoggedIn'))
        if(value === true)
        {

               this.context.router.history.push("/dashboard")
               this.props.alert.info("You Are Already Logged In")
        } 
        else
        {
            var currentPath = this.context.router.route.location.pathname
              if(currentPath == "/signup")
              {
                this.context.router.history.push('/signup')
              }
              else
              {
                this.context.router.history.push('/login')
              }
            }
            

    }
    render() {
        return (
            <div className="main-right-wrapper full-width">
                <Header IsLoggedIn={this.props.IsLoggedIn} />
                {/* <FlashMessageList/> */}
                {this.props.children}
                <Footer />
            </div>
        )
    }
}
LoginLayOut.contextTypes = 
{
  // eslint-disable-next-line
  router: PropTypes.object.isRequired
}
export default  connect(null,{Router})(withAlert(LoginLayOut))