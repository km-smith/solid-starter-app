import { render } from 'solid-js/dom';

const HelloMessage = ({name}) => (
	<div>Hello {name}</div>
);

render(
	() => <HelloMessage name="Solid Starter App" />,
	document.getElementById("app")
);