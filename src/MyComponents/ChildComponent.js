import React, { Component } from 'react'

export default class ChildComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            childName: '',
            parentName: ''
        }
    }
    child_name_handler = (e) => {
        this.setState({
            childName: e.target.value
        })
    }
    parent_name_handler = (e) => {
        this.setState({
            parentName: e.target.value
        })
    }
    render() {
        return (
            <div>
                <h1>from</h1>
                <input type="text" placeholder='Child-Name' value={this.state.childName} onChange={(e) => this.child_name_handler(e)} />
                <h1>To</h1>
                <input type="text" placeholder='Parent-Name' value={this.state.parentName} onChange={(e) => this.parent_name_handler(e)} />
                <button onClick={() => this.props.geet_parent(this.state.childName, this.state.parentName)}>Greet parent</button>
            </div>
        )
    }
}
