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
                    <div className="row text-center text-white gx-5 gy-4">
                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="container box_1">
                                <div className="row pt-5">
                                    <i class="fas fa-plane fa-10x"></i>
                                </div>
                                <div className="row mt-4">
                                    <h2>Airlines</h2>
                                </div>
                                <div className="row mt-3">
                                    <button type="button" className="btn btn-outline-light btn-sm">Enter</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="container box_2">
                                <div className="row pt-5">
                                    <i class="fas fa-truck-moving fa-10x"></i>
                                </div>
                                <div className="row mt-4">
                                    <h2>Drivers</h2>
                                </div>
                                <div className="row mt-3">
                                    <button type="button" className="btn btn-outline-light btn-sm">Enter</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="container box_3">
                                <div className="row pt-5">
                                    <i class="fas fa-passport fa-10x"></i>
                                </div>
                                <div className="row mt-4">
                                    <h2>Compliance</h2>
                                </div>
                                <div className="row mt-3">
                                    <button type="button" className="btn btn-outline-light btn-sm">Enter</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="container box_4">
                                <div className="row pt-5">
                                    <i class="fas fa-store-alt fa-10x"></i>
                                </div>
                                <div className="row mt-4">
                                    <h2>Operations</h2>
                                </div>
                                <div className="row mt-3">
                                    <button type="button" className="btn btn-outline-light btn-sm">Enter</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center text-white gx-5 gy-4 mt-1">
                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className=" container box_5">
                                <div className="row pt-5">
                                    <i class="fas fa-paw fa-10x"></i>
                                </div>
                                <div className="row mt-4">
                                    <h2>Pet Hotel</h2>
                                </div>
                                <div className="row mt-3">
                                    <button type="button" className="btn btn-outline-light btn-sm">Enter</button>
                                </div>
                            </div>    
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="container box_6">
                                <div className="row pt-5">
                                    <i class="fas fa-mobile-alt fa-10x"></i>
                                </div>
                                <div className="row mt-4">
                                    <h2>Sales</h2>
                                </div>
                                <div className="row mt-3">
                                    <button type="button" className="btn btn-outline-light btn-sm">Enter</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="container box_7">
                                <div className="row pt-5">
                                    <i class="fas fa-landmark fa-10x"></i>
                                </div>
                                <div className="row mt-4">
                                    <h2>USDA & Vet</h2>
                                </div>
                                <div className="row mt-3">
                                    <button type="button" className="btn btn-outline-light btn-sm">Enter</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="container box_8">
                                <div className="row pt-5">
                                    <i class="fas fa-user-shield fa-10x"></i>
                                </div>
                                <div className="row mt-4">
                                    <h2>TSA</h2>
                                </div>
                                <div className="row mt-3">
                                    <button type="button" className="btn btn-outline-light btn-sm">Enter</button>
                                </div>
                            </div>
                        </div>
                    </div>
                 </section>
                 <section className="container bg-primary">
                     <h2>hello</h2>
                </section>  
            </div>
        );
    };
 };

 
export default Home;