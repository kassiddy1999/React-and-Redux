import React, { Component } from 'react'

export default class AddNInja extends Component {
    state = {
        name : null,
        belt : null,
        age : null
    }
    // get the input
    handleChange = (e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })

    }
    // when form is submitted
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNinja(this.state);
    }
    render() {
        return (
            <div>
                <form onSubmit = { this.handleSubmit }>
                <label htmlFor = "name">Name:</label>
                <input type = "text" id = "name" onChange={ this.handleChange }/>
                <label htmlFor = "name">Belt:</label>
                <input type = "text" id = "belt" onChange={ this.handleChange }/>
                <label htmlFor = "name">Age:</label>
                <input type = "text" id = "age" onChange={ this.handleChange }/>
                <button>Submit</button>
                </form>
            </div>
        )
    }
}
