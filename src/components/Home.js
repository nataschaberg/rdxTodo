import React, { Component } from "react"
import Header from '../components/Header'
import MainSection from '../components/MainSection'

export default class Home extends Component {

    render() {
        return(
            <div>
                <Header addTodo={this.props.addTodo} />
                <MainSection todos={this.props.todos} actions={this.props.actions} />
            </div>
        )
    }
}
