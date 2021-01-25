import { Component } from 'react';
import PropTypes from 'prop-types';

import { PhoneBookEl } from './phoneBook.css';
import ContactForm from './contactForm';
import ContactsList from './contactsList';
import Filter from './filter';


class PhoneBook extends Component {
	
	static propTypes = {
		name: PropTypes.string,
		number: PropTypes.string,
	}

	state = {
		name: '',
    number: ''
	}

	onInputChange = (event) => {
    const { name, value } = event.target;
		this.setState(
      { [name]: value }
    )
	}

	onSubmit = (event) => {
		event.preventDefault();

		const { name, number } = this.state;
		this.props.addContact({ name, number });	
    this.setState({ name: '', number: '' });
	}
	
	render() {
		const { contacts, filter, onInputChange, onDeleteContact } = this.props;
		const { name, number, } = this.state;

		return (
			<PhoneBookEl>
				<h1>PhoneBook</h1>
				<ContactForm
					name={name}
					number={number}
					onSubmit={this.onSubmit}
					onInputChange={this.onInputChange}
				/>
				<h2>Contacts</h2>
				<Filter filter={filter} onInputChange={onInputChange}/>
				{contacts.length > 0 &&
					<ContactsList contacts={contacts} filter={filter} onDeleteContact={onDeleteContact} />}
			</PhoneBookEl>
		);
	}
}

PhoneBook.propTypes = {
	addContact: PropTypes.func,
	onInputChange: PropTypes.func
}

export default PhoneBook;