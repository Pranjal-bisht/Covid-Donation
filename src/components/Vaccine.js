import React from 'react'
import vaccine from 'C:/files/reactapp/covidtracker/src/vaccinated.jpg'
const Vaccine = () => {
    return (
        <>
            <section className="p-5 mt-md-5 text-sm-start" id="vaccinate">
                <div className="container">
                    <div className="d-sm-flex align-items-center justify-content-between">
                        <div>
                            <h1>TIME TO VACCINATE</h1>
                            <p className="lead">The fight against <span className="fw-bold text-success">
                                COVID-19</span> is far from over. The
                                pandemic hasn't ended yet. Until everyone is vaccinated, we remain at risk.
                            </p>
                            <h5 className="mb-5">Register Yourself on <span className="fw-bold text-success">CoWin.</span></h5>

                            <a className="btn btn-success btn-lg" href="https://selfregistration.cowin.gov.in/"
                                target="_blank">Register
                                Now</a>
                        </div>
                        <img className="img-fluid w-50 d-none d-sm-block" src={ vaccine } alt=""/>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Vaccine