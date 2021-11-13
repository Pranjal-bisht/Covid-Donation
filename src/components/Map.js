import React from 'react'

const Map = () => {
    return (
        <>
            <section className="p-5" id="contact">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md">
                            <h2 className="text-center mb-4">Contact Info</h2>
                            <ul className="list-group list-group-flush lead">
                                <li className="list-group-item">
                                    <span className="fw-bold">Main Location: </span>24th Main Road, J.P.Nagar, Bangalore-51, India.
                                </li>
                                <li className="list-group-item">
                                    <span className="fw-bold">Phone: </span>+91 999 999 9999
                                </li>
                                <li className="list-group-item">
                                    <span className="fw-bold">Email ID: </span>covidrelief@gmail.com
                                </li>
                                <li className="list-group-item">
                                    <span className="fw-bold">Social: </span>
                                    <a href="https://www.facebook.com/MoHFWIndia/" ><i
                                        className="fab fa-facebook p-2"></i></a>
                                    <a href="https://www.youtube.com/user/mohfwindia" ><i
                                        className="fab fa-youtube p-2"></i></a>
                                    <a href="https://twitter.com/MoHFW_INDIA" ><i
                                        className="fab fa-twitter p-2"></i></a>
                                    <a href="https://www.instagram.com/mohfwindia/?hl=en" ><i className="fab fa-instagram p-2"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md">
                            <div className="map-responsive">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.877846574187!2d77.5734042!3d12.909684299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15aef47cc555%3A0x19fc4ef2704d71a9!2sAster%20RV%20Hospital%2C%20JP%20Nagar%20Bangalore!5e0!3m2!1sen!2sin!4v1624307566482!5m2!1sen!2sin"
                                    width="600" height="450" style={{border: '0'}} allowfullscreen="" loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Map