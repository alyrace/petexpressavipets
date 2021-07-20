import React from 'react'

const Sidebar = () => {
    return (
        <div>
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
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
        </div>
    )
}

export default Sidebar;
