import React, { Component } from 'react'

export default class UserGreetings extends Component {
    constructor(props) {
        super(props)

        this.state = {
            uisLoggedin: true
        }
    }
    render() {

        return (
            <div>
                {this.state.uisLoggedin ?
                    <div>Welcome Tushar</div> : <div>Welcome Guest</div>
                }

            </div>
        )
    }
}
