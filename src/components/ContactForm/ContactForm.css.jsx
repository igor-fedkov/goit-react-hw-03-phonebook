import styled from 'styled-components';

import stylizedComponent from '../GlobalStyles/stylizedComponent.css'
import properties from '../GlobalStyles/properties.css';

const Form = styled.form`
	padding: 10px;
	width: 450px;
	box-shadow: ${properties.boxShadow};
`;

const Label = styled.label`
	width: 100%;
	display: block;
	margin-bottom: 10px;
`;

const Input = styled.input`
	${stylizedComponent.input}
`;

const Button = styled.button`
	padding: 8px;

	width: 100%;
	border-radius: 4px;
	background-color: ${properties.mainColor};
	color: white;

	&&:hover {
		background-color: ${properties.hoverColor};
	}
`;

export { Form, Label, Input, Button };