import React from 'react';
import NavBar1 from './NavBar1'

export default class ResturantCreate extends React.PureComponent {
    state = {
        name: null,
        email: null,
        Rating: null,
        Address: null
    }
    create = () => {
        fetch('http://localhost:8000/resturant', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((resp) => {
            resp.json().then((result) => {
                // console.log(result)
                alert('Resturant has been Added')
            })
        })
    }
    render() {
        return (
            <div>
                <NavBar1 />
                <h1>Resturant Create</h1>
                <div>
                    <input placeholder='Resturant Name' onChange={(e)=> this.setState({name:e.target.value})} /><br /><br />
                    <input placeholder='Resturant Email' onChange={(e)=> this.setState({email:e.target.value})} /><br /><br />
                    <input placeholder='Resturant Rating' onChange={(e)=> this.setState({Rating:e.target.value})} /><br /><br />
                    <input placeholder='Resturant Address' onChange={(e)=> this.setState({Address:e.target.value})} /><br /><br />
                    <button onClick={this.create}>Add Resturant</button>
                </div>
            </div>
        );
    }
}