import React, { Component } from 'react';

import './login.scss';

import cat from '../../images/cat.png';
//import {Button, Card, CardContent} from '@material-ui/core';


class Login extends Component {
    
    render() {
        return (
            <div>
                <section className="Form">
                    <div className="row">
                        <div className="col-lg-5">
                            <img src={cat} alt="kitty" />
                        </div>
                        <div className="col-lg-7">
                            <form>
                                <div className="form-row">
                                    <div className="col-lg-7">
                                        <input type="username" placeholder="username" className="form-control">
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-lg-7">
                                        <input type="password" placeholder="password" className="form-control">
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                    <CardContent>
                        <Button variant="contained" color="secondary"> Login</Button>
                    </CardContent>
                </Card>                
            </div>
        )
    }
}

export default Login;
/*class Login extends Component {
    
    render() {
        return (
            <div>
                <Card justify="center" alignItems="stretch">
                    <CardContent>
                        <Button variant="contained" color="secondary"> Login</Button>
                    </CardContent>
                </Card>                
            </div>
        )
    }
}

export default Login;
*/