import React from 'react';

export default class Forms extends React.PureComponent {
    state = {
        userName: '',
        comment: '',
        topic: 'react'
    }
    handelUserNameChange = (event) => {
        this.setState({
            userName: event.target.value
        })
        console.log(event)
    }
    handelCommentChange = (event) => {
        this.setState({
            comment: event.target.value
        })
        console.log(event)
    }
    handelTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
        console.log(event)
    }
    handelSubmit = (e) => {
        alert(`${this.state.userName} , ${this.state.comment}, ${this.state.topic}`)
        e.preventDefault()
    }
    render() {
        const { userName, comment, topic } = this.state
        return (
            <form onSubmit={this.handelSubmit}>
                <div>
                    <label>User Name</label>
                    <input type='text' value={userName} onChange={this.handelUserNameChange} />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={comment} onChange={this.handelCommentChange} />
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handelTopicChange}>
                        <option value='react'> React</option>
                        <option value='angular'> Anguler</option>
                        <option value='vue'> Vue</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        );
    }
}
