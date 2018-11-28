import React from 'react';
import { database } from './firebaseConfig'

class Counter extends React.Component {

    state = {
        number: 0
    }

    componentDidMount() {
        database.ref('/counter').on(
            'value',
            snapshot => this.setState({ number: snapshot.val() })
        )
    }

    incHandler = () => this.setState({ number: this.state.number + 1 })
    decHandler = () => this.setState({ number: this.state.number - 1 })

    render() {
        return (
            <div>
                <h2>{this.state.number}</h2>
                <button onClick={this.incHandler}>+</button>
                <button onClick={this.decHandler}>-</button>
            </div>
        )
    }
}

export default Counter