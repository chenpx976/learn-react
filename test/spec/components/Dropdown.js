'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import Dropdown from 'components/Dropdown.jsx';

describe('Dropdown', () => {
    let DropdownComponent;

    beforeEach(() => {
        DropdownComponent = createComponent(Dropdown);
    });

    it('should have its component name as default className', () => {
        expect(DropdownComponent._store.props.className).toBe('Dropdown');
    });
});
