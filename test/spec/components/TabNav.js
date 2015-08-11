'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import TabNav from 'components/TabNav.jsx';

describe('TabNav', () => {
    let TabNavComponent;

    beforeEach(() => {
        TabNavComponent = createComponent(TabNav);
    });

    it('should have its component name as default className', () => {
        expect(TabNavComponent._store.props.className).toBe('TabNav');
    });
});
