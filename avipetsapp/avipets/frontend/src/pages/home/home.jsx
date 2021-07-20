import React, { Component } from 'react'
//import {Container, Grid} from '@material-ui/core';

import Navbar from '../../components/navigation/navbar.component';
import '../home/home.scss';



class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <section className="container">
                    <div className="row text-center text-white gx-3 gy-3">
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <a className='Link' href="/airlines">
                                <div className="container box box_1">
                                    <div className="row pt-5">
                                        <i class="fas fa-plane portal_icon"></i>
                                    </div>
                                    <div className="row mt-4">
                                        <span className="portal_title">Airlines</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <a className='Link' href="/airlines">
                                <div className="container box box_2">
                                    <div className="row pt-5">
                                        <i class="fas fa-truck-moving portal_icon"></i>
                                    </div>
                                    <div className="row mt-4">
                                        <span className="portal_title">Drivers</span>
                                    </div>
                                </div>
                            </a>    
                        </div>
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <a className='Link' href="/airlines">    
                                <div className="container box box_3">
                                    <div className="row pt-5">
                                        <i class="fas fa-passport portal_icon"></i>
                                    </div>
                                    <div className="row mt-4">
                                        <span className="portal_title">Compliance</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <a className='Link' href="/airlines">  
                                <div className="container box box_4">
                                    <div className="row pt-5">
                                        <i class="fas fa-store-alt portal_icon"></i>
                                    </div>
                                    <div className="row mt-4">
                                        <span className="portal_title">Operations</span>
                                    </div>
                                </div>
                            </a>    
                        </div>
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <a className='Link' href="/airlines">    
                                <div className=" container box box_5">
                                    <div className="row pt-5">
                                        <i class="fas fa-paw portal_icon"></i>
                                    </div>
                                    <div className="row mt-4">
                                        <span className="portal_title">Pet Hotel</span>
                                    </div>
                                </div> 
                            </a>       
                        </div>
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <a className='Link' href="/airlines">
                                <div className="container box box_6">
                                    <div className="row pt-5">
                                        <i class="fas fa-mobile-alt portal_icon"></i>
                                    </div>
                                    <div className="row mt-4">
                                        <span className="portal_title">Sales</span>
                                    </div>
                                </div>
                            </a>    
                        </div>
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <a className='Link' href="/airlines">    
                                <div className="container box box_7">
                                    <div className="row pt-5">
                                        <i class="fas fa-landmark portal_icon"></i>
                                    </div>
                                    <div className="row mt-4">
                                        <span className="portal_title">USDA & Vet</span>
                                    </div>
                                </div>
                            </a>    
                        </div>
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <a className='Link' href="/airlines">
                                <div className="container box box_8">
                                    <div className="row pt-5">
                                        <i class="fas fa-user-shield portal_icon"></i>
                                    </div>
                                    <div className="row mt-4">
                                        <span className="portal_title">TSA</span>
                                    </div>
                                </div>
                            </a>   
                        </div>
                    </div>
                 </section>
                 <section className="container bg-primary mt-5">
                     <h2>hello</h2>
                </section>  
            </div>
        );
    };
 };

 
export default Home;