import { Link, NavLink } from "react-router-dom"

function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-primary mb-4">
            <div className="container-fluid mx-4">
                <Link to="/" className="navbar-brand text-light ml-2">My Blog App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link text-light" aria-current="page">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/About" className="nav-link text-light" >About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Contact" className="nav-link text-light" >Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header