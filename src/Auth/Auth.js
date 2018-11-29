import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class Auth extends React.Component {
    state = {
        newLoginText: '',
        newPasswordText: ''
    }

    onNewLoginTextChangeHandler = event => this.setState({ newLoginText: event.target.value })
    onNewPasswordTextChangeHandler = event => this.setState({ newPasswordText: event.target.value })


    render() {
        return (
            <div>
                <TextField
                    value={this.state.newLoginText}
                    onChange={this.onNewLoginTextChangeHandler}
                    fullWidth={true}
                />

                <TextField
                    type='password'
                    value={this.state.newPasswordText}
                    onChange={this.onNewPasswordTextChangeHandler}
                    fullWidth={true}

                />

                <RaisedButton
                    label={'Button1'}
                    onClick={() => alert('placuszki-1')}
                />


                <RaisedButton
                    label={' Button2'}
                    onClick={() => alert('placuszki-2')}
                />

            </div>
        )
    }

}

export default Auth