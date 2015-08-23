'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import RadioGroup from 'components/UI/RadioGroup.js';

describe('RadioGroup', () => {
    let RadioGroupComponent;

    beforeEach(() => {
        RadioGroupComponent = createComponent(RadioGroup);
    });

    it('should have its component name as default className', () => {
        expect(RadioGroupComponent._store.props.className).toBe('RadioGroup');
    });
});
