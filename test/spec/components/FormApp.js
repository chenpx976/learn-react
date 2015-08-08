'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import FormApp from 'components/FormApp.jsx';

describe('FormApp', () => {
    let FormAppComponent;

    beforeEach(() => {
        FormAppComponent = createComponent(FormApp);
    });

    it('should have its component name as default className', () => {
        expect(FormAppComponent._store.props.className).toBe('FormApp');
    });
});
