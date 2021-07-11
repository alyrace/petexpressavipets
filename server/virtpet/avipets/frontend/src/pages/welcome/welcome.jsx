import React from 'react';
import Login from '../../components/login/login';
import '../welcome/welcome.scss';

function Welcome() {
        return (
            <div className="container-fluid welcome_page_background">
                <div className="row main_content text-center login_card">
                    <div className="row text-center main_login">
                        <Login />
                    </div>
                </div>         
            </div>
        )
};

export default Welcome;