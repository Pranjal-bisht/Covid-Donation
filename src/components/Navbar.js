import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3 bg-success">
                <div className="container">
                    <a href="#" className="navbar-brand text-light">CovidRelief</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navmenu">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item px-3">
                                <a href="#" className="nav-link text-light">Home</a>
                            </li>
                            <li className="nav-item px-3">
                                <a href="#stats" className="nav-link text-light">Stats</a>
                            </li>
                            <li className="nav-item px-3">
                                <a href="#vaccinate" className="nav-link text-light">Vaccinate</a>
                            </li>
                            <li className="nav-item px-3">
                                <a href="#contact" className="nav-link text-light">Contact</a>
                            </li>
                            <li className="nav-item px-3">
                                <a href="#home" className="nav-link text-light">Donate now</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar