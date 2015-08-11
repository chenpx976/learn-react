'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import CalcApp from 'components/CalcApp.js';

describe('CalcApp', () => {
    let CalcAppComponent;

    beforeEach(() => {
        CalcAppComponent = createComponent(CalcApp);
    });

    it('should have its component name as default className', () => {
        expect(CalcAppComponent._store.props.className).toBe('CalcApp');
    });
});
