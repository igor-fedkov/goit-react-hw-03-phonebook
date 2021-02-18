import styled from 'styled-components';

import styledComponent from '../GlobalStyles/stylizedComponent.css';

const ButtonDelete = styled.button`
	padding: 0;
	width: 26px;
	height: 26px;
	font-size: 14px;
	background-color: #fa5538;
	border-color: transparent;
	border-radius: 2px;
	color: white;
`;

const Li = styled.li`
	${styledComponent.container}
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 2px 0;

	transition: all 250ms;

	&.fade-enter {
		transform: translateX(-100%);
	}

	&.fade-enter-active {
		transform: translateX(0);
	}

	&.fade-exit {
		transform: translateX(0);
	}

	&.fade-exit-active {
		transform: translateX(-100%);
	}
`;

const Name = styled.span`

`;

const Number = styled.span`

`;

const NameAndBtn = styled.div`
	display: flex;
	justify-content: space-between;

	width: 50%;
`;


export { ButtonDelete, Li, Name, Number, NameAndBtn };