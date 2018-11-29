import React from 'react'
import { auth } from '../firebaseConfig'
import Forms from './Forms'

class Auth extends React.Component {
    state = {
        email: '',
        password: '',
        isUserLoggedIn: false
    }

    componentDidMount() {
        auth.onAuthStateChanged(
            user => {
                if (user) {
                    this.setState({ isUserLoggedIn: true })
                } else {
                    this.setState({ isUserLoggedIn: false })
                }
            }
        )
    }

    onNewLoginTextChangeHandler = event => this.setState({ email: event.target.value })
    onNewPasswordTextChangeHandler = event => this.setState({ password: event.target.value })

    onLogInClick = () => {
        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch(error => {
                alert('Something went wrong. Check your console to see error details.')
            })
    }

    onLogInGoogleClick = () => { }

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