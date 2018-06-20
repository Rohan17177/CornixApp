import React, { Component } from 'react'
import Header from "../Elements/Header"
import SideBar from "../Elements/SideBar";
import LoginScreen from '../Components/Login/LoginScreen';
import FlashMessageList from '../Components/FlashMessages/FlashMessageList';
import {connect} from "react-redux"
import PropTypes from "prop-types"
import { Router} from 'react-router';
import { withAlert} from "react-alert"
import $ from "jquery"
 class AdminLayOut extends Component {

    constructor(props) {
        super(props)
        this.state =
            {
                fullName: '',
                isHide:false
            }
            this.OnClick  = this.OnClick.bind(this)
    }
    componentDidMount() {
        var data = JSON.parse(localStorage.getItem('UserData'))
        if (data !== null) {
            this.setState({ fullName: data.data.full_name,})
        }
        // $(document).ready(function() {
        //     $('.user-level').click(function (event) {
        //         event.stopPropagation();
        //         $(".drop-dwn").slideToggle("fast");
        //         $(this).toggleClass('active');
        //     });
        //     $(".drop-dwn").on("click", function (event) {
        //         event.stopPropagation();
        //     });
        //     $(document).on("click", function () {
        //         $(".drop-dwn").fadeOut();
        //         $('.user-level').removeClass('active');
        //     });
        // });
    }
    componentWillMount()
    {

         console.log("SESSSION",this.props.IsAuthenticatedSession)
        const value = JSON.parse(localStorage.getItem('IsLoggedIn'))
        // if(value === true)
        // {

        
        //        var currentPath = this.context.router.route.location.pathname
        //        this.context.router.history.push(currentPath)
        // } 
        // else
        // {
              
        //       this.context.router.history.push('/login')
        //       this.props.alert.info("You Not Logged In")
        // }

    }
 
    OnClick()
    {
       
    // if(document.getElementById("dropBar"))
    // {
    // document.getElementById("dropBar").style.display = "none"
    // //    this.setState({isHide:false})
    // }
    // this.child.showBar()
    }

     
    
    render() {
        if(this.state.fullName!==null)
        {
        return (
            <div ref={this.setWrapperRef} onClick={()=>this.OnClick()} className="main-right-wrapper">
                <aside>
                    <SideBar />
                </aside>
                <div>
                <Header ref={(node) => this.child = node}  isHide={this.state.isHide} fullName={this.state.fullName} {...this.props}  />
                </div>
                {/* <FlashMessageList/> */}
                {this.props.children}
            </div>
        )
       }
       else
       {
           <LoginScreen/>
       }
    }
}
AdminLayOut.contextTypes =
    {
        // eslint-disable-next-line
        router: PropTypes.object.isRequired
    }

 const mapStateToProps = (state)=>(
     {
         IsAuthenticatedSession:state.session.authenticated
     }
 )
export default connect(null,{Router}) (withAlert(AdminLayOut))