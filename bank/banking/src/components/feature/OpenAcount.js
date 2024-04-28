import React from 'react'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import {useFormik} from 'formik'
import axios from 'axios'
import { API_URL } from '../../utils/API'

const OpenAcount = () => {

    let openAccount = useFormik({
        // validationSchema : ,
        initialValues : {
            fullname : "",
            account_type : "",
            dob : "",
            gender : "",
            mother_name : "",
            father_name : "",
            nationality : "",
            phone_no : "",
            email : "",
            address : "",
            secondary_address : "",
            city : "",
            state : "",
            country : ""
        },
        onSubmit : async(formData)=>{
            let ID = localStorage.getItem('Naruto')
            let response = await axios.put(`${API_URL}`, formData, {headers : {Authorization : ID}})
            if(response.data.status === 200){

            }
        }
    })

  return (
    
    <>
        <Header />

    <div className="banner-section position-relative">
        <div className="container">
        <div className="row">
            <div className="col-md-6">
            <div className="banner-content banner-padding">
                <h3 className="title">OPEN ACCOUNT</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            </div>
            <div className="col-md-6 mt-7 mt-md-0">
            <div className="banner-content scene banner-img">
                <div data-depth="0.2">
                <img src="/assets/images/bg/6.png" alt="img" />
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    <div className="open-account-area pt-100 pb-100">
        <div className="container">
        <div className="row justify-content-center text-center">
            <div className="col-lg-8 col-md-12 mb-50">
            <div className="section-title">
                <h2 className="title">Account opening form</h2>
                <div className="title-bdr">
                <div className="left-bdr" />
                <div className="right-bdr" />
                </div>
                <p>
                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet
                consectetur adipiscing elit
                </p>
            </div>
            </div>
        </div>
        <div className="open-account-form">
            <form onSubmit={openAccount.handleSubmit}>
            <div className="row">
                <div className="col-lg-6 col-md-6">
                <div className="form-group">
                    <label>Full name</label>
                    <input
                    type="text"
                    name='fullname'
                    onChange={openAccount.handleChange}
                    placeholder="Full name"
                    className="form-control"
                    />
                </div>
                </div>
                <div className="col-lg-6 col-md-6">
                <div className="form-group">
                    <label>Account type</label>
                    <select name='account_type' onChange={openAccount.handleChange} className='form-control'>
                    <option value="">Please select</option>
                    <option value="Online banking">Online banking</option>
                    <option value="Online investing">Online investing</option>
                    <option value="Business banking">Business banking</option>
                    <option value="Mobile banking">Mobile banking</option>
                    <option value="Corporate & commercial">Corporate &amp; commercial</option>
                    <option value="Institutional">Institutional</option>
                    </select>
                </div>
                </div>
                <div className="col-lg-6 col-md-6">
                <div className="form-group">
                    <label>Date of birth</label>
                    <input
                    type="text"
                    onChange={openAccount.handleChange}
                    name='dob'
                    placeholder="dd/mm/yy"
                    className="form-control"
                    />
                </div>
                </div>
                <div className="col-lg-6 col-md-6">
                <div className="form-group">
                    <label>Gender</label>
                    <select onChange={openAccount.handleChange} name='gender' className='form-control'>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    </select>
                </div>
                </div>
                <div className="col-lg-6 col-md-6">
                <div className="form-group">
                    <label>Mother’s name</label>
                    <input
                    type="text"
                    onChange={openAccount.handleChange} name='mother_name'
                    placeholder="Mother’s name"
                    className="form-control"
                    />
                </div>
                </div>
                <div className="col-lg-6 col-md-6">
                <div className="form-group">
                    <label>Father’s name</label>
                    <input
                    type="text"
                    onChange={openAccount.handleChange} name='father_name'
                    placeholder="Father’s name"
                    className="form-control"
                    />
                </div>
                </div>
                {/* <div className="col-lg-6 col-md-6">
                <div className="form-group">
                    <label>Spouse’s name</label>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Spouse’s name"
                    />
                </div>
                </div> */}
                <div className="col-lg-6 col-md-6">
                <div className="form-group">
                    <label>Nationality</label>
                    <input
                    type="text"
                    onChange={openAccount.handleChange} name='nationality'
                    placeholder="Nationality"
                    className="form-control"
                    />
                </div>
                </div>
                {/* <div className="col-lg-6 col-md-6">
                <div className="form-group">
                    <label>Occupation</label>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Occupation"
                    />
                </div>
                </div> */}
                {/* <div className="col-lg-6 col-md-6">
                <div className="form-group">
                    <label>Monthly income</label>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Monthly income"
                    />
                </div>
                </div> */}
                {/* <div className="col-lg-6 col-md-6">
                <div className="form-group">
                    <label>Sources of income</label>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Sources of income"
                    />
                </div>
                </div> */}
                {/* <div className="col-lg-6 col-md-6">
                <div className="form-group">
                    <label>Marital status</label>
                    <select>
                    <option value="">Single</option>
                    <option value="">Married</option>
                    <option value="">Divorced</option>
                    </select>
                </div>
                </div> */}
                <div className="col-lg-6 col-md-6">
                <div className="form-group">
                    <label>Mobile number</label>
                    <input
                    type="text"
                    onChange={openAccount.handleChange} name='phone_no'
                    placeholder="Mobile number"
                    className="form-control"
                    />
                </div>
                </div>
                <div className="col-lg-12 col-md-12">
                <div className="form-group">
                    <label>Email address</label>
                    <input
                    type="text"
                    onChange={openAccount.handleChange} name='email'
                    placeholder="Email address"
                    className="form-control"
                    />
                </div>
                </div>
                <div className="col-lg-12">
                <h3>Address</h3>
                <div className="row">
                    <div className="col-lg-12">
                    <div className="form-group">
                        <input
                        type="text"
                        onChange={openAccount.handleChange} name='address'
                        placeholder="Street address"
                        className="form-control"
                        />
                    </div>
                    </div>
                    <div className="col-lg-12">
                    <div className="form-group">
                        <input
                        type="text"
                        onChange={openAccount.handleChange} name='secondary_address'
                        placeholder="Street address line 2"
                        className="form-control"
                        />
                    </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="form-group">
                        <input
                        type="text"
                        onChange={openAccount.handleChange} name='city'
                        placeholder="City"
                        className="form-control"
                        />
                    </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="form-group">
                        <input
                        type="text"
                        onChange={openAccount.handleChange} name='state'
                        placeholder="State / Province"
                        className="form-control"
                        />
                    </div>
                    </div>
                    {/* <div className="col-lg-6">
                    <div className="form-group">
                        <input
                        type="text"
                        placeholder="Postal / Zip code"
                        className="form-control"
                        />
                    </div>
                    </div> */}
                    <div className="col-lg-12">
                    <div className="form-group">
                        <select onChange={openAccount.handleChange} name='country' className='form-control'>
                        <option value="">Country</option>
                        <option value="India">India</option>
                        <option value="England">England</option>
                        <option value="Australia">Australia</option>
                        </select>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-12">
                <div className="banner-form-btn">
                    <button type="submit" className="default-btn">
                    Submit
                    </button>
                </div>
                </div>
            </div>
            </form>
        </div>
        </div>
    </div>
    <div className="cta-area">
        <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-12">
            <div className="get-start-box">
                <div className="col-lg-8">
                <div className="section-heading">
                    <h5 className="section__meta text-white">#get in touch</h5>
                    <h2 className="section__title">Ready to get started ?</h2>
                    <p className="section__sub">
                    Speak to a Bnker specialist at (800-123-1234)
                    </p>
                </div>
                </div>
                <div className="col-lg-4">
                <div className="button-shared text-end">
                    <a className="btn cta-btn" href="contact.html">
                    Request Call Back <span className="la la-caret-right" />
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>



        <Footer />
    </>
    
  )
}

export default OpenAcount