import React, { Component } from 'react';

import './login.scss';

import {Button, Card, CardContent} from '@material-ui/core';



class Login extends Component 
    /**
     Need to resign login component
     * @
     */

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