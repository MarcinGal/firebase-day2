import React from 'react';

class Counter extends React.Component {

    state = {
        number: this.props.startValue
    }

    incHandler = () => {
        if (this.state.number >= this.props.max) return
        this.setState({ number: this.state.number + 1 })
    }

    decHandler = () => {
        if (this.state.number <= this.props.min) return

        this.setState({ number: this.state.number - 1 })
    }

    render() {
        return (
            <div>
                <h2>{this.state.number}</h2>
                <button
                    onClick={this.incHandler}
                >+</button>
                <button
                    onClick={this.decHandler}
                >-</button>
            </div>

        )
    }
}

Counter.defaultProps = {
    startValue: 0
}

export default Counter