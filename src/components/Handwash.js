import React from 'react'
import one from 'C:/files/reactapp/covidtracker/src/1.png'
import two from 'C:/files/reactapp/covidtracker/src/2.png'
import three from 'C:/files/reactapp/covidtracker/src/3.png'
import four from 'C:/files/reactapp/covidtracker/src/4.png'
import five from 'C:/files/reactapp/covidtracker/src/5.png'
import six from 'C:/files/reactapp/covidtracker/src/6.png'
const Handwash = () => {
    return (
        <>
            <section className="p-5 mt-md-5 bg-success">
                <div className="container">
                    <h1 className="text-center pb-5 text-light">Wash your hands effectively with these steps</h1>
                    <div className="row g-4 ">

                        <div className="col-md">
                            <div className="text-center">
                                <img className="img-fluid rounded-circle image-hover" src={one} alt=""/>
                                <p class ="lead text-light">Soap on Hand</p>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="text-center">
                                <img className="img-fluid rounded-circle image-hover" src={ two } alt=""/>
                                <p class ="lead text-light">Palm to Palm</p>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="text-center">
                                <img className="img-fluid rounded-circle image-hover" src={three}alt=""/>
                                <p class ="lead text-light">Between Fingers</p>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="text-center">
                                <img className="img-fluid rounded-circle image-hover" src={ four }alt=""/>
                                <p class ="lead text-light">Back to Hands</p>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="text-center">
                                <img className="img-fluid rounded-circle image-hover" src={ five } alt=""/>
                                <p class ="lead text-light">Clean with Water</p>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="text-center">
                                <img className="img-fluid rounded-circle image-hover" src={ six } alt=""/>
                                <p className="lead text-light text-center">Focus on Wrist</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Handwash