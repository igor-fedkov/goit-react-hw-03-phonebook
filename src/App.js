import './App.css';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import PhoneBook from './components/PhoneBook'
import { loadKey, saveKey } from './utils/local-storage';

class App extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string
    })),
    filter: PropTypes.string
  }

  state = {
    contacts: [],
    filter: '',
		showNotification: false
  }

  componentDidMount() { 
    const contacts = loadKey('contacts');
    if (contacts) {
      this.setState({ contacts: contacts });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      saveKey('contacts', this.state.contacts);
    }
  };

  onInputChange = (event) => {
    const { name, value } = event.target;
		this.setState(
      { [name]: value }
    )
  }
  
  addContact = ({ name, number }) => {
    const usedContactName = this.state.contacts.find(contact => contact.name === name);
    if (usedContactName !== undefined) {
      this.setState({ showNotification: true });
      setTimeout(() => this.setState({ showNotification: false }), 3000);
      return;
    }

    const contact = {
      id: uuidv4(),
      name,
      number
    }
    
    this.setState(state => {
      return {
        contacts: [contact, ...state.contacts]
      }
    })
  };

  deleteContact = (id => {
    this.setState(state => {
      return {contacts: state.contacts.filter(contact => contact.id !== id)}
    })
  })

  

  render() {
    const { contacts, name, number, filter, showNotification } = this.state;

    return (
      <div className="App">
        <PhoneBook
          name={name}
          number={number}
          addContact={this.addContact}
          onInputChange={this.onInputChange}
          contacts={contacts}
          filter={filter}
          onDeleteContact={this.deleteContact}
          showNotification={showNotification}
        />
      </div>
    );
  }
}

export default App;
