import React, { Component } from 'react'

export default class SetState extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    increment() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }
    decriment() {
        this.setState(prevState => ({
            count: prevState.count - 1
        }))
    }
    render() {
        return (
            <div>
                <button onClick={() => this.increment()}>
                    +
                </button>
                <div>
                    Count = {this.state.count}
                </div>
                <button onClick={() => this.decriment()}>
                    -
                </button>
            </div>
        )
    }
}
