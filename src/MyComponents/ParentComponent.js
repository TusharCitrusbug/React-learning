import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
export default class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    greetingParent = (c, p) => {
        console.log(`from ${c} greeted to ${p}`);
    }
    render() {
        return (
            <div>
                <ChildComponent geet_parent={this.greetingParent}></ChildComponent>
            </div>
        )
    }
}
