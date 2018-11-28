import React from 'react';

class Counter extends React.Component {

    state = {
        number: 0
    }

    incHandler = () => this.setState({ number: this.state.number + 1 })
    decHandler = () => this.setState({ number: this.state.number - 1 })

    saveToFirebase = () => {
        fetch(
            'https://poniedzialek-ee614.firebaseio.com/counter.json',
            {
                method: 'PUT',
                body: JSON.stringify(this.state.number)
            }
        )
    }

    getFromFireBase = () => {
        fetch(
            'https://poniedzialek-ee614.firebaseio.com/counter.json'
        )
            .then(r => r.json())
            .then(data => this.setState({ number: data}))
    }

    componentDidMount() {
        this.getFromFireBase()
    }

    componentDidUpdate() {
        this.saveToFirebase()
    }

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