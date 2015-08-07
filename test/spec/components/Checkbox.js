'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import Checkbox from 'components/Checkbox.jsx';

describe('Checkbox', () => {
    let CheckboxComponent;

    beforeEach(() => {
        CheckboxComponent = createComponent(Checkbox);
    });

    it('should have its component name as default className', () => {
        expect(CheckboxComponent._store.props.className).toBe('Checkbox');
    });
});
