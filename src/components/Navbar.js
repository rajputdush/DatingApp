import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";



const Navbar = () => {
    let location = useLocation();
    useEffect(() => {
    }, [location])

    // hamburger menu open and close
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className=" w-100 w-lg-75 mx-auto blur mt-2 fixed-top border rounded shadow-lg ">
            <nav className="navbar navbar-expand-sm">
                <div className="container-fluid ">
                    <Link className="navbar-brand " to="/">HerSoirée</Link>

                    <form className=" flex-grow-1 mx-2 mx-lg-5 d-none d-sm-block" >
                        <div className="input-group mx-lg-5">
                            <span className="input-group-text bg-inherit border-0" id="basic-addon1">@</span>
                            <input type="text" className="form-control border-0 shadow-none bg-inherit" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </form>

                    <button className="navbar-toggler hover-link border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={isOpen} aria-label="Toggle navigation" onClick={() => setIsOpen(!isOpen)}>
                        {/* hamburger */}
                        <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"} fs-3 `}></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto flex-column flex-lg-row flex-md-row mb-lg-0">
                            <li className="nav-item ">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/safety">Safety</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/pricing">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link  ${location.pathname === "/" ? "active" : ""}`} to="/login">SignUp</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>

    )
}

export default Navbar
