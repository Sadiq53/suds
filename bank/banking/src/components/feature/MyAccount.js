import React from 'react'

const MyAccount = () => {
  return (
    <>
    <div
        className="hero-3-bg"
        style={{
        background: 'url("images/hero/banner-4.png")',
        backgroundRepeat: "no-repeat"
        }}
    >
        <div className="container">
        <div className="row align-items-center justify-content-center">
            <div
            className="col-xl-4 col-lg-5 wow fadeInUp animated"
            data-wow-delay="0.4s"
            >
            <h1 className="hero-3-title text-white mb-0">
                Providing Reliable Banking Solutions
            </h1>
            <p className="text-white mt-4 mb-0">
                Itaque earum rerum tenetur sapiente delectus ut aut reiciendis
                voluptatibus maiores alias consequatur repellat.
            </p>
            <div className="mt-4 mb-4 pb-4">
                <a href="#" className="btn hero-btn">
                Read More <i className="las la-angle-right ms-2" />
                </a>
            </div>
            <div className="watch-video mb-4 mb-lg-0">
                <a
                href="http://vimeo.com/99025203"
                className="popup-video text-dark"
                >
                <i className="ri-play-fill play-icon-circle" />
                <span className="icon">Watch The Video!</span>
                </a>
            </div>
            </div>
            <div
            className="col-xl-7 offset-xl-1 col-lg-7 wow fadeInDown animated floating"
            data-wow-delay="0.4s"
            >
            <img
                src="images/hero/sh4-bn.png"
                alt=""
                className="img-fluid d-block mx-auto"
            />
            </div>
        </div>
        </div>
    </div>
    <div className="client-logo-area">
        <div className="container">
        <div className="row">
            <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 text-center">
            <div className="client-logo">
                <div className="client-logo-img">
                <img
                    src="images/client-logo/logo-envato.png"
                    alt=""
                    className="img-fluid"
                />
                </div>
            </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 text-center">
            <div className="client-logo">
                <div className="client-logo-img">
                {" "}
                <img
                    src="images/client-logo/logo-converkit.png"
                    alt=""
                    className="img-fluid"
                />
                </div>
            </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 text-center">
            <div className="client-logo">
                <div className="client-logo-img">
                {" "}
                <img
                    src="images/client-logo/logo-buzzumo.png"
                    alt=""
                    className="img-fluid"
                />
                </div>
            </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 text-center">
            <div className="client-logo">
                <div className="client-logo-img">
                {" "}
                <img
                    src="images/client-logo/logo-buffer.png"
                    alt=""
                    className="img-fluid"
                />
                </div>
            </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 text-center">
            <div className="client-logo">
                <div className="client-logo-img">
                {" "}
                <img
                    src="images/client-logo/logo-frame.png"
                    alt=""
                    className="img-fluid"
                />
                </div>
            </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 text-center">
            <div className="client-logo">
                <div className="client-logo-img">
                {" "}
                <img
                    src="images/client-logo/logo-clearbit.png"
                    alt=""
                    className="img-fluid"
                />
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    <div className="about-area pt-100 pb-100">
        <div className="container">
        <div className="row">
            <div className="col-lg-6 align-self-center">
            <div className="mb-20">
                <img
                src="images/bg/about.png"
                className="img-fluid  wow fadeInLeft animated"
                data-wow-delay="0.2s"
                alt="image"
                />
            </div>
            </div>
            <div className="col-lg-6">
            <div className="about-content warp">
                <div className="row justify-content-center text-center">
                <div className="col-lg-8 col-md-12 mb-50">
                    <div className="section-title">
                    <h2 className="title">About Us</h2>
                    <div className="title-bdr">
                        <div className="left-bdr" />
                        <div className="right-bdr" />
                    </div>
                    <p>
                        We operate our banking services in many countries around the
                        world.
                    </p>
                    </div>
                </div>
                </div>
                <strong>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt labore dolore magna aliqua.
                </strong>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                accumsan lacus vel facilisis.
                </p>
                <div className="about-btn justify-content-center text-center">
                <a href="#" className="btn theme-btn-1">
                    Learn More
                </a>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    <div className="loan-section">
        <div className="container">
        <form action="#">
            <div className="row calculator-loan">
            <div className="col-lg-7 col-12 wow fadeInLeft">
                <div className="loan-calculation-wrapper">
                <div className="theme-title">
                    <h2>Check loan status, interest &amp; Installment.</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum justo ante, auctor at sodales facilisis, tempus
                    vitae sapien.{" "}
                    </p>
                    <div className="loan-filter-form">
                    <div className="thirty form"></div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-5 col-12 wow fadeInRight">
                <div className="loan-confirm-form">
                <div className="thirty">
                    <div className="results clearfix" />
                </div>
                <button className="tran3s apply-button">APPLY FOR LOAN</button>
                </div>
            </div>
            </div>
        </form>
        </div>
    </div>
    </>

  )
}

export default MyAccount