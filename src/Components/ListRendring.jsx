import React from 'react'

export default class ListRendring extends React.PureComponent {
    state = {
        list: [
            { name: 'Mohit', email: 'mohit@gmail.com', phone: '123456789' },
            { name: 'Nitin', email: 'mohit@gmail.com', phone: '123456789' },
            { name: 'Rohit', email: 'mohit@gmail.com', phone: '123456789' },
            { name: 'sfsdf', email: 'mohit@gmail.com', phone: '123456789' }
        ]
    }
    render() {
        return (
            <div>
                <h1>List Rendring</h1>
                {
                    this.state.list.map((item) => 
                    // {
                    //     return(
                    //     <div><span>Name:{item.name} Email: {item.email} Phone: {item.phone}</span></div>
                    //     )
                    // }
                          <div>
                              <span>Name:{item.name} Email: {item.email} Phone: {item.phone}</span>
                          </div>
                    )
                }
            </div>
        )
    }
}