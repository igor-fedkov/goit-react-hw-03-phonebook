import PropTypes from 'prop-types';

import { ButtonDelete, Li, Name, Number, NameAndBtn } from './ContactItem.css';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
	return (
		<Li>
			<Name>{name}:</Name>
			<NameAndBtn>
				<Number>{number}</Number> 
				<ButtonDelete
					type="button"
					onClick={() => onDeleteContact(id)}>
					&#x2716;
				</ButtonDelete>
			</NameAndBtn>
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