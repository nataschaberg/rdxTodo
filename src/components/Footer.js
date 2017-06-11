import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Link } from "react-router"
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE, SHOW_FULLSCREEN } from '../constants/TodoFilters'

const FILTER_TITLES = {
    [SHOW_ALL]: 'All',
    [SHOW_ACTIVE]: 'Active',
    [SHOW_COMPLETED]: 'Completed',
    [SHOW_FULLSCREEN]: "Fullscreen"
}

export default class Footer extends Component {
    static propTypes = {
        completedCount: PropTypes.number.isRequired,
        activeCount: PropTypes.number.isRequired,
        filter: PropTypes.string.isRequired,
        onClearCompleted: PropTypes.func.isRequired,
        onShow: PropTypes.func.isRequired
    }

    renderTodoCount() {
        const { activeCount } = this.props
        const itemWord = activeCount === 1 ? 'item' : 'items'
        return (
            <span className="todo-count">
                <strong>{activeCount || 'No'}</strong> {itemWord} left
            </span>
        )
    }


    renderFilterLink(filter) {
        const title = FILTER_TITLES[filter]
        const { filter: selectedFilter, onShow } = this.props

        if(title === "Fullscreen") {
            return (
                <Link to="/fullscreen" className={classnames({ selected: filter === selectedFilter })}
                    style={{ cursor: 'pointer' }}
                    onClick={() => onShow(filter)}>
                    {title}
                </Link>
            )
        } else {
            return (
                <a className={classnames({ selected: filter === selectedFilter })}
                    style={{ cursor: 'pointer' }}
                    onClick={() => onShow(filter)}>
                    {title}
                </a>
            )
        }
    }

    renderClearButton() {
        const { completedCount, onClearCompleted } = this.props
        if (completedCount > 0) {
            return (
                <button className="clear-completed"
                    onClick={onClearCompleted} >
                    Clear completed
                </button>
            )
        }
    }

    render() {
        return (
            <footer className="footer">
                {this.renderTodoCount()}
                <ul className="filters">
                    {[ SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED, SHOW_FULLSCREEN ].map(filter =>
                        <li key={filter}>
                            {this.renderFilterLink(filter)}
                        </li>
                    )}
                </ul>
                {this.renderClearButton()}
            </footer>
        )
    }
}
