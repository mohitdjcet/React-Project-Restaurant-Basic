import React from 'react';

export default class UserUnmount extends React.PureComponent {
    componentWillUnmount() {
        alert('user has been deleted')
    }
    render() {
        return (
            <div>
                <ul>
                    <li>XYZ</li>
                    <li>ABC</li>
                    <li>sdf</li>
                </ul>
            </div>
        )
    }
}