import React from 'react';
import NavBar1 from './NavBar1'

export default class ResturantUpdate extends React.PureComponent {
    state = {
        name: '',
        email: '',
        Address: '',
        Rating: '',
        id: ''
    }
    componentDidMount() {
        // console.log(this.props)
        fetch('http://localhost:8000/resturant/' + this.props.match.params.id).then((resp) => {
            resp.json().then((data) => {
                // console.log(data)
                this.setState({
                    name: data.name,
                    email: data.email,
                    Address: data.Address,
                    Rating: data.Rating,
                    id: data.id
                })
            })
        })
    }
    update=()=>{
        fetch('http://localhost:8000/resturant/'+this.state.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((resp) => {
            resp.json().then((result) => {
                // console.log(result)
                alert('Resturant has been Updated')
            })
        })
    }
    render() {
        return (
            <div>
                <NavBar1 />
                <h1> Resturant Update </h1>
                <div>
                    <input placeholder='Resturant Name' onChange={(e) => this.setState({ name: e.target.value })} value={this.state.name} /><br /><br />
                    <input placeholder='Resturant Email' onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} /><br /><br />
                    <input placeholder='Resturant Rating' onChange={(e) => this.setState({ Rating: e.target.value })} value={this.state.Rating} /><br /><br />
                    <input placeholder='Resturant Address' onChange={(e) => this.setState({ Address: e.target.value })} value={this.state.Address} /><br /><br />
                    <button onClick={this.update}>Update Resturant</button>
                </div>
            </div>
        );
    }
}