import React from 'react'

export default class JSXComponents extends React.PureComponent {
    render() {
        return (
            // <div>
            // xyz
            // </div>
            React.createElement('div',null,'xyz')
        )
    }
}