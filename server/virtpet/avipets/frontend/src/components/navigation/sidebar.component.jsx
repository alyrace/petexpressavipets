import React from 'react'

const Sidebar = () => {
    return (
        <div>
            <div className="sidebar">
                    <div className="navbar_content">
                    <i class="far fa-window-close"></i>
                        <div className="brand-logo">
                            <img src={Logo} alt="avi pets" />
                        </div>
                    </div>
                    <ul className="nav_list list-group list-group-flush">
                        <li className="list-group-item">
                            <form className="d-flex">
                                
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </li>
                        <li className="list-group-item">
                            <a href="#">
                            <i class="fas fa-th"></i>
                            <span className="link_name">Dashboard</span>
                            </a>
                        </li>
                        <li className="list-group-item">
                            <a href="#">
                            <i class="fas fa-home"></i>
                            <span className="link_name">Home</span>
                            </a>
                        </li>
                        <li className="list-group-item">
                            <a href="#">
                            <i class="fas fa-plane"></i>
                            <span className="link_name">Airlines</span>
                            </a>
                        </li>
                        <li className="list-group-item">
                            <a href="#">
                            <i class="fas fa-truck-moving"></i>
                            <span className="link_name">Drivers</span>
                            </a>
                        </li>
                        <li className="list-group-item">
                            <a href="#">
                            <i class="fas fa-passport"></i>
                            <span className="link_name">Compliance & Procesing</span>
                            </a>
                        </li>
                        <li className="list-group-item">
                            <a href="#">
                            <i class="fas fa-store-alt"></i>
                            <span className="link_name">Opertaions</span>
                            </a>
                        </li>
                        <li className="list-group-item">
                            <a href="#">
                            <i class="fas fa-paw"></i>
                            <span className="link_name">Pet Hotel</span>
                            </a>
                        </li>
                        <li className="list-group-item">
                            <a href="#">
                            <i class="fas fa-mobile-alt"></i>
                            <span className="link_name">Sales</span>
                            </a>
                        </li>
                        <li className="list-group-item">
                            <a href="#">
                            <i class="fas fa-user-shield"></i>
                            <span className="link_name">TSA</span>
                            </a>
                        </li>
                    </ul>
                </div> 
        </div>
    )
}

export default Sidebar;
