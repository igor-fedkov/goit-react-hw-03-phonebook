import properties from './properties.css';

const stylizedComponent = {
  input: `
		display: block;
		padding: 10px;

		width: 100%;
		box-sizing: border-box;
		border-radius: 4px;
		border: 1px solid black;

		font-size: 14px;

		&&:focus {
			border: 1px solid ${properties.mainColor};
			outline: none;
	}`,
	container: `
		padding: 10px;
		width: 450px;
		box-shadow: ${properties.boxShadow};
	`
}

export default stylizedComponent;