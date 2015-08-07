'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import QuestionApp from 'components/QuestionApp.jsx';

describe('QuestionApp', () => {
    let QuestionAppComponent;

    beforeEach(() => {
        QuestionAppComponent = createComponent(QuestionApp);
    });

    it('should have its component name as default className', () => {
        expect(QuestionAppComponent._store.props.className).toBe('QuestionApp');
    });
});
