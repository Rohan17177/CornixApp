import validator from 'validator'
import isEmpty from 'lodash/isEmpty'

export default function validateInput(data) {


    let errors = {}

    if (validator.isEmpty(data.newpassword)) {
        errors.newpassword = "Enter a New Password"

    }

    if (validator.isEmpty(data.oldpassword)) {
        errors.oldpassword = "Enter a Old Password"
    }

    if (validator.isEmpty(data.confirmpassword)) {
        errors.confirmpassword = "Enter a Confirm Password"
    }
    if(data.confirmpassword !== data.newpassword)
    {
       errors.match_password = "New Password And Confirm Password not Matched"
    }
    return { errors, isValid: isEmpty(errors) }

}