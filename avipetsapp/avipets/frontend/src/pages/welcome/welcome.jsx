import React from 'react';
import Login from '../../components/login/login';
import '../welcome/welcome.scss';

function Welcome() {
        return (
            <div className="welcome_page_background">
                <Login />
            </div>
        )
};

export default Welcome;