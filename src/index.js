import { customElement } from 'solid-element';

customElement('solid-starter-app', {name: 'world'}, ({ name }) => {
  return <h1>Hello {( name )}</h1>;
});