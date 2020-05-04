import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

class Head extends React.PureComponent {
    render() {
        return (
            <div>
                {/* <h1>My name is {this.props.name}</h1> */}
                <h1 onClick={() => { this.props.changeName('Rohit') }}>My name is {this.props.name}</h1>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        ...store
    }
}

const changeName = (name) => {
    return {
        type: 'CHANGE_NAME',
        Payload: name
    }
}

const mapDispathToProps = (dispatch) => {
    return bindActionCreators({
        // changeName: changeName
        
        changeName
    }, dispatch)
}

export default connect(mapStateToProps, mapDispathToProps)(Head);