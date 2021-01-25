import PropTypes from 'prop-types';
import ContactItem from '../contactItem';

const ContactsList = ({ contacts, filter, onDeleteContact }) => {
	const filteredContacts = contacts.filter(contact =>
		contact.name.toLowerCase().includes(filter.toLowerCase()));
	
	const listItems = filteredContacts.map(({ name, number, id }) => {
		return (
			<ContactItem
				id={id}
				name={name}
				number={number}
				key={id}
				onDeleteContact={onDeleteContact}
			/>
		)
	})

	return (
		<ul>
			{listItems}
		</ul>
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