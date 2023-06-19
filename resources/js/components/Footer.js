import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Footer extends Component {
    render() {
        const loginRegLink = (
        <div>
            
        </div>
        )

        const userLink = (
            <div>
                {/*footer*/}
                <footer className="footer">
                <div className="container">
                    <div className="row align-items-center flex-row-reverse">
                    <div className="col-md-12 col-sm-12 mt-3 mt-lg-0 text-center">
                        Copyright © 2019 <a href="#">Pinlist</a>. Designed by <a href="#">Spruko</a> All rights reserved.
                    </div>
                    </div>
                </div>
                </footer>
                {/* End Footer*/}
            </div>
        )

        return (
        <div>
            {localStorage.usertoken ? userLink : loginRegLink}
        </div>
        
        )
    }
}

export default withRouter(Footer)
