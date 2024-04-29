import axios from 'axios'
import React, { useState } from 'react'
import { API_URL } from '../../utils/API'
import {useFormik} from 'formik'

const MyAccountLogin = () => {

    let initialValues = {
        username : "",
        mpin : ""
    }
    let [isMpin, setIsMpin] = useState(false)
    let pageLoad = async() =>{
        let ID = localStorage.getItem("Naruto")
        let response = await axios.get(`${API_URL}`, { headers : { Authorization : ID } });
        initialValues.username = response.data?.username;
        if(response.data.success === true){
            setIsMpin(true)
        }else{
            setIsMpin(false)
        }
    }

    let myaccountForm = useFormik({
        initialValues,
        onSubmit : async(formData)=>{

        }
    })

  return (
    <>
    <div className="hero-2">
        <div className="hero-2-item">
        <div className="container">
            <div className="row align-items-center">
            <div className="col-lg-6">
                <div className="hero-2-content">
                <h1>Best Banking Services System In The World</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                    ipsum suspendisse ultrices gravida.
                </p>
                <div className="hero-btn">
                    <a className="btn theme-btn-1" href="contact.html">
                    Get Started <i className="las la-angle-right" />
                    </a>
                </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="hero-2-form">
                <div className="content">
                    <h3>Sign in your account</h3>
                </div>
                <form>
                    <div className="row">
                    <div className="col-lg-12 col-sm-12">
                        <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                        />
                        </div>
                    </div>
                    <div className="col-lg-12 col-sm-12">
                        <div className="form-group">
                        <label>MPIN</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Password"
                        />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="hero-form-btn">
                        <button
                            type="submit"
                            className="btn theme-btn-1 width-100"
                        >
                            Sing in
                        </button>
                        </div>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </>

  )
}

export default MyAccountLogin