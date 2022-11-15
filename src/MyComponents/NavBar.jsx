import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">
                                Home <span className="sr-only"></span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about-us">
                                about-us
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact-us">
                                contact-us
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
