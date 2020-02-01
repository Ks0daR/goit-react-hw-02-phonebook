import React, { Component } from 'react';
import Layout from './Layout';
import Contacts from './Contacts';
import uuid from 'uuid/v4';
// import { number } from 'prop-types';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, this.createContact(name, number)],
      };
    });
    this.setState({ name: '', number: '' });
  };

  createContact = (name, number) => {
    return {
      id: uuid(),
      contact: name,
      number: number,
    };
  };

  handleChangeData = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { name, contacts, number } = this.state;
    return (
      <Layout>
        <h2>Phonebook</h2>
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
          </label>
        </form>
        <h2>Contacts</h2>
        <Contacts elements={contacts} />
      </Layout>
    );
  }
}
