import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        //Using Short-circuit operator
        return (this.state.isLoggedIn && <div>Welcome tushar</div>)

        //Using Ternary operator
        // return (
        //     this.state.isLoggedIn ?
        //         (<div>Welcome Tushar</div>)
        //         :
        //         (<div>Welcome Guest</div>)
        // )

        //Using Element variables
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Tushar</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }

        // return (
        //     <div>{message}</div>
        // )


        // Using if else
        // if (this.state.isLoggedIn) {
        //     return <div>Welcome Tushar</div>
        // } else {
        //     return <div>Welcome Guest</div>
        // }

        // return (
        //     <div>
        //         <div>
        //             Welcome Tushar
        //     </div>
        //         <div>
        //             Welcome Guest
        //     </div>
        //     </div>
        // )
    }
}

export default UserGreeting
