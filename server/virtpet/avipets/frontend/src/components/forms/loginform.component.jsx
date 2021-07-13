import React from 'react';
import '../login/login.scss';

const Loginform = () => {
    return (
        <div>
            <form className="login_form">
                <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center welcome_back">
                            <h3>Welcome back</h3>
                        </div>
                </div>
                <div className="form-group">
                    <i class="far fa-user-circle"></i>
                    <label htmlFor="username" className="form_label">Username</label>
                    <input type="text" name="username" id="username" className="form-control"  placeholder="Username" />
                </div>
                    <div className="form-group">
                        <i class="fas fa-lock"></i>
                        <label htmlFor="password" className="form_label m-1">Password</label>
                        <input type="password" name="password" id="password" className="form-control"  placeholder="Password" />
                </div>
                <div className="form-group form-check">
                        <label htmlFor="remember_me"className="form-check-label m-1">
                            <input type="checkbox" name="remember_me pd-1" id="remember_me" className="form-check-input login_label"/>
                                Remember Me
                        </label>
                </div>
                <div className="row">
                    <button type="submit" class="btn btn-outline-danger login_btn">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Loginform;