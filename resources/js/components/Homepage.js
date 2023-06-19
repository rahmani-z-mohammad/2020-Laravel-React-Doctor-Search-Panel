import React, { Component } from 'react'

class Homepage extends Component {
  render() {
    return (
        <div>
        <div className="app-content  my-3 my-md-5">
          <div className="side-app">
            <div className="page-header">
              <h4 className="page-title">Dashboard 01</h4>
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                <li className="breadcrumb-item active" aria-current="page">Dashboard 01</li>
              </ol>
            </div>
            <div className="row ">
              <div className="col-xl-3 col-lg-6 col-md-12">
                <div className="card">
                  <div className="card-body text-center">
                    <h5>Live Ads</h5>
                    <h2 className="counter">834</h2>
                    <a href="#" className="btn btn-outline-primary btn-sm">View More</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-12 ">
                <div className="card">
                  <div className="card-body text-center">
                    <h5>Pending Ads</h5>
                    <h2 className="counter"> 238</h2>
                    <a href="#" className="btn btn-outline-warning btn-sm">View More</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-12 ">
                <div className="card">
                  <div className="card-body text-center">
                    <h5>Sold Ads</h5>
                    <h2 className="counter">562</h2>
                    <a href="#" className="btn btn-outline-success btn-sm">View More</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-12">
                <div className="card">
                  <div className="card-body text-center">
                    <h5>Expired Ads</h5>
                    <h2 className="counter">198</h2>
                    <a href="#" className="btn btn-outline-danger btn-sm">View More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-8 col-lg-6 col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Last Year Overview</h3>
                  </div>
                  <div className="card-body">
                    <div id="echart2" className="chartmorris overflow-hidden" />
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">See What's Trending</h3>
                  </div>
                  <div className="card-body">
                    <div className>
                      <div className="media meida-md mt-0">
                        <div className="media-left">
                          <a href="#">
                            <img className="media-object ml-2 br-2" src="../assets/images/products/products/b2.jpg" alt="media1" />
                          </a>
                        </div>
                        <div className="media-body">
                          <h6 className="media-heading text-uppercase">More Beauty Products </h6>
                          <p className="text-muted mb-0">At vero eos et accusamus et iusto   blanditiis praesentium </p>
                        </div>
                      </div>
                      <div className="media meida-md ">
                        <div className="media-left">
                          <a href="#">
                            <img className="media-object ml-2 br-2" src="../assets/images/products/products/j2.jpg" alt="media1" />
                          </a>
                        </div>
                        <div className="media-body">
                          <h6 className="media-heading   text-uppercase">More Business Ads </h6>
                          <p className="text-muted mb-0">Accusamus et iusto odio dignissimos  blanditiis praesentium </p>
                        </div>
                      </div>
                      <div className="media meida-md ">
                        <div className="media-left">
                          <a href="#">
                            <img className="media-object ml-2 br-2" src="../assets/images/products/products/v3.jpg" alt="media1" />
                          </a>
                        </div>
                        <div className="media-body">
                          <h6 className="media-heading text-uppercase">Very easy to Buy  a Car </h6>
                          <p className="text-muted mb-0">At accusamus et iusto odio dignissimos ducimus </p>
                        </div>
                      </div>
                      <div className="media meida-md ">
                        <div className="media-left">
                          <a href="#">
                            <img className="media-object ml-2 br-2" src="../assets/images/products/products/f2.jpg" alt="media1" />
                          </a>
                        </div>
                        <div className="media-body">
                          <h6 className="media-heading   text-uppercase">More Ads for Classifieds </h6>
                          <p className="text-muted mb-0">At vero eos et accusamus et iusto odio dignissimos ducimus </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-8 col-lg-7 col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">User List</h3>
                  </div>
                  <div className="user-table">
                    <div className="table-responsive ">
                      <table className="table card-table  table-hover table-vcenter text-nowrap">
                        <thead>
                          <tr>
                            <th>User</th>
                            <th>Email</th>
                            <th>Register</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="ml-3"><img className="avatar avatar-md brround " src="../assets/images/faces/female/6.jpg" alt="avatar-img" /></div>
                                <div className>
                                  <h5 className="mb-0 mt-2 font-weight-semibold">Hanna Gover</h5>
                                  <p className="text-muted mb-0">Gover@han</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="text-danger">hannagover@gmail.com</a>
                            </td>
                            <td className="font-weight-semibold">14-11-2019</td>
                            <td>
                              <div className="btn-group mt-2 mb-2">
                                <button type="button" className="btn btn-primary btn-sm dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                  More<span className="caret" />
                                </button>
                                <ul className="dropdown-menu" role="menu" x-placement="bottom-start">
                                  <li><a href="#">View</a></li>
                                  <li><a href="#">Mail</a></li>
                                  <li><a href="#">Contact</a></li>
                                  <li><a href="#">More</a></li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="ml-3"><img className="avatar avatar-md brround " src="../assets/images/faces/male/6.jpg" alt="avatar-img" /></div>
                                <div className>
                                  <h5 className="mb-0 mt-2 font-weight-semibold">Daniel Kristeen</h5>
                                  <p className="text-muted mb-0">kristeengoo</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="text-danger">danielkristeen@gmail.com</a>
                            </td>
                            <td className="font-weight-semibold">21-10-2019</td>
                            <td>
                              <div className="btn-group mt-2 mb-2">
                                <button type="button" className="btn btn-primary btn-sm  dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                  More<span className="caret" />
                                </button>
                                <ul className="dropdown-menu" role="menu" x-placement="bottom-start">
                                  <li><a href="#">View</a></li>
                                  <li><a href="#">Mail</a></li>
                                  <li><a href="#">Contact</a></li>
                                  <li><a href="#">More</a></li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="ml-3"><img className="avatar avatar-md brround " src="../assets/images/faces/female/4.jpg" alt="avatar-img" /></div>
                                <div className>
                                  <h5 className="mb-0 mt-2 font-weight-semibold">Jan Petrovic</h5>
                                  <p className="text-muted mb-0">petrovicqw</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="text-danger">janpetrovic@gmail.com</a>
                            </td>
                            <td className="font-weight-semibold">02-10-2019</td>
                            <td>
                              <div className="btn-group mt-2 mb-2">
                                <button type="button" className="btn btn-primary btn-sm  dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                  More <span className="caret" />
                                </button>
                                <ul className="dropdown-menu" role="menu" x-placement="top-start">
                                  <li><a href="#">View</a></li>
                                  <li><a href="#">Mail</a></li>
                                  <li><a href="#">Contact</a></li>
                                  <li><a href="#">More</a></li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="ml-3"><img className="avatar avatar-md brround " src="../assets/images/faces/male/4.jpg" alt="avatar-img" /></div>
                                <div className>
                                  <h5 className="mb-0 mt-2 font-weight-semibold">Leo Amy</h5>
                                  <p className="text-muted mb-0">leo345</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="text-danger">leoamy@gmail.com</a>
                            </td>
                            <td className="font-weight-semibold">28-09-2019</td>
                            <td>
                              <div className="btn-group mt-2 mb-2">
                                <button type="button" className="btn btn-primary btn-sm  dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                  More <span className="caret" />
                                </button>
                                <ul className="dropdown-menu " role="menu" x-placement="top-start">
                                  <li><a href="#">View</a></li>
                                  <li><a href="#">Mail</a></li>
                                  <li><a href="#">Contact</a></li>
                                  <li><a href="#">More</a></li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Customer Satisfaction</h3>
                  </div>
                  <div className="card-body">
                    <div className="chats-wrap">
                      <div className="chat-details p-2">
                        <h6 className="mb-0">
                          <span className="font-weight-normal">Good</span>
                          <span className="float-left  p-1">78%</span>
                        </h6>
                        <div className="progress progress-md mt-3">
                          <div className="progress-bar progress-bar-striped progress-bar-animated bg-success w-35" />
                        </div>
                      </div>
                      <div className="chat-details p-2">
                        <h6 className="mb-0">
                          <span className="font-weight-normal">Satisfied</span>
                          <span className="float-left  p-1">82%</span>
                        </h6>
                        <div className="progress progress-md mt-3">
                          <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary w-75" />
                        </div>
                      </div>
                      <div className="chat-details p-2">
                        <h6 className="mb-0">
                          <span className="font-weight-normal">Excellent</span>
                          <span className="float-left  p-1">89%</span>
                        </h6>
                        <div className="progress progress-md mt-3">
                          <div className="progress-bar progress-bar-striped progress-bar-animated bg-pink w-65" />
                        </div>
                      </div>
                      <div className="chat-details p-2">
                        <h6 className="mb-0">
                          <span className="font-weight-normal">Average</span>
                          <span className="float-left  p-1">40%</span>
                        </h6>
                        <div className="progress progress-md mt-3">
                          <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning w-80" />
                        </div>
                      </div>
                      <div className="chat-details p-2">
                        <h6 className="mb-0">
                          <span className="font-weight-normal">Unsatisfied</span>
                          <span className="float-left  p-1">20%</span>
                        </h6>
                        <div className="progress progress-md mt-3">
                          <div className="progress-bar progress-bar-striped progress-bar-animated bg-info w-80" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-12 col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Todo List</h3>
                    <div className="card-options">
                      <a className="btn btn-sm btn-primary " href="#"><i className="fa fa-plus" /> Add Task</a>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="custom-controls-stacked checklist-task">
                      <label className="custom-control custom-checkbox mb-3 checklist-desc">
                        <input type="checkbox" className="custom-control-input" name="example-checkbox1" defaultValue="option1" defaultChecked />
                        <span className="custom-control-label">vero eos et accusamus et iusto odio dignissimos ducimus</span>
                        <div className="check-data d-flex mt-1">
                          <span className="text-muted">Completed 2h ago</span>
                          <div className="check-icon mr-auto">
                            <span className="text-muted" data-toggle="tooltip" data-placement="top" data-original-title="Edit"><i className="fa fa-pencil-square-o " /> </span>
                            <span className="text-muted" data-toggle="tooltip" data-placement="top" data-original-title="Delete"><i className="fa fa-trash-o" /></span>
                          </div>
                        </div>
                      </label>
                      <label className="custom-control custom-checkbox mb-3 checklist-desc">
                        <input type="checkbox" className="custom-control-input" name="example-checkbox2" defaultValue="option2" />
                        <span className="custom-control-label"> et iusto odio dignissimos ducimus</span>
                        <div className="check-data d-flex mt-1">
                          <span className="text-muted">Completed 8h ago</span>
                          <div className="check-icon mr-auto">
                            <span className="text-muted" data-toggle="tooltip" data-placement="top" data-original-title="Edit"><i className="fa fa-pencil-square-o " /> </span>
                            <span className="text-muted" data-toggle="tooltip" data-placement="top" data-original-title="Delete"><i className="fa fa-trash-o" /></span>
                          </div>
                        </div>
                      </label>
                      <label className="custom-control custom-checkbox mb-3 checklist-desc">
                        <input type="checkbox" className="custom-control-input" name="example-checkbox3" defaultValue="option3" defaultChecked />
                        <span className="custom-control-label"> eos  accusamus  iusto odio dignissimos </span>
                        <div className="check-data d-flex mt-1">
                          <span className="text-muted">Completed 4h ago</span>
                          <div className="check-icon mr-auto">
                            <span className="text-muted" data-toggle="tooltip" data-placement="top" data-original-title="Edit"><i className="fa fa-pencil-square-o " /> </span>
                            <span className="text-muted" data-toggle="tooltip" data-placement="top" data-original-title="Delete"><i className="fa fa-trash-o" /></span>
                          </div>
                        </div>
                      </label>
                      <label className="custom-control custom-checkbox checklist-desc">
                        <input type="checkbox" className="custom-control-input" name="example-checkbox4" defaultValue="option4" />
                        <span className="custom-control-label">vet accusamus et iusto odio dignissimos </span>
                        <div className="check-data d-flex mt-1">
                          <span className="text-muted">Completed 5h ago</span>
                          <div className="check-icon mr-auto">
                            <span className="text-muted" data-toggle="tooltip" data-placement="top" data-original-title="Edit"><i className="fa fa-pencil-square-o " /> </span>
                            <span className="text-muted" data-toggle="tooltip" data-placement="top" data-original-title="Delete"><i className="fa fa-trash-o" /></span>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-12 col-md-12">
                <div className="card">
                  <div className="arrow-ribbon bg-danger">sale</div>
                  <div className="item-card7-img">
                    <div className="item-card7-imgs">
                      <a href="realestate.html" />
                      <img src="../assets/images/products/products/h1.jpg" alt="img" className="cover-image" />
                    </div>
                    <div className="item-card7-overlaytext">
                      <a href="realestate.html" className="text-white"> Real Estate</a>
                      <h4 className="font-weight-semibold mb-0">$389</h4>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="item-card7-desc">
                      <a href="realestate.html" className="text-dark"><h4 className="font-weight-semibold">Apartments</h4></a>
                    </div>
                    <div className="item-card7-text">
                      <ul className="icon-card mb-0">
                        <li className><a href="#" className="icons"><i className="si si-location-pin text-muted ml-1" />  Los Angles</a></li>
                        <li><a href="#" className="icons"><i className="si si-event text-muted ml-1" /> 5 hours ago</a></li>
                        <li className="mb-0"><a href="#" className="icons"><i className="si si-user text-muted ml-1" /> Sally Peake</a></li>
                        <li className="mb-0"><a href="#" className="icons"><i className="si si-phone text-muted mr-1" /> 567 9876 087</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-12 col-md-12">
                <div className="card">
                  <div className="ribbon ribbon-top-left text-danger"><span className="bg-danger">featured</span></div>
                  <div className="item-card7-img">
                    <div className="item-card7-imgs">
                      <a href="jobs.html" />
                      <img src="../assets/images/products/products/j2.jpg" alt="img" className="cover-image" />
                    </div>
                    <div className="item-card7-overlaytext">
                      <a href="jobs.html" className="text-white"> Jobs</a>
                      <h4 className="font-weight-semibold mb-0">$854</h4>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="item-card7-desc">
                      <a href="jobs.html" className="text-dark"><h4 className="font-weight-semibold">Hair dresser-Beauticia</h4></a>
                    </div>
                    <div className="item-card7-text">
                      <ul className="icon-card mb-0">
                        <li className><a href="#" className="icons"><i className="si si-location-pin text-muted ml-1" />  Los Angles</a></li>
                        <li><a href="#" className="icons"><i className="si si-event text-muted ml-1" /> 5 hours ago</a></li>
                        <li className="mb-0"><a href="#" className="icons"><i className="si si-user text-muted ml-1" /> Sally Peake</a></li>
                        <li className="mb-0"><a href="#" className="icons"><i className="si si-briefcase text-muted ml-1" />Beauty Span</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>

    )
  }
}

export default Homepage
