import validator from 'validator'
import isEmpty from 'lodash/isEmpty'

export default function validateInput(data) {



    let errors = {}

    if (validator.isEmpty(data.email)) {
        errors.email = "Enter an Email"

    }
    else if (!validator.isEmail(data.email)) {
        errors.email_format = "Enter a Valid Email"
    }


    if (validator.isEmpty(data.passWord)) {
        errors.passWord = "Enter a Password"
    }


    return { errors, isValid: isEmpty(errors) }

}