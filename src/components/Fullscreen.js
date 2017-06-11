import React, { Component } from "react"
import { Link } from "react-router"
import TodoItem from './TodoItem'

export default class Fullscreen extends Component {
    render() {
        const todos = this.props.todos.sort((a, b) => {
            return b.priority - a.priority
        })
        const filteredTodos = todos.filter(todo => {
            return !todo.completed
        })

        return(
            <div>
                <h1>my plan</h1>
                <div className="filters" style={{margin:10,textAlign:"right"}}>
                    <li style={{zIndex:999}}><Link to="/">Go back</Link></li>
                </div>
                <div style={{height:30}}></div>
                <div className="new-todo">
                    <ul className="todo-list">
                        {filteredTodos.map(todo =>
                            <TodoItem key={todo.id} todo={todo} {...this.props.actions} />
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}
