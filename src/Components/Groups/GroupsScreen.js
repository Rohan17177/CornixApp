import React, { Component } from 'react';
import "./GroupsScreen.css"

export default class GroupsPage extends Component {
    render() {
        return (
            <div  className="content-wrapper">
            <div  className="normal-wrap wrap">
                <div  className="dual-form-wrap wrap">
                    <div  className="dual-box-wrap wrap">
                        <h3  className="main-title">MY GROUPS</h3>
                        <div  className="row">
                            <form  className="form-horizontal wrap">
                                  <div  className="grid-block">
                                      <div  className="grid">
                                          <div  className="grid-inner">
                                              <div  className="grid-img">
                                                  <div  className="bordered-img">
                                                      <img src={require("../../img/group-1.png")}/>
                                                  </div>
                                              </div>
                                              <div  className="grid-content">
                                                  <h3  className="grid-ttl">Lead Generation</h3>
                                                  <div  className="static-text">
                                                      <p>Lorem Ipsum is simply dummy text of the
                                                          printing and typesetting industry. lorem
                                                          Ipsum has been the industry's for a long
                                                          standard dummy text ever since.</p>
                                                  </div>
                                                  <div  className="dual-rate row">
                                                      <div  className="col-6 dual-rate-left">
                                                          <p>Open Signals: <span>20</span></p>
                                                      </div>
                                                      <div  className="col-6 dual-rate-right">
                                                          <p>Success Rate: <span>68%</span></p>
                                                      </div>
                                                  </div>
                                                  <div  className="report-wrap">
                                                      <a href="#"  className="report">View Report</a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div  className="grid">
                                          <div  className="grid-inner">
                                              <div  className="grid-img">
                                                  <div  className="bordered-img">
                                                      <img src={require("../../img/group-2.png")}/>
                                                  </div>
                                              </div>
                                              <div  className="grid-content">
                                                  <h3  className="grid-ttl">Marketing Strategy</h3>
                                                  <div  className="static-text">
                                                      <p>Lorem Ipsum is simply dummy text of the
                                                          printing and typesetting industry. lorem
                                                          Ipsum has been the industry's for a long
                                                          standard dummy text ever since.</p>
                                                  </div>
                                                  <div  className="dual-rate row">
                                                      <div  className="col-6 dual-rate-left">
                                                          <p>Open Signals: <span>20</span></p>
                                                      </div>
                                                      <div  className="col-6 dual-rate-right">
                                                          <p>Success Rate: <span>68%</span></p>
                                                      </div>
                                                  </div>
                                                  <div  className="report-wrap">
                                                      <a href="#"  className="report">View Report</a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div  className="grid">
                                          <div  className="grid-inner">
                                              <div  className="grid-img">
                                                  <div  className="bordered-img">
                                                      <img src= {require("../../img/group-3.png")}/>
                                                  </div>
                                              </div>
                                              <div  className="grid-content">
                                                  <h3  className="grid-ttl">Sales Retargeting</h3>
                                                  <div  className="static-text">
                                                      <p>Lorem Ipsum is simply dummy text of the
                                                          printing and typesetting industry. lorem
                                                          Ipsum has been the industry's for a long
                                                          standard dummy text ever since.</p>
                                                  </div>
                                                  <div  className="dual-rate row">
                                                      <div  className="col-6 dual-rate-left">
                                                          <p>Open Signals: <span>20</span></p>
                                                      </div>
                                                      <div  className="col-6 dual-rate-right">
                                                          <p>Success Rate: <span>68%</span></p>
                                                      </div>
                                                  </div>
                                                  <div  className="report-wrap">
                                                      <a href="#"  className="report">View Report</a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div  className="grid">
                                          <div  className="grid-inner">
                                              <div  className="grid-img">
                                                  <div  className="bordered-img">
                                                      <img src={require("../../img/group-4.png")}/>
                                                  </div>
                                              </div>
                                              <div  className="grid-content">
                                                  <h3  className="grid-ttl">Trade Management</h3>
                                                  <div  className="static-text">
                                                      <p>Lorem Ipsum is simply dummy text of the
                                                          printing and typesetting industry. lorem
                                                          Ipsum has been the industry's for a long
                                                          standard dummy text ever since.</p>
                                                  </div>
                                                  <div  className="dual-rate row">
                                                      <div  className="col-6 dual-rate-left">
                                                          <p>Open Signals: <span>20</span></p>
                                                      </div>
                                                      <div  className="col-6 dual-rate-right">
                                                          <p>Success Rate: <span>68%</span></p>
                                                      </div>
                                                  </div>
                                                  <div  className="report-wrap">
                                                      <a href="#"  className="report">View Report</a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}