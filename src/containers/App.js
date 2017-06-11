import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TodoActions from '../actions'


class App extends Component {
    render() {
        const children = React.cloneElement(this.props.children, {
                    addTodo: this.props.actions.addTodo,
                    todos: this.props.todos,
                    actions: this.props.actions
                }
            )

        return(
            <div>
                {children}
            </div>
        )
    }
}



App.propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
