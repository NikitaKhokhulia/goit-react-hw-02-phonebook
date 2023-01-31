import React, { Component } from 'react';
import ContactsForm from './ContactsForm/ContactsForm';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <ContactsForm />
        <h2>Contacts</h2>
        <ul>
          <li>Rosie Simpson</li>
          <li>Hermione Kline</li>
          <li>Eden Clements</li>
        </ul>
      </>
    );
  }
}
