import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from './App';

const renderer = new ShallowRenderer();
renderer.render(<App />);
const output = renderer.getRenderOutput();

it('should render', () => {
  const heading = output.props.children.type
  expect(output.type).toBe('section')
  expect(heading).toBe('h1')
});
