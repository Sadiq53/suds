import * as yup from 'yup'

let OpenAccountSchema = yup.object({
    fullname : yup.string().required("Enter Your Full Name"),
    account_type : yup.string().required("Choose Your Account Type"),
    dob : yup.string().required("Enter Your Date of Birth"),
    gender : yup.string().required("Select Your Gender"),
    nationality : yup.string().required("Enter Your Nationality"),
    phone_no : yup.number().typeError("Value Should be in Numbers").min(1000000000).max(9999999999).required("Enter Your Contact Number"),
    email : yup.string().email().required("Enter your Email Address"),
    address : yup.string().required("Enter Your Address"),
    city : yup.string().required("Enter Your City"),
    state : yup.string().required("Enter Your State"),
    country : yup.string().required("Enter Your Country")
})

export default OpenAccountSchema;