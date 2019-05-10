import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { SignInUser } from '../redux/Actions'
import Footer from './Footer'

class SignIn extends React.Component {
    state = {
        valueName: '',
        valuePass: ''
    }

    handleChange = (evt) => {
        let val = evt.target.value
        this.setState({
            valueName: val
        })
    }

    handleChange2 = (evt) => {
        let val = evt.target.value
        this.setState({
            valuePass: val
        })
    }

    handleClick = (evt) => {
        if (this.state.valueName === '') {
            alert('Enter a UserName')
            evt.preventDefault();
            return;
        } else if (this.state.valuePass === '') {
            alert('Enter a Password')
            evt.preventDefault();
            return;
        }
        let name = this.state.valueName
        this.props.SignInUser(name)
    }

    render() {
        return (
            <div className='SignIn'>
                <div className='ui raised card cardSignIn'>
                    <div className='headerHolder'>
                        <div className='ui huge header'>e-commerce</div>
                    </div>
                    <div className='box'>
                        <div className='ui input'>
                            <input value={this.state.valueName} onChange={this.handleChange} placeholder='Username here...' />
                        </div>
                        <div className='ui input'>
                            <input value={this.state.valuePass} onChange={this.handleChange2} type='password' placeholder='PassWord here...' />
                        </div>
                        <Link onClick={this.handleClick} to='/home'>
                            <div className='ui green button large'>Sign In</div>
                        </Link>
                    </div>
                </div>
                <Footer className='footer ui menu fluid'/>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return { userName: state.userName }

}

export default connect(mapStateToProps, { SignInUser })(SignIn)