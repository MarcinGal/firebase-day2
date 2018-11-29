import React from 'react'
import NewMessageForm from './NewMessageForm'
import { database } from '../firebaseConfig'
import { mapObjectToArray } from '../utils'
import MessagesList from './MessagesList'



const dbMessages = database.ref('/chat')

class Chat extends React.Component {
    state = {
        newMessageText: '',
        messages: []
    }

    componentDidMount() {
        dbMessages.on(
            'value',
            snapshot => this.setState({
                messages: mapObjectToArray(snapshot.val()).reverse(),
                newMessageText: ''
            })
        )
    }

    componentWillUnmount() {
        dbMessages.off()
    }

    onNewMessageTextChangeHandler = event => this.setState({ newMessageText: event.target.value })

    onNewMessageTextClickHandler = event => {
        event.preventDefault()

        dbMessages.push({
            text: this.state.newMessageText,
            timestamp: Date.now()
        })
    }

    onDeleteMessageClickHandler = messageKey => {
        dbMessages.child(messageKey)
        .remove()
    }

    render() {
        return (
            <div>
                <NewMessageForm
                    newMessageText={this.state.newMessageText}
                    onNewMessageTextChangeHandler={this.onNewMessageTextChangeHandler}
                    onNewMessageTextClickHandler={this.onNewMessageTextClickHandler}
                />
               <MessagesList
               messages={this.state.messages}
               onDeleteMessageClickHandler={this.onDeleteMessageClickHandler}
               />
            </div>
        )
    }
}

export default Chat