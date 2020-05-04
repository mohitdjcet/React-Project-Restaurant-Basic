import React from 'react'

export default class BindingComponent extends React.PureComponent {
    // constructor(props){
    //     super(props)
    //     this.handelClick=this.handelClick.bind(this)
    // }
    state={
        name:'Mohit'
    }
    handelClick=()=>{
        this.setState({
            name:"Anand"
        })
        console.log(this)
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                {/* <button onClick={this.handelClick.bind(this)}>Change Me</button> */}
                {/* <button onClick={()=>this.handelClick()}>Change Me</button> */}
                {/* <button onClick={this.handelClick}>Change Me</button> */}
                <button onClick={this.handelClick}>Change Me</button>
            </div>
        )
    }
}