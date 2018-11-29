import React from 'react'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const NewMessageForm = (props) => (
    <Paper
        style={{
            position: 'fixed',
            bottom: 0,
            padding: 20,
            width: '100%',
            zIndex: 3
        }}
    >
        < TextField
            type="text"
            value={props.newMessageText}
            onChange={props.onNewMessageTextChangeHandler}
            fullWidth={true}
        />
        < RaisedButton
            label={'Add new message'}
            primary={true}
            onClick={props.onNewMessageTextClickHandler}
            fullWidth={true}
        />
    </Paper>
)

export default NewMessageForm