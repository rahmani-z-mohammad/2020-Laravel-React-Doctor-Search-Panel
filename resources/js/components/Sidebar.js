import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Sidebar extends Component {

  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  render() {
    const loginRegLink = (
      <div>
        
      </div>
    )

    const userLink = (
       <div>
      <div className="app-header1 header py-1 d-flex">
      <div className="container-fluid">
        <div className="d-flex">
          <a className="header-brand" href="index.html">
            <img src="../assets/images/brand/logo1.png" className="header-brand-img" alt="Pinlist logo" />
          </a>
          <a aria-label="Hide Sidebar" className="app-sidebar__toggle" data-toggle="sidebar" href="#" />
          <div className="header-navicon">
            <a href="#" data-toggle="search" className="nav-link d-lg-none navsearch-icon">
              <i className="fa fa-search" />
            </a>
          </div>
          <div className="header-navsearch">
            <a href="#" className=" " />
            <form className="form-inline mr-auto">
              <div className="nav-search">
                <input type="search" className="form-control header-search" placeholder="Search…" aria-label="Search" />
                <button className="btn btn-primary" type="submit"><i className="fa fa-search" /></button>
              </div>
            </form>
          </div>
          <div className="d-flex order-lg-2 mr-auto">
            <div className="dropdown d-none d-md-flex">
              <a className="nav-link icon full-screen-link">
                <i className="fe fe-maximize floating" id="fullscreen-button" />
              </a>
            </div>
            <div className="dropdown d-none d-md-flex country-selector">
              <a href="#" className="d-flex nav-link leading-none" data-toggle="dropdown">
                <img src="../assets/images/us_flag.jpg" alt="img" className="avatar avatar-xs ml-1 align-self-center" />
                <div>
                  <strong className="text-dark">English</strong>
                </div>
              </a>
              <div className="language-width dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                <a href="#" className="dropdown-item d-flex pb-3">
                  <img src="../assets/images/french_flag.jpg" alt="flag-img" className="avatar  ml-3 align-self-center" />
                  <div>
                    <strong>French</strong>
                  </div>
                </a>
                <a href="#" className="dropdown-item d-flex pb-3">
                  <img src="../assets/images/germany_flag.jpg" alt="flag-img" className="avatar  ml-3 align-self-center" />
                  <div>
                    <strong>Germany</strong>
                  </div>
                </a>
                <a href="#" className="dropdown-item d-flex pb-3">
                  <img src="../assets/images/italy_flag.jpg" alt="flag-img" className="avatar  ml-3 align-self-center" />
                  <div>
                    <strong>Italy</strong>
                  </div>
                </a>
                <a href="#" className="dropdown-item d-flex pb-3">
                  <img src="../assets/images/russia_flag.jpg" alt="flag-img" className="avatar  ml-3 align-self-center" />
                  <div>
                    <strong>Russia</strong>
                  </div>
                </a>
                <a href="#" className="dropdown-item d-flex pb-3">
                  <img src="../assets/images/spain_flag.jpg" alt="flag-img" className="avatar  ml-3 align-self-center" />
                  <div>
                    <strong>Spain</strong>
                  </div>
                </a>
              </div>
            </div>
            <div className="dropdown d-none d-md-flex">
              <a className="nav-link icon" data-toggle="dropdown">
                <i className="fa fa-bell-o" />
                <span className=" nav-unread badge badge-danger  badge-pill">4</span>
              </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                <a href="#" className="dropdown-item text-center">You have 4 notification</a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item d-flex pb-3">
                  <div className="notifyimg">
                    <i className="fa fa-envelope-o" />
                  </div>
                  <div>
                    <strong>2 new Messages</strong>
                    <div className="small text-muted">17:50 Pm</div>
                  </div>
                </a>
                <a href="#" className="dropdown-item d-flex pb-3">
                  <div className="notifyimg">
                    <i className="fa fa-calendar" />
                  </div>
                  <div>
                    <strong> 1 Event Soon</strong>
                    <div className="small text-muted">19-10-2019</div>
                  </div>
                </a>
                <a href="#" className="dropdown-item d-flex pb-3">
                  <div className="notifyimg">
                    <i className="fa fa-comment-o" />
                  </div>
                  <div>
                    <strong> 3 new Comments</strong>
                    <div className="small text-muted">05:34 Am</div>
                  </div>
                </a>
                <a href="#" className="dropdown-item d-flex pb-3">
                  <div className="notifyimg">
                    <i className="fa fa-exclamation-triangle" />
                  </div>
                  <div>
                    <strong> Application Error</strong>
                    <div className="small text-muted">13:45 Pm</div>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item text-center">See all Notification</a>
              </div>
            </div>
            <div className="dropdown d-none d-md-flex">
              <a className="nav-link icon" data-toggle="dropdown">
                <i className="fa fa-envelope-o " />
                <span className=" nav-unread badge badge-warning  badge-pill">3</span>
              </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                <a href="#" className="dropdown-item d-flex pb-3">
                  <img src="../assets/images/faces/male/41.jpg" alt="avatar-img" className="avatar brround ml-3 align-self-center" />
                  <div>
                    <strong>Blake</strong> I've finished it! See you so.......
                    <div className="small text-muted">30 mins ago</div>
                  </div>
                </a>
                <a href="#" className="dropdown-item d-flex pb-3">
                  <img src="../assets/images/faces/female/1.jpg" alt="avatar-img" className="avatar brround ml-3 align-self-center" />
                  <div>
                    <strong>Caroline</strong> Just see the my Admin....
                    <div className="small text-muted">12 mins ago</div>
                  </div>
                </a>
                <a href="#" className="dropdown-item d-flex pb-3">
                  <img src="../assets/images/faces/male/18.jpg" alt="avatar-img" className="avatar brround ml-3 align-self-center" />
                  <div>
                    <strong>Jonathan</strong> Hi! I'am singer......
                    <div className="small text-muted">1 hour ago</div>
                  </div>
                </a>
                <a href="#" className="dropdown-item d-flex pb-3">
                  <img src="../assets/images/faces/female/18.jpg" alt="avatar-img" className="avatar brround ml-3 align-self-center" />
                  <div>
                    <strong>Emily</strong> Just a reminder that you have.....
                    <div className="small text-muted">45 mins ago</div>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item text-center">View all Messages</a>
              </div>
            </div>
            <div className="dropdown d-none d-md-flex">
              <a className="nav-link icon" data-toggle="dropdown">
                <i className="fe fe-grid" />
              </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow  app-selector">
                <ul className="drop-icon-wrap">
                  <li>
                    <a href="#" className="drop-icon-item">
                      <i className="si si-envelope text-dark" />
                      <span className="block"> E-mail</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="drop-icon-item">
                      <i className="si si-map text-dark" />
                      <span className="block">map</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="drop-icon-item">
                      <i className="si si-bubbles text-dark" />
                      <span className="block">Messages</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="drop-icon-item">
                      <i className="si si-user-follow text-dark" />
                      <span className="block">Followers</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="drop-icon-item">
                      <i className="si si-picture text-dark" />
                      <span className="block">Photos</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="drop-icon-item">
                      <i className="si si-settings text-dark" />
                      <span className="block">Settings</span>
                    </a>
                  </li>
                </ul>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item text-center">View all</a>
              </div>
            </div>
            <div className="dropdown ">
              <a href="#" className="nav-link pr-0 leading-none user-img" data-toggle="dropdown">
                <img src="../assets/images/faces/male/25.jpg" alt="profile-img" className="avatar avatar-md brround" />
              </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow ">
                <a className="dropdown-item" href="profile.html">
                  <i className="dropdown-icon si si-user" /> My Profile
                </a>
                <a className="dropdown-item" href="emailservices.html">
                  <i className="dropdown-icon si si-envelope" /> Inbox
                </a>
                <a className="dropdown-item" href="editprofile.html">
                  <i className="dropdown-icon  si si-settings" /> Account Settings
                </a>
                <a className="dropdown-item" href="" onClick={this.logOut.bind(this)}>
                  <i className="dropdown-icon si si-power" /> Log out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Sidebar menu*/}
    <div className="app-sidebar__overlay" data-toggle="sidebar" />
    <aside className="app-sidebar doc-sidebar">
      <div className="app-sidebar__user clearfix">
        <div className="dropdown user-pro-body">
          <div>
            <img src="../assets/images/faces/male/25.jpg" alt="user-img" className="avatar avatar-lg brround" />
            <a href="editprofile.html" className="profile-img">
              <span className="fa fa-pencil" aria-hidden="true" />
            </a>
          </div>
          <div className="user-info">
            <h2>Rubin Carmody</h2>
            <span>Web Designer</span>
          </div>
        </div>
      </div>
      <ul className="side-menu">
        <li className="slide">
          <a className="side-menu__item" data-toggle="slide" href="#"><i className="side-menu__icon fa fa-tachometer" /><span className="side-menu__label">Dashboard</span><i className="angle fa fa-angle-left" /></a>
          <ul className="slide-menu">
            <li><a className="slide-item" href="index.html">Dashboard 1</a></li>
            <li><a className="slide-item" href="index2.html">Dashboard 2</a></li>
            <li><a className="slide-item" href="index3.html">Dashboard 3</a></li>
            <li><a className="slide-item" href="index4.html">Dashboard 4</a></li>
            <li><a className="slide-item" href="index5.html">Dashboard 5</a></li>
          </ul>
        </li>
        <li className="slide">
          <a className="side-menu__item" data-toggle="slide" href="#"><i className="side-menu__icon fa fa-cogs" /><span className="side-menu__label">Admin settings</span><i className="angle fa fa-angle-left" /></a>
          <ul className="slide-menu">
            <li><a className="slide-item" href="admin-pricing.html">Admin Pricing</a></li>
            <li><a className="slide-item" href="Ads.html">Ads List</a></li>
            <li><a className="slide-item" href="comments.html">Comments</a></li>
            <li><a className="slide-item" href="email-users.html">Email-Users</a></li>
            <li><a className="slide-item" href="media-gallery.html">Media Gallery</a></li>
            <li><a className="slide-item" href="newad.html">New Ad</a></li>
            <li><a className="slide-item" href="newuser.html">New User</a></li>
            <li><a className="slide-item" href="favourite-ads.html">Favourite-Ads</a></li>
            <li><a className="slide-item" href="payment-orders.html">Payment Orders</a></li>
            <li><a className="slide-item" href="payments-adpacks.html">Payment Adpacks</a></li>
            <li><a className="slide-item" href="payment-settings.html">Payment Settings</a></li>
            <li><a className="slide-item" href="payments-membership.html">Payment Membership</a></li>
            <li><a className="slide-item" href="profile-admin.html">Profile Admin</a></li>
            <li><a className="slide-item" href="settings.html">Settings</a></li>
            <li><a className="slide-item" href="users-all.html">All Users</a></li>
          </ul>
        </li>
        <li className="slide">
          <a className="side-menu__item" data-toggle="slide" href="#"><i className="side-menu__icon fa fa-rocket" /><span className="side-menu__label">Apps</span><i className="angle fa fa-angle-left" /></a>
          <ul className="slide-menu">
            <li>
              <a href="cards.html" className="slide-item">Cards design</a>
            </li>
            <li>
              <a href="chat.html" className="slide-item">Default Chat</a>
            </li>
            <li>
              <a href="notify.html" className="slide-item">Notifications</a>
            </li>
            <li>
              <a href="email.html" className="slide-item">Email</a>
            </li>
            <li>
              <a href="emailservices.html" className="slide-item">Email Inbox</a>
            </li>
            <li>
              <a href="sweetalert.html" className="slide-item">Sweet alerts</a>
            </li>
            <li>
              <a href="rangeslider.html" className="slide-item">Range slider</a>
            </li>
            <li>
              <a href="scroll.html" className="slide-item">Content Scroll bar</a>
            </li>
            <li>
              <a href="counters.html" className="slide-item">Counters</a>
            </li>
            <li>
              <a href="loaders.html" className="slide-item">Loaders</a>
            </li>
            <li>
              <a href="time-line.html" className="slide-item">Time Line</a>
            </li>
            <li>
              <a href="rating.html" className="slide-item">Rating </a>
            </li>
            <li>
              <a href="users-list.html" className="slide-item">User List</a>
            </li>
            <li>
              <a href="search.html" className="slide-item">Search page</a>
            </li>
            <li>
              <a href="crypto-currencies.html" className="slide-item">Crypto-currencies</a>
            </li>
          </ul>
        </li>
        <li>
          <a className="side-menu__item" href="widgets.html"><i className="side-menu__icon fa fa-window-restore" /><span className="side-menu__label">Widget</span></a>
        </li>
        <li className="slide">
          <a className="side-menu__item" data-toggle="slide" href="#"><i className="side-menu__icon fa fa-calendar" /><span className="side-menu__label">Calendar</span><i className="angle fa fa-angle-left" /></a>
          <ul className="slide-menu">
            <li>
              <a href="calendar.html" className="slide-item">Default calendar</a>
            </li>
            <li>
              <a href="calendar2.html" className="slide-item">Full calendar</a>
            </li>
          </ul>
        </li>
        <li className="slide">
          <a className="side-menu__item" data-toggle="slide" href="#"><i className="side-menu__icon fa fa-bar-chart" /><span className="side-menu__label">Charts</span><i className="angle fa fa-angle-left" /></a>
          <ul className="slide-menu">
            <li>
              <a href="chart-chartist.html" className="slide-item">Chartjs Charts </a>
            </li>
            <li>
              <a href="chart-dygraph.html" className="slide-item">Dygraph Charts</a>
            </li>
            <li>
              <a href="chart-echart.html" className="slide-item">Echart Charts</a>
            </li>
            <li>
              <a href="chart-flot.html" className="slide-item">Flot Charts</a>
            </li>
            <li>
              <a href="chart-nvd3.html" className="slide-item">Nvd3 Charts</a>
            </li>
            <li>
              <a href="sparklinechart.html" className="slide-item">Sparkline Chart</a>
            </li>
            <li>
              <a href="chart-morris.html" className="slide-item">Morris Charts</a>
            </li>
            <li>
              <a href="charts.html" className="slide-item">C3 Bar Charts</a>
            </li>
            <li>
              <a href="chart-line.html" className="slide-item">C3 Line Charts</a>
            </li>
            <li>
              <a href="chart-donut.html" className="slide-item">C3 Donut Charts</a>
            </li>
            <li>
              <a href="chart-pie.html" className="slide-item">C3 Pie charts</a>
            </li>
          </ul>
        </li>
        <li className="slide">
          <a className="side-menu__item" data-toggle="slide" href="#"><i className="side-menu__icon fa fa-cubes" /><span className="side-menu__label"> Elements</span><i className="angle fa fa-angle-left" /></a>
          <ul className="slide-menu">
            <li>
              <a href="alerts.html" className="slide-item">Alerts</a>
            </li>
            <li>
              <a href="buttons.html" className="slide-item">Buttons</a>
            </li>
            <li>
              <a href="colors.html" className="slide-item">Colors</a>
            </li>
            <li>
              <a href="avatars.html" className="slide-item">Avatar-Square</a>
            </li>
            <li>
              <a href="avatar-round.html" className="slide-item">Avatar-Rounded</a>
            </li>
            <li>
              <a href="avatar-radius.html" className="slide-item">Avatar-Radius</a>
            </li>
            <li>
              <a href="dropdown.html" className="slide-item">Drop downs</a>
            </li>
            <li>
              <a href="thumbnails.html" className="slide-item">Thumbnails</a>
            </li>
            <li>
              <a href="mediaobject.html" className="slide-item">Media Object</a>
            </li>
            <li>
              <a href="list.html" className="slide-item">List</a>
            </li>
            <li>
              <a href="tags.html" className="slide-item">Tags</a>
            </li>
            <li>
              <a href="pagination.html" className="slide-item">Pagination</a>
            </li>
            <li>
              <a href="navigation.html" className="slide-item">Navigation</a>
            </li>
            <li>
              <a href="typography.html" className="slide-item">Typography</a>
            </li>
            <li>
              <a href="breadcrumbs.html" className="slide-item">Breadcrumbs</a>
            </li>
            <li>
              <a href="badge.html" className="slide-item">Badges</a>
            </li>
            <li>
              <a href="jumbotron.html" className="slide-item">Jumbotron</a>
            </li>
            <li>
              <a href="panels.html" className="slide-item">Panels</a>
            </li>
            <li>
              <a href="modal.html" className="slide-item">Modal</a>
            </li>
            <li>
              <a href="tooltipandpopover.html" className="slide-item">Tooltip and popover</a>
            </li>
            <li>
              <a href="progress.html" className="slide-item">Progress</a>
            </li>
            <li>
              <a href="carousel.html" className="slide-item">Carousels</a>
            </li>
            <li>
              <a href="Accordion.html" className="slide-item">Accordions</a>
            </li>
            <li>
              <a href="tabs.html" className="slide-item">Tabs</a>
            </li>
            <li>
              <a href="headers.html" className="slide-item">Headers</a>
            </li>
            <li>
              <a href="footers.html" className="slide-item">Footers</a>
            </li>
          </ul>
        </li>
        <li className="slide">
          <a className="side-menu__item" data-toggle="slide" href="#"><i className="side-menu__icon fa fa-th-large" /><span className="side-menu__label">Forms</span><i className="angle fa fa-angle-left" /></a>
          <ul className="slide-menu">
            <li>
              <a href="form-elements.html" className="slide-item">Form Elements</a>
            </li>
            <li>
              <a href="form-wizard.html" className="slide-item">Form-wizard Elements</a>
            </li>
            <li>
              <a href="wysiwyag.html" className="slide-item">Text Editor</a>
            </li>
          </ul>
        </li>
        <li className="slide">
          <a className="side-menu__item" data-toggle="slide" href="#"><i className="side-menu__icon fa fa-table" /><span className="side-menu__label">Tables</span><i className="angle fa fa-angle-left" /></a>
          <ul className="slide-menu">
            <li>
              <a href="tables.html" className="slide-item">Default table</a>
            </li>
            <li>
              <a href="datatable.html" className="slide-item">Data Table</a>
            </li>
          </ul>
        </li>
        <li>
          <a className="side-menu__item" href="maps.html"><i className="side-menu__icon fa fa-map-marker" /><span className="side-menu__label"> Maps</span></a>
        </li>
        <li className="slide">
          <a className="side-menu__item" data-toggle="slide" href="#"><i className="side-menu__icon fa fa-codepen" /><span className="side-menu__label">Icons</span><i className="angle fa fa-angle-left" /></a>
          <ul className="slide-menu">
            <li>
              <a href="icons.html" className="slide-item">Font Awesome</a>
            </li>
            <li>
              <a href="icons2.html" className="slide-item">Material Design Icons</a>
            </li>
            <li>
              <a href="icons3.html" className="slide-item">Simple Line Iocns</a>
            </li>
            <li>
              <a href="icons4.html" className="slide-item">Feather Icons</a>
            </li>
            <li>
              <a href="icons5.html" className="slide-item">Ionic Icons</a>
            </li>
            <li>
              <a href="icons6.html" className="slide-item">Flag Icons</a>
            </li>
            <li>
              <a href="icons7.html" className="slide-item">pe7 Icons</a>
            </li>
            <li>
              <a href="icons8.html" className="slide-item">Themify Icons</a>
            </li>
            <li>
              <a href="icons9.html" className="slide-item">Typicons Icons</a>
            </li>
            <li>
              <a href="icons10.html" className="slide-item">Weather Icons</a>
            </li>
          </ul>
        </li>
        <li className="slide">
          <a className="side-menu__item" data-toggle="slide" href="#"><i className="side-menu__icon fa fa-database" /><span className="side-menu__label">Pages</span><i className="angle fa fa-angle-left" /></a>
          <ul className="slide-menu">
            <li>
              <a href="profile.html" className="slide-item">Profile</a>
            </li>
            <li>
              <a href="editprofile.html" className="slide-item">Edit Profile</a>
            </li>
            <li>
              <a href="gallery.html" className="slide-item">Gallery</a>
            </li>
            <li>
              <a href="about.html" className="slide-item">About Company</a>
            </li>
            <li>
              <a href="company-history.html" className="slide-item">Company History</a>
            </li>
            <li>
              <a href="services.html" className="slide-item">Services</a>
            </li>
            <li>
              <a href="faq.html" className="slide-item">FAQS</a>
            </li>
            <li>
              <a href="terms.html" className="slide-item">Terms and Conditions</a>
            </li>
            <li>
              <a href="empty.html" className="slide-item">Empty Page</a>
            </li>
            <li>
              <a href="construction.html" className="slide-item">Under Construction</a>
            </li>
            <li>
              <a href="blog.html" className="slide-item">Blog</a>
            </li>
            <li>
              <a href="invoice.html" className="slide-item">Invoice</a>
            </li>
            <li>
              <a href="pricing.html" className="slide-item">Pricing Tables</a>
            </li>
          </ul>
        </li>
        <li className="slide">
          <a className="side-menu__item" data-toggle="slide" href="#"><i className="side-menu__icon fa fa-shopping-cart" /><span className="side-menu__label">E-commerce</span><i className="angle fa fa-angle-left" /></a>
          <ul className="slide-menu">
            <li>
              <a href="shop.html" className="slide-item">Products</a>
            </li>
            <li>
              <a href="shop-des.html" className="slide-item">Product Details</a>
            </li>
            <li>
              <a href="cart.html" className="slide-item">Shopping Cart</a>
            </li>
          </ul>
        </li>
        <li className="slide">
          <a className="side-menu__item" data-toggle="slide" href="#"><i className="side-menu__icon fa fa-chain-broken" /><span className="side-menu__label">Custom  Pages</span><i className="angle fa fa-angle-left" /></a>
          <ul className="slide-menu">
            <li>
              <a href="login.html" className="slide-item">Login</a>
            </li>
            <li>
              <a href="register.html" className="slide-item">Register</a>
            </li>
            <li>
              <a href="forgot-password.html" className="slide-item">Forgot password</a>
            </li>
            <li>
              <a href="lockscreen.html" className="slide-item">Lock screen</a>
            </li>
          </ul>
        </li>
        <li className="slide">
          <a className="side-menu__item" data-toggle="slide" href="#"><i className="side-menu__icon fa fa-diamond" /><span className="side-menu__label">Error pages</span><i className="angle fa fa-angle-left" /></a>
          <ul className="slide-menu">
            <li>
              <a href="400.html" className="slide-item">400 Error</a>
            </li>
            <li>
              <a href="401.html" className="slide-item">401 Error</a>
            </li>
            <li>
              <a href="403.html" className="slide-item">403 Error</a>
            </li>
            <li>
              <a href="404.html" className="slide-item">404 Error</a>
            </li>
            <li>
              <a href="500.html" className="slide-item">500 Error</a>
            </li>
            <li>
              <a href="503.html" className="slide-item">503 Error</a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="app-sidebar-footer">
        <a href="emailservices.html">
          <span className="fa fa-envelope" aria-hidden="true" />
        </a>
        <a href="profile.html">
          <span className="fa fa-user" aria-hidden="true" />
        </a>
        <a href="editprofile.html">
          <span className="fa fa-cog" aria-hidden="true" />
        </a>
        <a href="login.html">
          <span className="fa fa-sign-in" aria-hidden="true" />
        </a>
        <a href="chat.html">
          <span className="fa fa-comment" aria-hidden="true" />
        </a>
      </div>
    </aside>
     </div>
    )
    return (
      <div>
      {localStorage.usertoken ? userLink : loginRegLink}
      </div>
    )
  }
}


export default withRouter(Sidebar)