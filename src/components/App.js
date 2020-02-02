import React, { Component } from 'react';
import Layout from './Layout';
import InputForm from './InputForm';
import Contacts from './Contacts';
import FilterForm from './FilterForm';
import createContact from './utils/createContact';

export default class App extends Component {
  state = {
    contacts: [],
    searchQuery: '',
  };

  addContacts = (name, number) =>
    this.setState(prevState => ({
      contacts: [...prevState.contacts, createContact(name, number)],
    }));

  handleSearchQuery = ({ target: { value } }) => {
    this.setState({ searchQuery: value });
  };

  filteredContacts = () => {
    const { searchQuery, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  };

  removeContacts = contactId => {
    console.log(contactId);
    this.setState(state => {
      return { contacts: state.contacts.filter(contact => contact.id !== contactId) };
    });
  };

  render() {
    const { contacts, searchQuery } = this.state;
    const visibleContacts = this.filteredContacts();
    return (
      <Layout>
        <h1>Phonebook</h1>
        <InputForm onAddContacts={this.addContacts} contacts={contacts} />

        <h2>Contacts</h2>
        {contacts.length > 1 && (
          <FilterForm
            onSearchQuery={this.handleSearchQuery}
            filterValue={searchQuery}
          />
        )}
        <Contacts
          elements={searchQuery.length === 0 ? contacts : visibleContacts}
          onRemoveContacts={this.removeContacts}
        />
      </Layout>
    );
  }
}
