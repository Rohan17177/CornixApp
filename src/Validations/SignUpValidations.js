import validator from 'validator'
import isEmpty from 'lodash/isEmpty'

export default function validateInput(data) {



    let errors = {}

    if (validator.isEmpty(data.FirstName)) {
        errors.FirstName = "Enter a FirstName"
    }
    if (validator.isEmpty(data.LastName)) {
        errors.LastName = "Enter a LastName"
    }
    if(!validator.isEmail(data.email))
    {
        errors.email = "Enter a Valid Email"

    }
//    if (validator.isEmpty(data.email) === true && validator.isEmail(data.email)===false) {
//     if (validator.isEmpty(data.email)) 
//     {
//         errors.email = "Enter an Email"
//     }
  
//     }
    if (validator.isEmpty(data.passWord)) {
        errors.passWord = "Enter a Password"
    }

    if (validator.isEmpty(data.confirmPassword)) {
        errors.confirmPassword = "Enter a Confirm  Password"
    }

    if(data.confirmPassword !== data.passWord)
    {
       errors.match_password = "Password And Confirm Password not Matched"
    }

    return { errors, isValid: isEmpty(errors) }

}