'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import RealTimeSearch from 'components/RealTimeSearch.js';

describe('RealTimeSearch', () => {
    let RealTimeSearchComponent;

    beforeEach(() => {
        RealTimeSearchComponent = createComponent(RealTimeSearch);
    });

    it('should have its component name as default className', () => {
        expect(RealTimeSearchComponent._store.props.className).toBe('RealTimeSearch');
    });
});
