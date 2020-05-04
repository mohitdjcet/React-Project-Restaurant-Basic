import React from 'react';

export default class ChildComponent extends React.PureComponent {
    render() {
        return (
            <div>
                <h1>{this.props.data.unit}</h1>
                <button onClick={()=>this.props.data.changeUnit1('Child data')}>Change Me</button>
                <button onClick={()=>this.props.data.greetHandler('Child')}>alert Me</button>
            </div>
        )
    }
}