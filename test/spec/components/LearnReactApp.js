'use strict';

describe('LearnReactApp', () => {
  let React = require('react/addons');
  let LearnReactApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    LearnReactApp = require('components/LearnReactApp.js');
    component = React.createElement(LearnReactApp);
  });

  it('should create a new instance of LearnReactApp', () => {
    expect(component).toBeDefined();
  });
});
