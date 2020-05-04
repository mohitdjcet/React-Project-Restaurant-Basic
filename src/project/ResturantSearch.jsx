import React from 'react';
import { Table, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import NavBar1 from './NavBar1'

export default class RestaurantsSearch extends React.PureComponent {
    state = {
        searchData: null,
        noDataFound: false,
        lastSearch: ''
    }
    search = (e) => {
        this.setState({
            lastSearch: e.target.value
        })
        // let key = e.target.value
        // this.setState({
        //     lastSearch: key
        // })
        fetch('http://localhost:8000/resturant?q=' + e.target.value).then((resp) => {
            resp.json().then((result) => {
                // console.log('result', result)
                if (result.length > 0) {
                    this.setState({
                        searchData: result,
                        noDataFound: false
                    })
                }
                else {
                    this.setState({
                        noDataFound: true,
                        searchData: null
                    })
                }

            })
        })
    }
    deleteHandler = (id) => {
        fetch('http://localhost:8000/resturant/' + id, {
            method: 'DELETE',
            // headers: {
            //     'Content-type': 'application/json'
            // },
            body: JSON.stringify(this.state)
        }).then((resp) => {
            resp.json().then((result) => {
                // console.log(result);
                alert('Resturant has been Deleted')
                this.search({
                    target: {
                        value: this.state.lastSearch
                    }
                })
            })
        })
    }
    render() {
        return (
            <Container>
                <NavBar1 />
                <h1>Restaurants Search</h1>
                <Form.Control type="text" placeholder="Search" onChange={this.search} />
                <div>
                    {
                        this.state.searchData ?
                            <div>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Rating</th>
                                            <th>Email</th>
                                            <th>Location</th>
                                            <th>Operation</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.searchData.map((item, i) => {
                                                return (
                                                    // <div key={i} className='search-div'>{item.name}</div>
                                                    <tr key={i}>
                                                        <td>{item.id}</td>
                                                        <td>{item.name}</td>
                                                        <td>{item.Rating}</td>
                                                        <td>{item.email}</td>
                                                        <td>{item.Address}</td>
                                                        <td><Link to={'/update/' + item.id}><FontAwesomeIcon icon={faEdit} /></Link>
                                                            <span onClick={this.deleteHandler.bind(this, item.id)}><FontAwesomeIcon icon={faTrash} color='red' /></span>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </div>
                            :
                            ''
                    }
                    {
                        this.state.noDataFound ?
                            <h3>No Data Found</h3> : null
                    }
                </div>
            </Container>
        );
    }
}
