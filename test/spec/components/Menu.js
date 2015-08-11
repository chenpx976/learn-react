'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import Menu from 'components/Menu.js';

describe('Menu', () => {
    let MenuComponent;

    beforeEach(() => {
        MenuComponent = createComponent(Menu);
    });

    it('should have its component name as default className', () => {
        expect(MenuComponent._store.props.className).toBe('Menu');
    });
});
