import React from 'react'
import NewMessageForm from './NewMessageForm'
import { database } from '../firebaseConfig'

const dbMessages = database.ref('/chat')

class Chat extends React.Component {
    state = {
        newMessageText: 'krowa',
        messages: []
    }




    render() {
        return (
            <div>
                <NewMessageForm
                    newMessageText={this.state.newMessageText}
                    onNewMessageTextChangeHandler={this.onNewMessageTextChangeHandler}
                    onNewMessageTextClickHandler={this.onNewMessageTextClickHandler}
                />
                {
                    this.state.messages.map(message => (
                        <div
                            key={message.key}
                        >
                            {message.text}
                        </div >
                    ))
                }
            </div>
        )
    }
}

export default Chat