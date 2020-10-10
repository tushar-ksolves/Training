import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegularComponent from './RegularComponent'

class ParentComp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Tushar'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Tushar'
            })
        }, 2000)
    }

    render() {
        console.log('Parent Comp Render')
        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name} />
                {/* <RegularComponent name={this.state.name} /> */}
                {/* <PureComp name={this.state.name} /> */}
            </div>
        )
    }
}

export default ParentComp
