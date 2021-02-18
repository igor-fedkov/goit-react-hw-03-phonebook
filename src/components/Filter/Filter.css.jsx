import styled from 'styled-components';

import stysizedComponent from '../GlobalStyles/stylizedComponent.css'

const Label = styled.label`
	display: block;
	margin-bottom: 10px;
`;

const Input = styled.input`
	${stysizedComponent.input}
`;

const Container = styled.div`
	${stysizedComponent.container}
	
	margin-top: 20px;

	transition: all 250ms;

	&.fade-enter {
		transform: scale(0);
	}

	&.fade-enter-active {
		transform: scale(1);
	}

	&.fade-exit {
		transform: scale(1);
	}

	&.fade-exit-active {
		transform: scale(0);
	}
`;

export { Label, Input, Container };