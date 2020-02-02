import React, { Component } from 'react';

export default class InputForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    const { name, number } = this.state;
    this.checkedDoubleInput(name)
      ? alert(`${name} есть в телефонной книге!`)
      : this.props.onAddContacts(name, number);
    e.preventDefault();

    this.setState({ name: '', number: '' });
  };

  handleChangeData = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  checkedDoubleInput = name => {
    return this.props.contacts.find(contact => contact.name === name);
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <h3>Name:</h3>
          <input value={name} name="name" onChange={this.handleChangeData} />
          <h3>Phone number: </h3>
          <input
            value={number}
            name="number"
            onChange={this.handleChangeData}
          />
          <br />
          <button type="submit">Add contact</button>
          <br />
        </label>
      </form>
    );
  }
}
