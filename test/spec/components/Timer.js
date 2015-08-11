'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import Timer from 'components/Timer.js';

describe('Timer', () => {
    let TimerComponent;

    beforeEach(() => {
        TimerComponent = createComponent(Timer);
    });

    it('should have its component name as default className', () => {
        expect(TimerComponent._store.props.className).toBe('Timer');
    });
});
