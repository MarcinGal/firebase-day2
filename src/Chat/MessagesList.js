import React from 'react'
import { List, ListItem } from 'material-ui/List'
import moment from 'moment'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui/svg-icons/action/delete'

const MessagesList = (props) => (
    <List
        style={{
            padding: 20,
            width: '90%'
        }}
    >
        {
            props.messages.map(message => (
                <ListItem
                    primaryText={message.text}
                    secondaryText={moment(message.timestamp).format('DD-MM-YYYY hh:mm')}
                    key={message.key}
                    rightIconButton={
                        <IconButton
                            onClick={() => props.onDeleteMessageClickHandler(message.key)}
                        >
                            <DeleteIcon />
                        </IconButton>
                    }
                >
                </ListItem>
            ))
        }
    </List>
)

export default MessagesList