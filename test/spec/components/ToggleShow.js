'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import ToggleShow from 'components/ToggleShow.jsx';

describe('ToggleShow', () => {
    let ToggleShowComponent;

    beforeEach(() => {
        ToggleShowComponent = createComponent(ToggleShow);
    });

    it('should have its component name as default className', () => {
        expect(ToggleShowComponent._store.props.className).toBe('ToggleShow');
    });
});
