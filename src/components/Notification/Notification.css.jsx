import styled from 'styled-components';

const NotificationEl = styled.div`
  position: absolute;
  right: 50px;
  top: 10px;

  padding: 10px;
  width: 200px;

  text-align: center;
  color: white;
  background-color: red;
  border-radius: 5px;

  transition: all 250ms;

  &.fade-enter {
		transform: translateX(100%);
	}

	&.fade-enter-active {
		transform: translateX(0);
	}

  &.fade-exit {
		transform: translateX(0);
	}

	&.fade-exit-active {
		transform: translateX(100%);
	}
`;

export { NotificationEl };