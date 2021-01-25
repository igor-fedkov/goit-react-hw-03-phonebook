import PropTypes from 'prop-types';
import { Label, Input, } from '../phoneBook.css';

const Filter = ({ filter, onInputChange }) => {
	return (
		<Label>
			Find contacts by name
			<Input type="text" name="filter" value={filter} onChange={onInputChange}/>
		</Label>
	)
}

Filter.propTypes = {
	filter: PropTypes.string,
	onInputChange: PropTypes.func
}

export default Filter;