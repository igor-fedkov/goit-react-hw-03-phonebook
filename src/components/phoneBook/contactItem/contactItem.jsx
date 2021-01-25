import PropTypes from 'prop-types';
import { ButtonDelete, Li } from '../phoneBook.css';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
	return (
		<Li>
			{name}: {number}
			<ButtonDelete type="button" onClick={() => onDeleteContact(id)}>Delete</ButtonDelete>
		</Li>		
	)
}

ContactItem.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	number: PropTypes.string,
	onDeleteContact: PropTypes.func
}

export default ContactItem;