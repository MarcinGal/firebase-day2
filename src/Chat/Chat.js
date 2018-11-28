import React from 'react'
import NewMessageForm from './NewMessageForm'
import { database } from 'firebase';

class Chat extends React.Component {
    state = {
        newMessageText: ''
    }

    onNewMessageTextChangeHandler = (event) =>
        (
            this.setState({ newMessageText: event.target.value })
        )

    onNewMessageTextClickHandler = () => {
        database.ref('/chat').push({
        text: this.state.newMessageText,
        timestamp: Date.now()
    })
    this.setState({ newMessageText: '' })
}
    render() {
        return (
            <div>
                <NewMessageForm
                    newMessageText={this.state.newMessageText}
                    onNewMessageTextChangeHandler={this.onNewMessageTextChangeHandler}
                    onNewMessageTextClickHandler={this.onNewMessageTextClickHandler}
                />
            </div>
        )
    }
}

export default Chat