import PropTypes from 'prop-types';
import { Form, Label, Input } from '../phoneBook.css';

const ContactForm = ({ name, number, onInputChange, onSubmit }) => {
	return (
		<Form onSubmit={onSubmit}>
			<Label>
				Name
				<Input type="text" name="name" value={name} onChange={onInputChange}/>
			</Label>

			<Label>
				Number
				<Input type="tel" name="number" value={number} onChange={onInputChange}/>
			</Label>

			<button type="submit">Add contact</button>
		</Form>
	)
}

ContactForm.propTypes = {
	name: PropTypes.string, 
	number: PropTypes.string, 
	onInputChange: PropTypes.func, 
	onSubmit: PropTypes.func
}

export default ContactForm;