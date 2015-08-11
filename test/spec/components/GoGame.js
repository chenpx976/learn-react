'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import GoGame from 'components/GoGame.js';

describe('GoGame', () => {
    let GoGameComponent;

    beforeEach(() => {
        GoGameComponent = createComponent(GoGame);
    });

    it('should have its component name as default className', () => {
        expect(GoGameComponent._store.props.className).toBe('GoGame');
    });
});
