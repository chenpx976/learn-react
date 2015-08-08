'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import ShowAddButton from 'components/ShowAddButton.jsx';

describe('ShowAddButton', () => {
    let ShowAddButtonComponent;

    beforeEach(() => {
        ShowAddButtonComponent = createComponent(ShowAddButton);
    });

    it('should have its component name as default className', () => {
        expect(ShowAddButtonComponent._store.props.className).toBe('ShowAddButton');
    });
});
