import React from 'react'
import NewMessageForm from './NewMessageForm'
import { database } from '../firebaseConfig'
import { mapObjectToArray } from '../utils'
const dbMessages = database.ref('/chat')

class Chat extends React.Component {
    state = {
        newMessageText: 'krowa',
        messages: []
    }


    onNewMessageTextChangeHandler = event => this.setState({ newMessageText: event.target.value })

    componentDidMount() {
        dbMessages.on(
            'value',
            snapshot => console.log(mapObjectToArray(snapshot.val()))
        )
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