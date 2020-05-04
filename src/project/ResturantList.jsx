import React from 'react';
import '../App.css';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import NavBar1 from './NavBar1'

export default class ResturantList extends React.PureComponent {
    state = {
        list: null
    }
    componentDidMount() {
        this.refresh()
    }

    refresh = () => {
        fetch('http://localhost:8000/resturant').then((resp) => {
            resp.json().then((data) => {
                // console.log(data)
                this.setState({
                    list: data
                })
            })
        })
    }
    delete = (key) => {
        // console.log(key)
        fetch('http://localhost:8000/resturant/' + key, {
            method: 'DELETE',
            // headers: {
            //     'Content-Type': 'application/json'
            // },
            body: JSON.stringify(this.state)
        }).then((resp) => {
            resp.json().then((result) => {
                // console.log(result)
                alert('Resturant has been Deleted')
                this.refresh()
            })
        })
    }
    render() {
        return (
            <div>
                <NavBar1 />
                {
                    this.state.list ?
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                        <th>Rating</th>
                                        <th>Operation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.list.map((item, i) =>
                                            <tr key={i}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.Address}</td>
                                                <td>{item.Rating}</td>
                                                <td><Link to={'/update/' + item.id}><FontAwesomeIcon icon={faEdit} color='orange' /></Link>
                                                    <span onClick={() => this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color='red' /></span>
                                                    {/* onClick={this.deleteHandler.bind(this, item.id) */}
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>
                        :
                        <p>Please Wait ...</p>
                }
            </div>
        );
    }
}