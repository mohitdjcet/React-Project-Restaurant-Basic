import React from 'react'

export default class StateComponents extends React.PureComponent {
    // constructor(){
    //     super();
    //     this.state={
    //         name:'mohit',
    // age:42
    //     }
    // }
    state = {
        name: 'Nitin',
        age: 42,
        class: null
    }
    render() {
        return (
            <div>
                {this.state.name}{this.state.age}
            </div>
        )
    }
}