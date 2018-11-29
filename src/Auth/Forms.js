import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


const Forms = (props) => (
    <div>
        <TextField
            name="email"
            type='email'
            value={props.email}
            onChange={props.onNewLoginTextChangeHandler}
            fullWidth={true}
        />

        <TextField
            name="password"
            type='password'
            value={props.password}
            onChange={props.onNewPasswordTextChangeHandler}
            fullWidth={true}

        />

        <RaisedButton
            label={'Button1'}
            primary={true}
            onClick={props.onLogInClick}
        />


        <RaisedButton
            label={' Button2'}
            secondary={true}
            onClick={props.onLogInGoogleClick}
        />
    </div>
)

export default Forms