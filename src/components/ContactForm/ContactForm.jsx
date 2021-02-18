import PropTypes from 'prop-types';
import { Form, Label, Input, Button } from './ContactForm.css';

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

			<Button type="submit">Add contact</Button>
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