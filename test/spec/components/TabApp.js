'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import TabApp from 'components/TabApp.jsx';

describe('TabApp', () => {
    let TabAppComponent;

    beforeEach(() => {
        TabAppComponent = createComponent(TabApp);
    });

    it('should have its component name as default className', () => {
        expect(TabAppComponent._store.props.className).toBe('TabApp');
    });
});
