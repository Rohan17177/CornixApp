import React, { Component } from 'react';
// import "./ChangePassword.css"
import { connect } from "react-redux";
import { ChangePassword   } from "../../../Actions/LoginActions";
import ValiDateInput  from  "../../../Validations/ChangePasswordValidation"
import { withAlert } from "react-alert";
class ChangePasswordPage extends Component {
    constructor(props) {
        super(props)

        this.state =
            {
         
                oldpassword: "",
                newpassword: "",
                confirmpassword:"",
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
        let errors = Object.assign({}, this.state.errors);
        delete errors[e.target.name];
        this.setState({ [e.target.name]: e.target.value, errors: errors })
    }

    OnSubmit(e) {

        e.preventDefault()
        // store.dispatch({type: 'ADD_FLASH_MESSAGES' ,messageType:'success',text:'You have successfully logged in'})
        if (this.isValid()) {
            var data =
            {
         
                old_password: this.state.oldpassword,
                new_password: this.state.newpassword
            }


            // alert("callled")
            this.props.ChangePassword(data).then((res) => {
                console.log("Response In", res)
                 if(res.code ===200)
                 {
                   this.setState({
                       oldpassword:"",
                       newpassword:"",
                       confirmpassword:""
                   },()=>
                {
                   this.props.alert.success("Password Changed SuccessFully")
                })
                 }
                 else if(res.errors.length > 0)
                 {
                     this.props.alert.error(res.errors[0].message)

                 }
               
            }, err => {

            })

        }
    }
    render() {

        const {newpassword,oldpassword,confirmpassword}  = this.state
        return (
            <div className="content-wrapper">
                <div className="normal-wrap wrap">
                    <div className="bread-crumb">
                        <a href="#">Settings</a> > <a href="#">Security </a> > <span>Change Password</span>
                    </div>
                    <form className="form-horizontal wrap">
                        <div className="white-shadow phone-wrap">
                            <div className="lined-title">
                                <h3 className="l-title">Change Password</h3>
                            </div>
                            <div className="form-385">
                                <div className="form-group">
                                    <div className="field">
                                        <input type="text" onChange={this.OnChange} name="oldpassword"  value={oldpassword} className="input-field"  placeholder="Old Password" />
                                    </div>
                                    <span style={{ fontSize: 15 }} className='text-danger'>{this.state.errors.oldpassword}</span>
                                </div>
                                <div className="form-group">
                                    <div className="field">
                                        <input type="text" onChange={this.OnChange} name="newpassword" value={newpassword} className="input-field"  placeholder="New Password" />
                                    </div>
                                    <span style={{ fontSize: 15 }} className='text-danger'>{this.state.errors.newpassword}</span>
                                </div>
                                <div className="form-group">
                                    <div className="field">
                                        <input type="text" onChange={this.OnChange} name="confirmpassword" value={confirmpassword} className="input-field" placeholder="Confirm Password" />
                                    </div>
                                    <span style={{ fontSize: 15 }} className='text-danger'>{this.state.errors.confirmpassword}</span>
                                    <span style={{ fontSize: 15 }} className='text-danger'>{this.state.errors.match_password}</span>
                                </div>
                                <div className="button-wrap-np">
                                    <button onClick={this.OnSubmit} className="default-btn stc-17">update</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

const mapDispatch =
{
    ChangePassword
}

export default  connect(null,mapDispatch) (withAlert(ChangePasswordPage))