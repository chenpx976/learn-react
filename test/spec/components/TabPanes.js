'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import TabPanes from 'components/TabPanes.jsx';

describe('TabPanes', () => {
    let TabPanesComponent;

    beforeEach(() => {
        TabPanesComponent = createComponent(TabPanes);
    });

    it('should have its component name as default className', () => {
        expect(TabPanesComponent._store.props.className).toBe('TabPanes');
    });
});
