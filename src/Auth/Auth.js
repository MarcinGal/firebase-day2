import React from 'react'
import Forms from './Forms'

class Auth extends React.Component {
    state = {
        email: '',
        password: '',
        isUserLoggedIn: false
    }

    onNewLoginTextChangeHandler = event => this.setState({ email: event.target.value })
    onNewPasswordTextChangeHandler = event => this.setState({ password: event.target.value })


    onLogInClick = () => {}
    onLogInGoogleClick = () => {}
    render() {
        return (
            this.state.isUserLoggedIn ?
            this.props.children
            :
                <Forms
                    email={this.state.email}
                    onNewLoginTextChangeHandler={this.onNewLoginTextChangeHandler}
                    password={this.state.password}
                    onNewPasswordTextChangeHandler={this.onNewPasswordTextChangeHandler}
                    onLogInClick={this.onLogInClick}
                    onLogInGoogleClick={this.onLogInGoogleClick}
                />
        )
    }

}

export default Auth