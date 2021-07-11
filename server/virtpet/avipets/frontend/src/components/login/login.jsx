import React, { Component } from 'react';
import './login.scss';
import cat from '../../images/cat.png';
import dog from '../../images/dog3.png';
class Login extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row main_content text-center">
                    <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12 text-center pet_card">
                        <span className="pet">
                            <img src={dog} alt="doggy" />
                        </span>
                        <h4 className="company_title">AVI PETS</h4>
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12 login_form">
                        <div className="container-fluid">
                            <div className="row">
                                <form>
                                    <div className="form-group">
                                    <span className="iconify" data-icon="ph:user-circle-light" data-inline="false"></span>
                                        <label htmlFor="username" className="form_label">UserName</label>
                                        <input type="text" name="username" id="username" className="form-control"  placeholder="Username" />
                                    </div>
                                    <div className="form-group">
                                        <span class="iconify" data-icon="dashicons:lock" data-inline="false"></span>
                                        <label htmlFor="password" className="form_label m-1">Password</label>
                                        <input type="password" name="password" id="password" className="form-control"  placeholder="Password" />
                                    </div>
                                    <div className="form-group form-check">
                                        <label htmlFor="remember_me"className="form-check-label m-1">
                                            <input type="checkbox" name="remember_me pd-1" id="remember_me" className="form-check-input"/>
                                            Remember Me
                                        </label>
                                    </div>
                                    <div className="row">
                                        <button type="submit" class="btn btn-outline-danger login_btn">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
        );
    };
};

export default Login;