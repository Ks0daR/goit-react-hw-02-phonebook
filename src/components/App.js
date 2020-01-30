import React, { Component } from 'react';
import Layout from './Layout';
import Contacts from './Contacts';
import uuid from 'uuid/v4';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(prevState => {
      return {
        contacts: {
          id: uuid(),
          contact: this.state.name,
        },
      };
    });
    this.setState({ name: '' });
  };

  handleChangeName = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    const { name, contacts } = this.state;
    return (
      <Layout>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            <h3>Name:</h3>
            <input value={name} onChange={this.handleChangeName} />
            <button type="submit">Add contact</button>
          </label>
        </form>
        <h2>Contacts</h2>
        <Contacts elements={contacts} />
      </Layout>
    );
  }
}
