import React, { Component } from 'react'

export default class EventBinding extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "hello"
        }
        // this.change_message = this.change_message.bind(this)
    }
    // change_message() {
    //     this.setState(previousMessage => ({
    //         message: "message_changed"
    //     }))
    // }

    // below method to bind a method is best using arrow function
    change_message = () => {
        this.setState(previousMessage => ({
            message: "kya_zindgi_thi_re"
        }))
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.change_message.bind(this)}>Event</button> */}
                {/* <button onClick={() => this.change_message()}>Event</button> */}
                <button onClick={this.change_message}>Event</button>



            </div>
        )
    }
}
