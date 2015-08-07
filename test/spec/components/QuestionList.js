'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import QuestionList from 'components/QuestionList.jsx';

describe('QuestionList', () => {
    let QuestionListComponent;

    beforeEach(() => {
        QuestionListComponent = createComponent(QuestionList);
    });

    it('should have its component name as default className', () => {
        expect(QuestionListComponent._store.props.className).toBe('QuestionList');
    });
});
