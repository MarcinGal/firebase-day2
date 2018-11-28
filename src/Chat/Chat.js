import React from 'react'
import NewMessageForm from './NewMessageForm'
import { database } from '../firebaseConfig'

const dbMessages = database.ref('/chat')

class Chat extends React.Component {
    state = {
        newMessageText: '',
        messages: []
    }

    c

    componentDidMount() {
        dbMessages.on(
            'value',
            snapshot => {
                const messages = Object.entries(
                    snapshot.val()
                ).map((entry) => ({
                    ...entry[1],
                    key: entry[0]
                })
                )
                this.setState({ messages: messages})
            }
        )
    }

    componentWillUnmount() {
        dbMessages.off()
    }

    onNewMessageTextChangeHandler = (event) =>
        (
            this.setState({ newMessageText: event.target.value })
        )

    onNewMessageTextClickHandler = () => {
        dbMessages.push({
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