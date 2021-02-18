import PropTypes from 'prop-types';
import { Label, Input, Container } from './Filter.css';

const Filter = ({ filter, onInputChange }) => {
	return (
		<Container>
			<Label>
				Find contacts by name
				<Input type="text" name="filter" value={filter} onChange={onInputChange}/>
			</Label>
		</Container>
	)
}

Filter.propTypes = {
	filter: PropTypes.string,
	onInputChange: PropTypes.func
}

export default Filter;