import React from 'react'
import { auth, googleProvider } from '../firebaseConfig'
import Forms from './Forms'
import FloatingActionButton from 'material-ui/FloatingActionButton'

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

    onLogInGoogleClick = () => {
        auth.signInWithPopup(googleProvider)
    }

    onLogOutClickHandler = () => {
        auth.signOut()
    }

    render() {
        return (
            this.state.isUserLoggedIn ?
                <div>
                    <FloatingActionButton
                        style={{
                            position: 'fixed',
                            top: 10,
                            right: 10,
                            zIndex: 10,
                            color: 'white'
                        }}
                        primary={true}
                        onClick={this.onLogOutClickHandler}
                    >
                        X
                    </FloatingActionButton>
                    {this.props.children}
                </div >
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