import React, { Component } from 'react'
import { login } from './UserFunctions'

export default class Login extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(res => {
            if (res) {
                this.props.history.push(`/home`)
            }
        })
    }

    render() {
        return (
            <div>

            {/*Page*/}
            <br/> <br/> <br/> <br/>
            <div className="page ">
            <div className="page-content z-index-10">
                <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-md-12 col-md-12 d-block mx-auto">
                    <div className="card mb-0">
                        <div className="card-header">
                        <h3 className="card-title">Login to your Account</h3>
                        </div>
                        <div className="card-body">
                        <form noValidate onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label className="form-label text-dark">Email address</label>
                            <input type="email" name="email" className="form-control" placeholder="Enter email" 
                            value={this.state.email}
                            onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label text-dark">Password</label>
                            <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                            value={this.state.password}
                            onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label className="custom-control custom-checkbox">
                            <a href="forgot-password.html" className="float-right small text-dark mt-1">I forgot password</a>
                            <input type="checkbox" className="custom-control-input" />
                            <span className="custom-control-label text-dark">Remember me</span>
                            </label>
                        </div>
                        <div className="form-footer mt-2">
                            <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                        </div>
                        <div className="text-center  mt-3 text-dark">
                            Don't have account yet? <a href="register.html">SignUp</a>
                        </div>
                        </form>    
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
