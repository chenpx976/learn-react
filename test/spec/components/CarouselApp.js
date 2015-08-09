'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import CarouselApp from 'components/CarouselApp.jsx';

describe('CarouselApp', () => {
    let CarouselAppComponent;

    beforeEach(() => {
        CarouselAppComponent = createComponent(CarouselApp);
    });

    it('should have its component name as default className', () => {
        expect(CarouselAppComponent._store.props.className).toBe('CarouselApp');
    });
});
