import React from 'react';

export default class ApiFetch extends React.PureComponent {
    state = {
        users: null
    }
    componentDidMount() {
        fetch('https://reqres.in/api/users').then((resp) => {
            resp.json().then((result) => {
                console.log(result.data)
                this.setState({
                    users: result.data
                })
            })
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.users ?
                        this.state.users.map((item, i) =>
                            <div key={item.id}><p>{item.first_name} {item.last_name} {item.email}<img src={item.avatar} alt='' /></p></div>
                        )
                        :
                        null
                }
                
            </div>
        );
    }
}
