import React from 'react'
import checkmark from 'C:/files/reactapp/covidtracker/src/checkmark.gif'
import crossmark from 'C:/files/reactapp/covidtracker/src/crossmark.gif'
import prevent from 'C:/files/reactapp/covidtracker/src/prevent.gif'
const Info = () => {
    return (
        <>
         <section className="p-5 mt-md-5">
        <div className="container">
            <div className="row align-items-center justify-content-between">

                <h1 className="text-center pb-3">How To Protect Yourself</h1>
                <div className="col-md">
                    <h3>You should do</h3>
                    <ul className="">
                        <li>
                            <img src={ checkmark } alt="" className="checkmark"/>Stay at home
                        </li>
                        <li><img src={ checkmark } alt="" className="checkmark"/>Wear mask</li>
                        <li>
                            <img src={ checkmark } alt="" className="checkmark"/>Use Sanitizer
                        </li>
                        <li>
                            <img src={ checkmark } alt="" className="checkmark"/>Disinfect your
                            home
                        </li>
                        <li>
                            <img src={ checkmark } alt="" className="checkmark"/>Wash your hands
                        </li>
                        <li>
                            <img src={ checkmark } alt="" className="checkmark"/>Self-isolation
                        </li>
                    </ul>
                </div>
                <div className="col-md">
                    <h3>You should avoid</h3>
                    <ul className="">
                        <li>
                            <img src={ crossmark } alt="" className="checkmark"/>Avoid crowds
                        </li>
                        <li>
                            <img src={ crossmark } alt="" className="checkmark"/>Avoid animals
                        </li>
                        <li>
                            <img src={ crossmark } alt="" className="checkmark"/>Avoid handshaking
                        </li>
                        <li>
                            <img src={ crossmark } alt="" className="checkmark"/>Avoid eating out
                        </li>
                        <li>
                            <img src={ crossmark } alt="" className="checkmark"/>Avoid touching face
                        </li>
                        <li>
                            <img src={ crossmark } alt="" className="checkmark"/>Avoid droplets
                        </li>
                    </ul>
                </div>
                <div className="col-md">
                    <img className="img-fluid" src={prevent} alt=""/>
                </div>
            </div>
        </div>
    </section>   
        </>
    )
}
export default Info