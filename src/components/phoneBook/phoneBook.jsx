import { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from "react-transition-group";

import { PhoneBookEl, Title } from './PhoneBook.css';

import ContactForm from '../ContactForm';
import ContactsList from '../ContactsList';
import Filter from '../Filter';
import Notification from '../Notification';


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
		const { contacts, filter, onInputChange, onDeleteContact, showNotification } = this.props;
		const { name, number } = this.state;
		const timeout = 250;

		return (
			<PhoneBookEl>
				
				<CSSTransition
					in={true}
					appear={true}
					classNames="fade"
					timeout={timeout}>
					
						<Title>PhoneBook</Title>
				</CSSTransition>

				<CSSTransition
					in={showNotification}
					appear={true}
					classNames="fade"
					timeout={timeout}
					unmountOnExit
				>					
					<Notification text="Contact already exists!"/>
				</CSSTransition>

				

				<ContactForm
					name={name}
					number={number}
					onSubmit={this.onSubmit}
					onInputChange={this.onInputChange}
				/>

				<CSSTransition
					in={contacts.length > 1}
					appear={true}
					classNames="fade"
					timeout={timeout}
					unmountOnExit>
					
					{/* {(state) => {
						return <Filter filter={filter} onInputChange={onInputChange} />
					}} */}
					<Filter filter={filter} onInputChange={onInputChange} />
				</CSSTransition>
				
				<ContactsList contacts={contacts} filter={filter} onDeleteContact={onDeleteContact} />
				
				
			</PhoneBookEl>
		);
	}
}

PhoneBook.propTypes = {
	addContact: PropTypes.func,
	onInputChange: PropTypes.func
}

export default PhoneBook;