'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import QuestionForm from 'components/QuestionForm.jsx';

describe('QuestionForm', () => {
    let QuestionFormComponent;

    beforeEach(() => {
        QuestionFormComponent = createComponent(QuestionForm);
    });

    it('should have its component name as default className', () => {
        expect(QuestionFormComponent._store.props.className).toBe('QuestionForm');
    });
});
