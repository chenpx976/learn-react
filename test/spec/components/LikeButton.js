'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import LikeButton from 'components/LikeButton.jsx';

describe('LikeButton', () => {
    let LikeButtonComponent;

    beforeEach(() => {
        LikeButtonComponent = createComponent(LikeButton);
    });

    it('should have its component name as default className', () => {
        expect(LikeButtonComponent._store.props.className).toBe('LikeButton');
    });
});
