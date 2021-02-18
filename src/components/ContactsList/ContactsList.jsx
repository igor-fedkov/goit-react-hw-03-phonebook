import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from "react-transition-group"; 

import { List } from './ContactsList.css';

import ContactItem from '../ContactItem';

const ContactsList = ({ contacts, filter, onDeleteContact }) => {
	const filteredContacts = contacts.filter(contact =>
		contact.name.toLowerCase().includes(filter.toLowerCase()));
	
	const listItems = filteredContacts.map(({ name, number, id }) => {
		return (
			<CSSTransition
				key={id}
				timeout={250}
				classNames="fade"
				unmountOnExit
			>
				<ContactItem
					id={id}
					name={name}
					number={number}					
					onDeleteContact={onDeleteContact}
				/>
			</CSSTransition>
		)
	})

	return (
		
		<List>
			<TransitionGroup>
				{listItems}
			</TransitionGroup>
		</List>
	)
}

ContactsList.propTypes = {
	contacts: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		number: PropTypes.string.isRequired
	})), 
	filter: PropTypes.string
}

export default ContactsList;