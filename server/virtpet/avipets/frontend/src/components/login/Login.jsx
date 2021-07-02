import React, { Component } from 'react';

import './login.scss';

import {Button, Card, CardContent} from '@material-ui/core';



class Login extends Component {

    render() {
        return (
            <div>
                <Card justify="center" alignItems="stretch">
                    <CardContent>
                        <Button variant="contained" color="blue"> Login</Button>
                    </CardContent>
                </Card>                
            </div>
        )
    }
}

export default Login;